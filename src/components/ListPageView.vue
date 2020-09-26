<template>
  <div>
    <v-card 
      v-if="detailAyat.nama"
      outlined>
      <v-card-text>
        <v-sheet v-if="loading">
          <v-skeleton-loader
            height="94"
            type="list-item-three-line"
          >
          </v-skeleton-loader>
          <v-skeleton-loader
            height="94"
            type="list-item-three-line"
          >
          </v-skeleton-loader>
          <v-skeleton-loader
            height="94"
            type="list-item-three-line"
          >
          </v-skeleton-loader>
          <v-skeleton-loader
            height="94"
            type="list-item-three-line"
          >
          </v-skeleton-loader>
        </v-sheet>
        <div v-else>
          <div class="previous">
            <v-list
              three-line
            >
              <v-list-item
                v-for="(list, i) in previousSurah"
                :key="i"
                class="text-right"
              >
                <v-list-item-content>
                  <v-list-item-title 
                    class="title__text headline grey--text text--darken-2 height-line"
                  >
                    {{ list.arab }} ({{ list.ayat }})
                  </v-list-item-title>
                  <v-list-item-subtitle class="subtitle__text mt-3" v-html="list.ind"></v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle__text mt-2 ">{{list.arti}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-col class="text-center">
              <v-btn text color="indigo" @click="previous" v-if="firstAyat > 1 && previousSurah.length == 0">
                <div v-if="loadingListAyat">
                  <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                  Previous
                </div>
              </v-btn>
            </v-col>
          </div>
          <div class="recent">
            <div v-if="firstAyat > 1">
              <p class="font-weight-bold">Sedang Dibaca</p>
              <v-divider></v-divider>
            </div>
            <v-list
              three-line
              v-scroll="handleScroll"
            >
              <v-list-item
                v-for="(list, i) in listSurah"
                :key="i"
                class="text-right"
              >
                <v-list-item-content>
                  <v-list-item-title 
                    class="title__text headline grey--text text--darken-2 height-line"
                    :id="list.ayat"
                  >
                    {{ list.arab }} ({{ list.ayat }})
                  </v-list-item-title>
                  <v-list-item-subtitle class="subtitle__text mt-3" v-html="list.ind"></v-list-item-subtitle>
                  <v-list-item-subtitle class="subtitle__text mt-2 ">{{list.arti}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-col class="text-center">
              <v-btn text color="indigo" @click="more" v-if="lastAyat < parseInt(this.detailAyat.ayat)">
                <div v-if="loadingListAyat">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                  More..
                </div>
              </v-btn>
            </v-col>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'list-view',
  data: () => ({
    listSurah: [],
    loading: false,
    lastAyat: null,
    firstAyat: 1,
    loadingListAyat: false,
    numberIdSurah: [],
    scrollPosition: null,
    detailAyat: {},
    checkItem: null,
    id: null,
    previousSurah: [],
    numberIdSurahPrev: []
  }),
  computed: {
    ...mapGetters({
      readSurah: 'reading/readSurah',
      dialogStatus : 'dialog/status',
      currentComponent : 'dialog/component',
      surah: 'surat'
    })
  },
  methods: {
    ...mapActions({
      add: 'reading/add',
      change: 'reading/update',
      setAlert: 'alert/set',
      setTitle: 'set',
      setDialogStatus: 'dialog/setStatus',
    }),
    go () {
      this.numberIdSurah = []
      let { id } = this.$route.params
      this.id = id
      this.checkItem = this.readSurah.find(item => item.nomor === this.id)

      const last = this.surah.find(surah => {
        return surah.nomor == id
      })

      if(!this.checkItem){
        this.firstAyat = 1
        this.lastAyat = last.ayat >=10 ? 10 : last.ayat
      } else {
        this.firstAyat = this.checkItem.ayat
        this.lastAyat = (this.firstAyat + 10) >= last.ayat ? last.ayat : this.firstAyat + 10
      }
      // this.lastAyat = this.lastAyat > parseInt(this.detailAyat.ayat) ? parseInt(this.detailAyat.ayat) : this.lastAyat
      let url = `/surat/${this.id}/ayat/${this.firstAyat}-${this.lastAyat}`
      this.axios.get(url)
      .then((response) => {
        if (response && response.status === 200){
          let { data } = response
          let array_ar = data.ayat.data.ar
          let array_idt = data.ayat.data.idt
          let array_id = data.ayat.data.id
          this.detailAyat = data.surat

          this.sendDetailSurah(this.detailAyat)

          if(!this.checkItem){
            this.add({
              nomor: this.detailAyat.nomor,
              nama: this.detailAyat.nama,
              ayat: this.firstAyat,
              jmlAyat: this.detailAyat.ayat
            })
          }

          this.setTitle({
            text: this.detailAyat.nama
          })

          if(this.loadingListAyat){
            this.loadingListAyat = false
          }

          for(let i = 0; i < this.lastAyat - 1; i++){
            this.numberIdSurah[i] = i + 1
          }

          for(let i = 0; i < array_ar.length; i++){
            this.listSurah.push({
              ayat: array_ar[i].ayat,
              arab: array_ar[i].teks,
              ind: array_idt[i].teks,
              arti: array_id[i].teks
            })
          }

          this.loading = false
        }
      })
    },
    elementInViewport(el) {
      let top = el.offsetTop;
      let height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
      }

      return (
        top >= window.pageYOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight)
      );
    },
    handleScroll() {
      // let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight
      // let offsetHeight = document.documentElement.offsetHeight

      this.numberIdSurah.find(number => {
        if (number >= this.firstAyat && number <= this.lastAyat ){
          const el = document.getElementById(number);
          if(this.elementInViewport(el)) {
            // console.log(number)
            this.scrollPosition = number
          }
        }
      });

      // if (bottomOfWindow == offsetHeight) {
      //   if(this.lastAyat < parseInt(this.detailAyat.ayat)){
      //     this.loadingListAyat = true
      //     this.lastAyat = this.lastAyat < parseInt(this.detailAyat.ayat) ? this.lastAyat += 10 : parseInt(this.detailAyat.ayat) 
      //     this.firstAyat = this.lastAyat > 10 ? this.firstAyat += 10 : this.firstAyat
      //     // console.log(`${this.firstAyat} - ${this.lastAyat}`)
      //     this.go()
      //   }
      // }

      this.saveState()
    },
    saveState() {
      this.change({
        nomor: this.detailAyat.nomor,
        nama: this.detailAyat.nama,
        ayat: this.scrollPosition,
        jmlAyat: this.detailAyat.ayat,
        updateMode: null
      })

      let alertMessage;
      if(this.scrollPosition < this.detailAyat.ayat) {
        alertMessage = `Anda masih menyelesaikan ${this.scrollPosition} dari ${this.detailAyat.ayat} ayat surat ${this.detailAyat.nama}`
      } else {
        alertMessage = `Selamat anda menyelesaikan surat ${this.detailAyat.nama}` 
      }
      
      this.setAlert({
        color: 'success',
        text: alertMessage
      })
    },
    more() {
      if(this.lastAyat < parseInt(this.detailAyat.ayat)){
        this.loadingListAyat = true
        this.lastAyat = this.lastAyat < parseInt(this.detailAyat.ayat) ? this.lastAyat += 10 : parseInt(this.detailAyat.ayat) 
        this.firstAyat = this.lastAyat > 10 ? this.firstAyat += 10 : this.firstAyat
        // console.log(`${this.firstAyat} - ${this.lastAyat}`)
        this.go()
      }
    },
    previous() {
      this.loadingListAyat = true
      fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${this.id}`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        // console.log(json)
        json.forEach((data) => {
          // console.log(data.nomor)
          if (parseInt(data.nomor) < parseInt(this.firstAyat)) {
            this.previousSurah.push({
              ayat: data.nomor,
              arab: data.ar,
              ind: data.tr,
              arti: data.id
            })
            this.numberIdSurahPrev.push(data.nomor)
          }
          
        })
        // this.listSurah.unshift(...this.previousSurah)
        // this.numberIdSurah.unshift(this.numberIdSurahPrev)
        this.loadingListAyat = false
      })
    },
    sendDetailSurah(detailAyat) {
      this.$emit('detail', detailAyat);
    }
  },
  mounted () {
    // this.loading = true
    if (this.dialogStatus === true && this.currentComponent === 'search'){
      this.setDialogStatus(false)
    }

    this.go()
  }
}
</script>
<style scoped>
  .subtitle__text {
    -webkit-line-clamp: unset !important;
  }
  .title__text {
    white-space: normal
  }
  .height-line {
    line-height: 1.5;
  }
</style>

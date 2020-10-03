<template>
  <div>
    <v-card class="mt-5" 
      v-if="detailAyat.nama"
      outlined>
      <v-card-text>
        <v-row no-gutters>
          <v-col>
            <p class="mb-5">
              Ayat ke - {{ ayat }} / {{ detailAyat.ayat }}
            </p>
          </v-col>
        </v-row>
        <br>
        <v-sheet
          class="px-3 pt-3 pb-3"
          v-if="loadingNextPrevBtn"
        >
          <v-skeleton-loader
            ref="skeleton"
            type="text"
            class="mx-auto"
          ></v-skeleton-loader>
          <v-skeleton-loader
            ref="skeleton"
            type="text"
            class="mx-auto"
          ></v-skeleton-loader>
          <v-skeleton-loader
            ref="skeleton"
            type="text"
            class="mx-auto"
          ></v-skeleton-loader>
          <br>
          <v-skeleton-loader
            ref="skeleton"
            type="text"
            class="mx-auto"
          ></v-skeleton-loader>
          <br>
          <v-skeleton-loader
            ref="skeleton"
            type="text"
            class="mx-auto"
          ></v-skeleton-loader>
        </v-sheet>
        <div
          v-else
        >
          <p
            v-html="isiAyatAr.teks"
            class="text-center headline height-line"
          >  
          </p>
          <p
            v-html="isiAyatId.teks"
            class="text-center"
          >  
          </p>
          <br>
          <p
            v-text="isiAyatArti.teks"
            class="text-center"
          ></p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-col class="text-left">
          <v-btn
            color="indigo"
            dark
            @click="prev"
            :loading="loadingNextPrevBtn"
            v-show="parseInt(this.detailAyat.nomor) > minSurah || ayat > 1"
            fab
            bottom
            left
          >
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn
            color="indigo"
            dark
            @click="next"
            :loading="loadingNextPrevBtn"
            v-show="parseInt(this.detailAyat.nomor) < maxSurah || ayat < detailAyat.ayat "
            fab
            bottom
            right
          >
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'single-view',
  data: () => ({
    surah: {},
    detailAyat: {},
    isiAyatAr: {},
    isiAyatId: {},
    isiAyatArti: {},
    ayat: 0,
    disablePrev: false,
    disableNext: false,
    loadingNextPrevBtn: false,
    minSurah: 1,
    maxSurah: 114,
    dialogConfirm: false,
    btnToogle: 0
  }),
  computed: {
    ...mapGetters({
      readSurah: 'reading/readSurah',
      dialogStatus : 'dialog/status',
      currentComponent : 'dialog/component'
    })
  },
  methods: {
    ...mapActions({
      add: 'reading/add',
      change: 'reading/update',
      setTitle: 'set',
      setDialogStatus: 'dialog/setStatus',
    }),
    go() {
      let { id } = this.$route.params
      let checkItem = this.readSurah.find(item => item.nomor === id)
      
      if(!checkItem){
        this.ayat = 1
      } else {
        this.ayat = checkItem.ayat
      }

      let url = `/surat/${id}/ayat/${this.ayat}`
      url = encodeURI(url)
      this.axios.get(url)
      .then((response) => {
        if(response && response.status === 200){
          this.loadingNextPrevBtn = false

          let data = response.data
          this.detailAyat = data.surat
          this.isiAyatAr = data.ayat.data.ar[0]
          this.isiAyatId = data.ayat.data.idt[0]
          this.isiAyatArti = data.ayat.data.id[0]

          this.sendDetailSurah(this.detailAyat)

          if(!checkItem){
            this.add({
              nomor: this.detailAyat.nomor,
              nama: this.detailAyat.nama,
              ayat: this.ayat,
              jmlAyat: this.detailAyat.ayat
            })
          }

          this.setTitle({
            text: this.detailAyat.nama
          })

        }

      })
      .catch((responses) => {
        let { error } = responses
        console.log(error)
      })
    },
    next() {
      if (this.ayat === parseInt(this.detailAyat.ayat) ){
        this.$confirm('Ke Surat Selanjutnya ?').then(res => {
          if(res) {
            this.loadingNextPrevBtn = true
            this.$router.push({path: `/surah/${parseInt(this.detailAyat.nomor) + 1}`})
            this.go()
          }
        })
      } else {
        this.loadingNextPrevBtn = true

        this.change({
          nomor: this.detailAyat.nomor,
          nama: this.detailAyat.nama,
          ayat: this.ayat,
          jmlAyat: this.detailAyat.ayat,
          updateMode: 'next'
        })
        this.go()
      }
    },
    prev() {
      if (this.ayat == 1 ){
        this.$confirm('Ke Surat Sebelumnya ?').then(res => {
          if(res) {
            // this.loadingNextPrevBtn = true
            this.loadingNextPrevBtn = true
            this.$router.push({path: `/surah/${parseInt(this.detailAyat.nomor) - 1}`})
            this.go()
          }
        })
      } else {
        // this.loadingNextPrevBtn = true
        this.loadingNextPrevBtn = true
        this.change({
          nomor: this.detailAyat.nomor,
          nama: this.detailAyat.nama,
          ayat: this.ayat,
          jmlAyat: this.detailAyat.ayat,
          updateMode: 'prev'
        })
        this.go()
      }
    },
    sendDetailSurah(detailAyat) {
      this.$emit('detail', detailAyat);
    }
  },
  mounted() {
    if (this.dialogStatus === true && this.currentComponent === 'search'){
      this.setDialogStatus(false)
    }
    this.go()
  }
}
</script>

<style scoped>
  .height-line {
    line-height: 1.5;
  }
</style>

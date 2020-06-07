<template>
  <div>
    <v-card 
      v-if="detailAyat.nama"
      outlined
    >
      <v-card-title>
        {{ detailAyat.nama }} ({{ detailAyat.asma }})
      </v-card-title>
      <v-card-subtitle
        v-text="detailAyat.arti"
      ></v-card-subtitle>
      <v-card-text
        v-html="detailAyat.keterangan"
        class="text-justify"
      >
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        Ayat ke - {{ this.ayat }} 
        <br>
        <p
          v-html="isiAyatAr.teks"
          class="text-center headline"
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
      </v-card-text>
      <v-card-text>
        <v-btn
          absolute
          dark
          fab
          top
          right
          color="indigo"
          @click="timerMode = !timerMode"
        >
          <v-icon>mdi-clock</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-col>
          <v-btn
            color="primary"
            @click="prev"
            :disabled="disablePrev"
          >Prev</v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="65"
            :width="5"
            :indeterminate="timerMode"
            color="indigo"
            v-if="timerMode"
          >
            {{ timer }}
          </v-progress-circular>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-right">
          <v-btn
            color="primary"
            @click="next"
            :disabled="disableNext"
          >Next</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
    <!-- <v-skeleton-loader
      class="mx-auto"
      max-width="500"
      type="card"
      v-else
    ></v-skeleton-loader> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    surah: {},
    detailAyat: {},
    isiAyatAr: {},
    isiAyatId: {},
    isiAyatArti: {},
    ayat: 0,
    disablePrev: false,
    disableNext: false,
    timerMode: false,
    timer: 0,
    maxTimer: 30
  }),
  computed: {
    ...mapGetters({
      readSurah: 'reading/readSurah'
    })
  },
  watch: {
    timer: {
      handler(value) {
        if(this.timerMode===true && this.disableNext === false){
          this.countTimer(value)
        } else {
          this.timer = this.maxTimer
        }
      },
      immediate: false // This ensures the watcher is triggered upon creation
    },
    timerMode: {
      handler() {
        if(this.timerMode===true && this.disableNext === false){
          this.countTimer(this.maxTimer)
        } else {
          this.timer = this.maxTimer
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      add: 'reading/add',
      change: 'reading/update',
      setTitle: 'set'
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
        let data = response.data
        this.detailAyat = data.surat
        this.isiAyatAr = data.ayat.data.ar[0]
        this.isiAyatId = data.ayat.data.idt[0]
        this.isiAyatArti = data.ayat.data.id[0]
        if(!checkItem){
          let value = {
            nomor: this.detailAyat.nomor,
            nama: this.detailAyat.nama,
            ayat: this.ayat,
            jmlAyat: this.detailAyat.ayat
          }

          this.add(value)
        }

        this.setTitle({
          text: this.detailAyat.nama
        })

      })
      .catch((responses) => {
        let { error } = responses
        console.log(error)
      })

      if(this.ayat === 1){
        this.disablePrev = true
        this.disableNext = false
      }else if (this.ayat === parseInt(checkItem.jmlAyat)){
        this.disablePrev = false
        this.disableNext = true
      } else {
        this.disablePrev = false
        this.disableNext = false
      }

    },
    next() {
      this.change({
        nomor: this.detailAyat.nomor,
        nama: this.detailAyat.nama,
        ayat: this.ayat + 1,
        jmlAyat: this.detailAyat.ayat
      })
      this.go()
    },
    prev() {
      this.change({
        nomor: this.detailAyat.nomor,
        nama: this.detailAyat.nama,
        ayat: this.ayat - 1,
        jmlAyat: this.detailAyat.ayat
      })
      this.go()
    },
    countTimer(value) {
      if (value > 0) {
        setTimeout(() => {
          this.timer--;
        }, 1000);
      } else {
        this.next()
        this.timer = this.maxTimer
      }
    }
  },
  created() {
    this.go()
  }
}
</script>

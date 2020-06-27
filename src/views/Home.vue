<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex md>
          <v-card>
            <template>
              <v-carousel
                cycle
                delimiter-icon="mdi-minus"
                hide-delimiter-background
                interval="5000"
                :show-arrows="false"
              >
                <v-carousel-item
                  v-for="(item,i) in itemImages"
                  :key="i"
                  :src="`${imageUrl}/${item.src}`"
                  :aspect-ratio="16/9"
                >
                  <v-row align="end" class="lightbox white--text pa-5 fill-height">
                    <v-col>
                      <div class="subtitle-1 text-justify">
                        {{ item.quote }} 
                        <br> 
                        {{ item.from }} 
                      </div>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </template>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="ma-0 pa-2" grid-list-sm v-if="surat">
      <v-layout wrap>
        <v-flex v-for="(surah, index) in surat.slice(0, items)" :key="`surah-`+index" md>
          <v-card 
            :to="'/surah/'+surah.nomor"
            outlined
            hover
          >
            <v-card-title
              class="fill-height align-end"
            >
              {{ surah.nama }} ( {{ surah.asma }} )
            </v-card-title>
            <v-card-subtitle
              v-text="surah.arti"
            ></v-card-subtitle>
            <v-card-actions>
              <v-icon>mdi-book</v-icon>
              <span class="grey--text">
                Surat Ke - {{ surah.nomor }}
              </span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-col class="text-center">
        <v-btn
          text
          color="indigo"
          @click="more()"
          v-if="surat.length > items"
        >
          More..
        </v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  data: () => ({
    items: 20,
    itemImages: [
      {
        src: 'view-1.jpg',
        quote: 'Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak',
        from: 'QS Al-Kautsar : 1'
      },
      {
        src: 'view-2.jpg',
        quote: 'Maka nikmat Tuhanmu yang manakah yang kamu dustakan?',
        from: 'QS Ar-Rahman : 13'
      },
      {
        src: 'view-3.jpg',
        quote: 'Sesungguhnya pada pertukaran malam dan siang itu dan pada apa yang diciptakan Allah di langit dan di bumi, benar-benar terdapat tanda-tanda (kekuasaan-Nya) bagi orang-orang yang bertakwa.',
        from: 'QS Yunus : 6'
      },
      {
        src: 'view-4.jpg',
        quote: 'Sungguh kami ciptakan manusia itu pada perwujudan yang lebih baik.',
        from: 'QS At-Tin : 4'
      },
      {
        src: 'view-5.jpg',
        quote: 'Dan sesungguhnya telah Kami muliakan anak cucu Adam, Kami angkat mereka di daratan dan di lautan, Kami beri mereka rizki yang baik-baik dan Kami lebihkan mereka dengan kelebihan yang sempurna atas kebanyakan mahluk-mahluk yang telah Kami ciptakan.',
        from: 'QS Al-Isra : 70'
      },
    ],
    isActive: false
  }),
  created() {
    if (this.surat.length > 0){
      this.AllSurah = this.surat
    } else {
      this.axios.get('/surat')
      .then((response) => {
        let { hasil } = response.data
        this.setSurat(hasil)
      })
      .catch((responses) => {
        let { error } = responses
        console.log = error
      })
    }

    if(this.$route.path === '/' && this.text !== '' ){
      this.setAlert({
        status: true,
        color: this.color,
        text: this.text
      })
    }

    this.setTitle({})
  },
  methods: {
    more() {
      this.items += 10
    },
    ...mapActions({
      setTitle: 'set',
      setAlert: 'alert/set',
      setSurat: 'addSurat'
    })
  },
  computed: {
    ...mapGetters({
      text: 'alert/text',
      color: 'alert/color',
      surat: 'surat'
    })
  },
}
</script>

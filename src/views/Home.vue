<template>
  <div>
    <v-container class="ma-0 pa-2" grid-list-sm v-if="AllSurah">
      <v-layout wrap>
        <!-- <template>
          <v-row align="center" justify="center" class="mb-10">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              lazy-src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="600"
              max-height="300"
            >
            </v-img>
          </v-row>
        </template> -->
        <v-flex v-for="(surah, index) in AllSurah.slice(0, items)" :key="`surah-`+index" md>
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
          v-if="AllSurah.length > items"
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
    AllSurah: [],
    items: 20
  }),
  created() {
    this.axios.get('/surat')
    .then((response) => {
      let { hasil } = response.data
      this.AllSurah = hasil
    })
    .catch((responses) => {
      let { error } = responses
      console.log = error
    })

    this.setTitle({})
  },
  methods: {
    more() {
      this.items += 10
    },
    ...mapActions({
      setTitle: 'set',
      setAlert: 'alert/set',
    })
  },
  computed: {
    ...mapGetters({
      text: 'alert/text',
      color: 'alert/color'
    })
  },
  mounted() {
    if(this.$route.path === '/' && this.text !== '' ){
      this.setAlert({
        status: true,
        color: this.color,
        text: this.text
      })
    }
  }
}
</script>

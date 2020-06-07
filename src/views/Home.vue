<template>
  <div>
    <v-container class="ma-0 pa-2" grid-list-sm v-if="AllSurah">
      <v-layout wrap>
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
import { mapActions } from 'vuex'
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
      setTitle: 'set'
    })
  }
}
</script>

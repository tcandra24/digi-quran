<template>
  <v-card>
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-text-field
        hide-details
        append-icon="mdi-arrow-right"
        flat
        autofocus
        label="Search"
        prepend-inner-icon="mdi-magnify"
        v-model="keyword"
        @input="doSearch"
      ></v-text-field>
    </v-toolbar>
    <v-card-text>
      <v-subheader v-if="keyword.length>0">
        Result search "{{ keyword }}"
      </v-subheader>
      <v-alert
        outlined
        icon="mdi-close-outline"
        :value="getSurat.length == 0 && keyword.length > 0 "
        color="warning"
      >
        Surat tidak ditemukan
      </v-alert>
      <v-container class="ma-0 pa-2" grid-list-sm>
        <v-layout wrap>
          <v-flex v-for="(surah, index) in getSurat" :key="`surah-`+index" md>
            <v-card 
              :to="'/surah/'+surah.nomor"
              outlined
              hover
            >
              <v-card-title
                class="fill-height align-end"
              >
                {{ surah.nomor }} .{{ surah.nama }} ( {{ surah.asma }} )
              </v-card-title>
              <v-card-subtitle
                v-text="artiSurah(surah.arti)"
              ></v-card-subtitle>
              <v-card-actions>
                <v-icon>mdi-book</v-icon>
                <span class="grey--text">
                  {{ firstUpper(surah.type) }}
                </span>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import { artiFilter } from '@/mixins/artiFilter'
export default {
  name: 'search',
  mixins:[artiFilter],
  data: () => ({
    keyword: '',
    getSurat: [],
  }),
  computed: {
    ...mapGetters({
      surat: 'surat'
    })
  },
  methods: {
    doSearch() {
      let keyword = this.firstUpper(this.keyword)
      if(keyword.length > 0){
        let checkSurat = this.surat.filter((data) => {
          return (data.nama.includes(keyword)) 
        })
        if(!checkSurat){
          this.getSurat = []
        } else {
          this.getSurat = checkSurat
        }
      } else {
        this.getSurat = []
      }
    },
    close() {
      this.keyword = ''
      this.getSurat = []
      this.$emit('closed', false)
    }
  }
}
</script>
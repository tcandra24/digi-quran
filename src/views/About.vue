<template>
  <v-layout wrap>
    <v-card
      outlined
      class="mx-auto"
    >
      <v-card-title>
        About Me
      </v-card-title>
      <v-card-subtitle>
        Tito Candra
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <v-row no-gutters>
          <v-col align="right">
            <v-img
              src="../assets/logo.png"
              max-height="100"
              max-width="100"
              contain
            >
            </v-img>
          </v-col>
          <v-col align="left">
            <v-img
              src="../assets/vuetify.png"
              max-height="100"
              max-width="100"
              contain
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="text-justify">
        Saya membuat aplikasi ini bertujuan untuk
        menjadi sarana bagi teman-teman dalam membaca kitab suci Al-Quran di manapun berada, 
        aplikasi ini menggunakan Teknologi Vue JS, Vuex, Vue Router, Vuetify Dan Aplikasi ini didukung oleh API 
        api.banghasan.com/ dan api.npoint.io/ untuk mendapatkan data surah Al-Quran yang di pilih. 
        Harapan saya kedepan aplikasi ini dapat menjadi aplikasi yang dapat membantu kita dalam membaca/menghafal Al-Quran. 
      </v-card-text>
      <v-card-text class="text-justify">
        Saat ini aplikasi ini hanya menyimpan data-data task progress membaca Al-Quran dalam localStorage, namun saya berusaha mengembangkan 
        aplikasi ini seiring berjalannya waktu agar dapat menyimpan data task secara permanen pada database.
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

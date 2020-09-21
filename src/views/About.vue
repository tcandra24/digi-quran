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
              max-height="140"
              max-width="140"
              contain
            >
            </v-img>
          </v-col>
          <v-col md="auto" class="text-center">
            <v-icon class="mt-10 mr-0">
              mdi-plus-thick
            </v-icon>
          </v-col>
          <v-col align="left">
            <v-img
              src="../assets/vuetify.png"
              max-height="140"
              max-width="140"
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
        aplikasi ini menggunakan Teknologi Vue JS, Vuex, Vue Router, Vuetify Dan Aplikasi ini didukung oleh API https://api.banghasan.com/. 
        Harapan saya kedepan aplikasi ini dapat menjadi aplikasi yang dapat membantu kita dalam membaca/menghafal Al-Quran. 
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {

}
</script>

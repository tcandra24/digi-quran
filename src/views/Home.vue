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
                  v-for="(item, i) in itemImages"
                  :key="i"
                  :aspect-ratio="16 / 9"
                >
                  <v-sheet height="100%" color="primary">
                    <v-img
                      :src="`${imageUrl}/${item.src}`"
                      :aspect-ratio="16 / 9"
                      height="100%"
                      @load="item.isImageLoaded = true"
                    >
                      <v-col
                        class="pa-5"
                        style="background:#6f6c6c ;opacity:0.5"
                        v-if="item.isImageLoaded === true"
                      >
                        <div class="subtitle-1 text-justify">
                          {{ item.quote }}
                          <br />
                          {{ item.from }}
                        </div>
                      </v-col>
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        v-else
                      >
                        <div class="subtitle-1 text-justify">
                          <div class="display-1">Loading...</div>
                        </div>
                      </v-row>
                    </v-img>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </template>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <div class="text-left indigo--text">
        Asmaul Husna <v-icon color="indigo">mdi-chevron-right</v-icon>
      </div>
      <v-divider></v-divider>
      <v-layout wrap class="pt-5">
        <v-flex md>
          <v-card>
            <template>
              <v-carousel
                cycle
                delimiter-icon="mdi-minus"
                hide-delimiter-background
                interval="4000"
                :show-arrows="false"
                height="150"
              >
                <v-carousel-item
                  v-for="(a, i) in asmaul_husna.slice(0, 7)"
                  :key="i"
                  :aspect-ratio="16 / 9"
                  @click="setDialogComponent('asmaul-husna')"
                >
                  <v-sheet height="100%" color="primary">
                    <v-row class="fill-height pt-5" justify="center">
                      <div class="subtitle-1 text-center">
                        {{ a.latin }} ({{ a.arab }})
                        <br />
                        {{ a.arti }}
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item
                  :aspect-ratio="16 / 9"
                  @click="setDialogComponent('asmaul-husna')"
                >
                  <v-sheet height="100%" color="primary">
                    <v-row class="fill-height pt-5" justify="center">
                      <div class="subtitle-1 text-center">
                        Selengkapnya
                        <v-icon>mdi-arrow-right-circle-outline</v-icon>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </template>
          </v-card>
        </v-flex>
        <v-fab-transition>
          <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="indigo"
            class="mb-10"
            @click="toTop"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>
    </v-container>
    <v-container class="ma-0 pa-2" grid-list-sm v-if="surat">
      <!-- Tes Scroll -->
      <!-- <button @click="scrollTes">Tes</button>
      <div class="tes-scroll">
        Tess2
      </div> -->
      <!-- Tes Scroll -->
      <div class="text-left indigo--text">
        Semua Surat ({{ totalSurah }})
        <v-icon color="indigo">mdi-chevron-right</v-icon>
      </div>
      <v-divider></v-divider>
      <v-layout wrap>
        <v-flex
          v-for="(surah, index) in surat.slice(0, surat.length - 1)"
          :key="`surah-` + index"
          md
          class="pt-5"
        >
          <v-card :to="'/surah/' + surah.nomor" outlined>
            <v-card-title class="fill-height align-end">
              {{ surah.nomor }} . {{ surah.nama }} ( {{ surah.asma }} )
            </v-card-title>
            <v-card-subtitle>
              {{ artiSurah(surah.arti) }} - {{ surah.ayat }} Ayat
            </v-card-subtitle>
            <v-card-actions>
              <v-chip>
                <v-icon>mdi-book</v-icon>
                <span>
                  {{ firstUpper(surah.type) }}
                </span>
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn icon @click.prevent="setKet(surah.nomor)">
                <v-icon>{{
                  surah.showKet ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="surah.showKet">
                <v-divider></v-divider>

                <v-card-text class="text-justify" v-html="`${surah.keterangan.substr(0, 300)}...`">
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import asmaulHusna from "@/data/asmaul-husna";
import { artiFilter } from "@/mixins/artiFilter";

export default {
  name: "Home",
  mixins: [artiFilter],
  data: () => ({
    asmaul_husna: asmaulHusna,
    itemImages: [
      {
        src: "view-1.jpg",
        quote: "Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak",
        from: "QS Al-Kautsar : 1",
        isImageLoaded: false,
      },
      {
        src: "view-2.jpg",
        quote: "Maka nikmat Tuhanmu yang manakah yang kamu dustakan?",
        from: "QS Ar-Rahman : 13",
        isImageLoaded: false,
      },
      {
        src: "view-3.jpg",
        quote:
          "Sesungguhnya pada pertukaran malam dan siang itu dan pada apa yang diciptakan Allah di langit dan di bumi, benar-benar terdapat tanda-tanda (kekuasaan-Nya) bagi orang-orang yang bertakwa.",
        from: "QS Yunus : 6",
        isImageLoaded: false,
      },
      {
        src: "view-4.jpg",
        quote:
          "Sungguh kami ciptakan manusia itu pada perwujudan yang lebih baik.",
        from: "QS At-Tin : 4",
        isImageLoaded: false,
      },
      {
        src: "view-5.jpg",
        quote:
          "Dan sesungguhnya telah Kami muliakan anak cucu Adam, Kami angkat mereka di daratan dan di lautan, Kami beri mereka rizki yang baik-baik dan Kami lebihkan mereka dengan kelebihan yang sempurna atas kebanyakan mahluk-mahluk yang telah Kami ciptakan.",
        from: "QS Al-Isra : 70",
        isImageLoaded: false,
      },
    ],
    isActive: false,
    fab: false,
  }),
  mounted() {
    this.$vuetify.goTo(0);
    if (this.surat.length > 0) {
      this.AllSurah = this.surat;
    } else {
      let addKey = { showKet: false };
      let newObj = [];
      
      this.axios
        .get("/surat")
        .then((response) => {
          if(response && response.status === 200){
            let { hasil } = response.data;

            hasil.forEach((data) => {
              newObj.push({ ...data, ...addKey });
            });

            this.setSurat(newObj);
          }
        })
        .catch((responses) => {
          let { error } = responses;
          console.log = error;
        });
    }

    if (this.$route.path === "/" && this.text !== "") {
      this.setAlert({
        status: true,
        color: this.color,
        text: this.text,
      });
    }

    this.setTitle({});
  },
  methods: {
    ...mapActions({
      setTitle: "set",
      setAlert: "alert/set",
      setSurat: "addSurat",
      setKet: "setKet",
      setDialogComponent: "dialog/setComponent",
    }),
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 40;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    // scrollTes() {
    //   const tes = document.querySelector('.tes-scroll');
    //   const position = tes.offsetTop;
    //   const position2 = tes.offsetHeight;
    //   console.log(`offset Top ${position}`)
    //   console.log(`offset Height ${position2}`)
    //   console.log(`innerheight ${window.innerHeight}`)
    //   console.log(`pageYoffset ${window.pageYOffset}`)
    // }
  },
  computed: {
    ...mapGetters({
      text: "alert/text",
      color: "alert/color",
      surat: "surat",
    }),
    totalSurah() {
      return this.surat.length;
    },
  },
};
</script>

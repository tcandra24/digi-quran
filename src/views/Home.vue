<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex md>
          <v-card>
            <carousel-bar />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container 
      v-for="(content, index) in carouselContent"
      :key="index" 
      fluid 
    >
      <carousel-content  
        :content="content"
        @setDialog="setDialogComponent" 
      />
    </v-container>
    <v-container class="ma-0 pa-2" grid-list-sm v-if="surat">
      <div class="text-left indigo--text">
        Semua Surat ({{ totalSurah }})
        <v-icon color="indigo">mdi-chevron-right</v-icon>
      </div>
      <v-divider></v-divider>
      <v-layout wrap>
        <v-flex
          v-for="(surah, index) in surat.slice(0, countSurah)"
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
      <v-col class="text-center">
        <v-btn
          text 
          color="indigo" 
          @click="more" 
          v-if="countSurah < this.maxSurah"
        >
          More..
        </v-btn>
      </v-col>
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
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex"
import asmaulHusna from "@/data/asmaul-husna"
import nabi from "@/data/nabi-nabi"
import malaikat from "@/data/malaikat"
import { artiFilter } from "@/mixins/artiFilter"

export default {
  name: "Home",
  mixins: [artiFilter],
  components: {
    CarouselBar: () => import('@/components/CarouselBar.vue'),
    CarouselContent :() => import('@/components/CarouselContent.vue')
  },
  metaInfo: {
    title: 'Home'
  },
  data: () => ({
    asmaul_husna: asmaulHusna,
    countSurah: 20,
    maxSurah: 114,
    isActive: false,
    fab: false,
    carouselContent: [
      {
        title: 'Asmaul Husna (99)',
        component: 'asmaul-husna',
        color: "primary",
        data: asmaulHusna
      },
      {
        title: 'Nama - Nama Nabi & Rasul (25)',
        component: 'nabi-nabi',
        color: "brown darken-2",
        data: nabi
      },
      {
        title: 'Nama - Nama Malaikat (10)',
        component: 'malaikat',
        color: 'secondary',
        data: malaikat
      }
    ],
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
        .catch(() => {
          this.setAlert({
            status: true,
            color: 'warning',
            text: `Terdapat Kesalahan Pada Aplikasi`,
          });
        });
    }

      if (this.count > 0){
        this.setAlert({
          status: true,
          color: 'success',
          text: `Task Yang Sudah Dikerjakan ${this.finishRead} / ${this.count}`,
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
    more() {
      if((this.countSurah + 20) > this.maxSurah) {
        this.countSurah = this.maxSurah
      } else {
        this.countSurah += 20
      }
    }
  },
  computed: {
    ...mapGetters({
      text: "alert/text",
      color: "alert/color",
      surat: "surat",
      count: 'reading/count',
      finishRead: 'reading/finishRead'
    }),
    totalSurah() {
      return this.surat.length;
    },
  },
};
</script>

<template>
  <div>
    <v-row
      align="center"
      justify="center"
      class="my-5 pa-2"
    >
      <v-btn-toggle
        shaped
        v-if="detailSurah.nama"
      >
        <v-btn v-if="!(choiceSurah.objectPrev === undefined)" @click="goToLink(choiceSurah.objectPrev.nomor)">
          <v-icon>mdi-arrow-left</v-icon>
          {{choiceSurah.objectPrev.nama}}
        </v-btn>
        <v-btn v-if="!(choiceSurah.objectNext === undefined)" @click="goToLink(choiceSurah.objectNext.nomor)">
          {{choiceSurah.objectNext.nama}}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <v-card 
      v-if="detailSurah.nama"
      outlined
    >
      <v-card-title>
        {{ detailSurah.nama }} ({{ detailSurah.asma }})
      </v-card-title>
      <v-card-subtitle class="mt-1">
        <v-chip>
          {{ artiSurah(detailSurah.arti) }}
        </v-chip>
      </v-card-subtitle>
      <v-card-text
        class="text-justify"
        v-html="detailSurah.keterangan"
      >
      </v-card-text>
    </v-card>

    <div>
      <v-col class="text-right">
        <v-btn-toggle
          rounded
          dense
          v-model="mode.index"
          v-if="detailSurah.nama"
        >
          <v-btn 
            @click="toogleSingleView"
          >
            <v-icon>mdi-application</v-icon>
          </v-btn>
          <v-btn 
            @click="toogleListView"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </div>
    <component :is="mode.component" @detail="GetDetailSurah" ref="childComponent"></component>
  </div>
</template>
<script>

import { artiFilter } from '@/mixins/artiFilter'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    btnToogle: 0,
    detailSurah: {}
  }),
  components:{
    SingleView: () => import('@/components/SinglePageView.vue'),
    ListView: () => import('@/components/ListPageView.vue'),
  },
  mixins:[artiFilter],
  methods: {
    ...mapActions({
      setMode: 'setMode'
    })
    ,
    toogleListView() {
      if (this.mode.name !== 'list') {
        this.setMode({
          name: 'list',
          component: 'list-view',
          index: 1
        })
      }
    },
    toogleSingleView() {
      if (this.mode.name !== 'single') {
        this.setMode({
          name: 'single',
          component: 'single-view',
          index: 0
        })
      }
    },
    GetDetailSurah(value) {
      this.detailSurah = value
    },
    goToLink(value){
      this.$router.push({path: "/surah/" + value})
      if (this.mode.component === 'list-view'){
        this.$refs.childComponent.listSurah = []
      }
      this.$refs.childComponent.go()
    }
  },
  computed: {
    ...mapGetters({
      readSurah: 'reading/readSurah',
      mode: 'mode',
      surah: 'surat'
    }),
    choiceSurah(){
      let { id } = this.$route.params
      let prev = parseInt(id) - 1
      let next = parseInt(id) + 1
      let objectPrev = {}
      let objectNext = {}
      
      objectPrev = this.surah.find((data) => {
        return parseInt(data.nomor) === prev && prev > 0
      })

      objectNext = this.surah.find((data) => {
        return parseInt(data.nomor) === next && next < this.surah.length
      })

      return {
        objectPrev,
        objectNext
      }
    }
  },
  // watch: {
  //   '$route.params.id' : function(id) {
  //     alert(id)
  //   }
  // },
  mounted() {
    this.$vuetify.goTo(0);
    // let min = 1
    // let max = 10
    // let count = 0
    // let param = 34
    // while (count < 30) {
    //   if ((param - min) * (param - max) <= 0){
    //     console.log(min)
    //     console.log(max)
    //     break
    //   }
    //   min += 10
    //   max += 10
    //   count ++
    // }
  }
}
</script>

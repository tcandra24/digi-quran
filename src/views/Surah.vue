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
    <component :is="mode.component" @detail="GetDetailSurah" ref="childComponent"></component>
    <v-card id="create">
      <v-speed-dial
        v-model="fab"
        bottom
        right
        direction="left"
        :open-on-hover="false"
        transition="slide-y-reverse-transition"
        class="mb-10"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="indigo"
            dark
            fab
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="indigo"
          @click="toogleSingleView"
        >
          <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
          @click="toogleListView"
        >
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </div>
</template>
<script>

import { artiFilter } from '@/mixins/artiFilter'
import { mapGetters, mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Surah '
  },
  data: () => ({
    btnToogle: 0,
    detailSurah: {},
    fab: false,
  }),
  components:{
    SingleView: () => import('@/components/SinglePageView.vue'),
    ListView: () => import('@/components/ListPageView.vue'),
  },
  mixins:[artiFilter],
  methods: {
    ...mapActions({
      setMode: 'setMode',
      setDialogStatus: 'dialog/setStatus',
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
      surah: 'surat',
      dialogStatus : 'dialog/status',
      currentComponent : 'dialog/component'
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
        return parseInt(data.nomor) === next && next <= this.surah.length
      })

      return {
        objectPrev,
        objectNext
      }
    }
  },
  mounted() {
    if (this.dialogStatus === true && this.currentComponent === 'search'){
      this.setDialogStatus(false)
    }

    this.$vuetify.goTo(0);
  }
}
</script>

<style scoped>
#create .v-speed-dial {
  position: fixed;
}

#create .v-btn--floating {
  position: relative;
}
</style>

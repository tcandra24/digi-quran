<template>
  <v-card>
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

      <v-container fluid>
        <div v-if="count===0">
          <v-alert
            outlined
            color="warning"
            icon="mdi-cart-off"
          >
            Task Kosong!
          </v-alert>
        </div>
        <v-list three-line v-if="count > 0">
          <template v-for="(task, index) in allTask">
            <v-list-item :key="'task'+index">
              <v-list-item-content>
                <v-list-item-title v-html="task.nama"></v-list-item-title>
                <v-list-item-subtitle>
                  Ayat Ke {{ task.ayat }}
                  <span style="float:right;">
                    <v-btn icon small rounded depressed @click="linkTo(task.nomor)">
                      <v-icon dark color="success">mdi-link</v-icon>
                    </v-btn>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>  
        </v-list>
      </v-container>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'tasks',
  props: {
    closeDialog: Function
  },
  computed: {
    ...mapGetters({
      allTask: 'reading/readSurah',
      count: 'reading/count'
    })
  },
  methods: {
    close() {
      this.closeDialog(false)
    },
    linkTo(nomorAyat) {
      this.close()
      this.$router.push({path: "/surah/" + nomorAyat})
    }
  }
}
</script>

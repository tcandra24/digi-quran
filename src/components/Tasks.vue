<template>
    <v-card>
      <v-toolbar dark color="indigo">
        <v-btn icon dark @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Semua Tasks</v-toolbar-title>
      </v-toolbar>

        <v-container fluid>
          <div v-if="count===0">
            <v-alert
              outlined
              color="error"
              icon="mdi-trash-can"
            >
              Task Kosong!
            </v-alert>
          </div>
          <v-list three-line v-if="count > 0">
            <v-col class="text-right">
              <v-btn 
                rounded
                color="error"
                @click="showConfirm(null)"
              >
                Hapus Semua
              </v-btn>
            </v-col>
            <template v-for="(task, index) in allTask">
              <v-list-item :key="'task'+index">
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    {{ task.nama }} 
                    <v-icon v-if="parseInt(task.ayat) === parseInt(task.jmlAyat)" dark color="success">mdi-check-outline</v-icon>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <div>
                      Ayat Ke {{ task.ayat }} / {{ task.jmlAyat }}
                    </div>
                    <br>
                    <div>
                      <v-progress-linear
                        striped 
                        rounded 
                        height="6"
                        :value="(parseInt(task.ayat) / parseInt(task.jmlAyat)) * 100"
                      ></v-progress-linear>
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <div v-if="task.ayat < task.jmlAyat">
                  <v-list-item-action class="mr-5">
                    <v-btn icon small rounded depressed @click="showConfirm(task)">
                      <v-icon dark color="error">mdi-close-circle</v-icon>
                    </v-btn>
                  </v-list-item-action>
                  <v-list-item-action>
                      <v-btn icon small rounded depressed @click="linkTo(task.nomor)">
                        <v-icon dark color="success">mdi-arrow-right-top</v-icon>
                      </v-btn>
                  </v-list-item-action>
                </div>
                <div v-else>
                  <v-list-item-action class="mr-5">
                    <v-btn icon small rounded depressed @click="showConfirm(task)">
                      <v-icon dark color="error">mdi-close-circle</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </div>
              </v-list-item>
            </template>  
          </v-list>
        </v-container>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'tasks',
  data: () => ({}),
  computed: {
    ...mapGetters({
      allTask: 'reading/readSurah',
      count: 'reading/count'
    })
  },
  methods: {
    close() {
      this.$emit('closed', false)
    },
    linkTo(nomorAyat) {
      this.close()
      this.$router.push({path: "/surah/" + nomorAyat})
    },
    ...mapActions({
      removeTask: 'reading/removing',
      removeAllTask: 'reading/removingAll',
    }),
    showConfirm(task) {
      if (task){
        this.$confirm(`Hapus Task Surah ${task.nama} ?`).then(res => {
          if(res) {
            this.removeTask(task)
          }
        })
      } else {
        this.$confirm(`Hapus Semua Task ?`).then(res => {
          if(res) {
            this.removeAllTask()
          }
        })
      }
      
    }
  }
}
</script>

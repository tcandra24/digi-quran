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
            <template v-for="(task, index) in allTask">
              <v-list-item :key="'task'+index">
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    {{ task.nama }} 
                    <v-icon v-if="parseInt(task.ayat) === parseInt(task.jmlAyat)" dark color="success">mdi-check-outline</v-icon>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Ayat Ke {{ task.ayat }} / {{ task.jmlAyat }}
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
                        <v-icon dark color="success">mdi-link</v-icon>
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
        <template>
          <v-layout row justify-center>
            <v-dialog v-model="dialogConfirm" persistent max-width="350">
              <v-card>
                <v-card-title>Surat {{taskDeleteConfirm.nama}} </v-card-title>
                <v-card-text> Yakin Menghapus Task ? </v-card-text>
                <v-card-actions>
                  <v-btn color="warning" @click="yes">Yes</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="success" @click="no">No</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </template>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'tasks',
  data: () => ({
    dialogConfirm: false,
    taskDeleteConfirm: [] 
  }),
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
    }),
    yes(){
      this.removeTask(this.taskDeleteConfirm)
      this.dialogConfirm = false
    },
    no(){
      this.dialogConfirm = false
    },
    showConfirm(task) {
      this.dialogConfirm = true
      this.taskDeleteConfirm = task
    }
  }
}
</script>

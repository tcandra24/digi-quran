<template>
  <div>
    <v-snackbar v-model="alert" :color="color" multi-line bottom>
      {{ text }}
      <v-btn dark text @click="close">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'alert',
  computed: {
    ...mapGetters({
      status: 'alert/status',
      color: 'alert/color',
      text: 'alert/text'
    }),
    alert: {
      get() {
        return this.status
      },
      set(value) {
        this.setAlert({
          status: value,
          color: 'success',
          text: ''
        })
      }
    }
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set'
    }),
    close() {
      this.setAlert({
        status: false,
        text: ''
      })
    }
  }
}
</script>
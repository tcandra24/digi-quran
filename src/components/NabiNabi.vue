<template>
  <v-card>
    <div class="dialogTop">
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Nama - Nama Nabi & Rasul</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-list two-line>
        <template v-for="(n, index) in nabi">
          <v-list-item :key="index">
            <v-list-item-avatar class="white--text title" :color="bgColor[Math.floor(Math.random() * bgColor.length)]">
              {{ n.urutan }}
            </v-list-item-avatar>
            <v-list-item-content class="mx-auto">
              <v-list-item-title class="headline" width="100">
                {{ n.latin }} ({{ n.arab }})
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-container>
    </div>
  </v-card>
</template>
<script>
import nabi from "@/data/nabi-nabi"
import { mapGetters } from 'vuex'
export default {
  name: "nabi-nabi",
  data: () => ({
    nabi: nabi,
  }),
  methods: {
    close() {
      this.$emit("closed", false);
    }
  },
  computed: {
    ...mapGetters({
      bgColor: 'bgColor'
    }),
  }
}
</script>

<style scoped>
.v-list-item__subtitle {
  white-space: normal !important; 
}
</style>

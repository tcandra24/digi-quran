<template>
  <v-card>
    <div class="dialogTop">
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Nama - Nama Malaikat</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-list two-line>
        <template v-for="(m, index) in malaikat">
          <v-list-item :key="index">
            <v-list-item-avatar color="#f4f4f4">
              {{ m.urutan }}
            </v-list-item-avatar>
            <v-list-item-content class="mx-auto">
              <v-list-item-title class="headline">
                {{ m.latin }} ({{ m.arab }})
              </v-list-item-title>
              <v-list-item-subtitle width="100">
                {{ m.arti }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-container>
    </div>
  </v-card>
</template>
<script>
import malaikat from "@/data/malaikat";
export default {
  name: "malaikat",
  data: () => ({
    malaikat: malaikat,
  }),
  methods: {
    close() {
      this.$emit("closed", false);
    }
  },
}
</script>

<style scoped>
.v-list-item__subtitle {
  white-space: normal !important; 
}
</style>

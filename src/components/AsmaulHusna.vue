<template>
  <v-card>
    <div class="dialogTop">
    <v-toolbar dark color="indigo">
      <v-btn icon dark @click.stop="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Asmaul Husna</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-list two-line>
        <template v-for="(a, index) in asmaul_husna">
          <v-list-item :key="index">
            <v-list-item-avatar color="#f4f4f4">
              {{ a.urutan }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ a.latin }} ({{ a.arab }})
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ a.arti }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!-- <div class="text-center py-5">
        <v-pagination 
          v-model="page" 
          :length="Math.ceil(asmaul_husna.length / perPage)"
          circle
          ></v-pagination>
      </div> -->
    </v-container>
    </div>
  </v-card>
</template>
<script>
import asmaulHusna from "@/data/asmaul-husna";
export default {
  name: "asmaul-husna",
  data: () => ({
    asmaul_husna: asmaulHusna,
    perPage: 20,
    page: 1,
  }),
  methods: {
    close() {
      this.$emit("closed", false);
    }
  },
  // computed: {
  //   pagingData(){
  //     return this.asmaul_husna.slice((this.page - 1) * this.perPage, this.page * this.perPage)
  //   }
  // }
}
</script>

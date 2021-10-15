<template>
  <div>
    <div class="text-left indigo--text">
     {{ content.title }} <v-icon color="indigo">mdi-chevron-right</v-icon>
    </div>
    <v-divider></v-divider>
    <v-layout wrap class="pt-5">
      <v-flex md>
        <v-card>
          <template>
            <v-carousel
              cycle
              delimiter-icon="mdi-minus"
              hide-delimiter-background
              interval="4000"
              :show-arrows="false"
              height="150"
            >
              <v-carousel-item
                v-for="(a, i) in content.data.slice(0, 7)"
                :key="i"
                @click="setDialog(content.component)"
              >
                <v-sheet height="100%" :color="content.color">
                  <v-row class="fill-height pt-5" justify="center">
                    <v-col col="6">
                      <div class="title text-center mx-auto" style="max-width: 700px;">
                        {{ a.latin }} ({{ a.arab }})
                        <v-divider></v-divider>
                        <p 
                          class="d-inline-block text-truncate" 
                          style="max-width: 500px;"
                        >
                          {{ a.arti }}
                        </p> 
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
              <v-carousel-item
                @click="setDialog(content.component)"
              >
                <v-sheet height="100%" :color="content.color">
                  <v-row class="fill-height pt-5" justify="center">
                    <v-col col="6">
                      <div class="title text-center">
                        Selengkapnya
                        <v-icon>mdi-arrow-right-circle-outline</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'carousel-content',
  props: {
    content: Object
  },
  methods:{
    setDialog(component) {
      this.$emit("setDialog", component);
    }
  }
}
</script>

<template>
  <v-carousel
    cycle
    delimiter-icon="mdi-minus"
    hide-delimiter-background
    interval="5000"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item, i) in itemImages"
      :key="i"
      :aspect-ratio="16 / 9"
    >
      <v-sheet height="100%" color="primary">
        <v-img
          :src="`${imageUrl}/${item.src}`"
          :aspect-ratio="16 / 9"
          height="100%"
          @load="item.isImageLoaded = true"
        >
          <v-col
            class="pa-5"
            style="background:#6f6c6c ;opacity:0.5;"
            v-if="item.isImageLoaded === true"
          >
            <div class="subtitle-1 text-justify">
              {{ item.quote }}
              <br />
              {{ item.from }}
            </div>
          </v-col>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-else
          >
            <div class="subtitle-1 text-justify">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </div>
          </v-row>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel-bar',
  data: () => ({
    itemImages: [
      {
        src: "view-1.jpg",
        quote: "Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak",
        from: "QS Al-Kautsar : 1",
        isImageLoaded: false,
      },
      {
        src: "view-2.jpg",
        quote: "Maka nikmat Tuhanmu yang manakah yang kamu dustakan?",
        from: "QS Ar-Rahman : 13",
        isImageLoaded: false,
      },
      {
        src: "view-3.jpg",
        quote:
          "Sesungguhnya pada pertukaran malam dan siang itu dan pada apa yang diciptakan Allah di langit dan di bumi, benar-benar terdapat tanda-tanda (kekuasaan-Nya) bagi orang-orang yang bertakwa.",
        from: "QS Yunus : 6",
        isImageLoaded: false,
      },
      {
        src: "view-4.jpg",
        quote:
          "Sungguh kami ciptakan manusia itu pada perwujudan yang lebih baik.",
        from: "QS At-Tin : 4",
        isImageLoaded: false,
      },
      {
        src: "view-5.jpg",
        quote:
          "Dan sesungguhnya telah Kami muliakan anak cucu Adam, Kami angkat mereka di daratan dan di lautan, Kami beri mereka rizki yang baik-baik dan Kami lebihkan mereka dengan kelebihan yang sempurna atas kebanyakan mahluk-mahluk yang telah Kami ciptakan.",
        from: "QS Al-Isra : 70",
        isImageLoaded: false,
      },
    ],
  })
}
</script>

<template>
  <v-app id="inspire">
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <!-- <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="subheading">Jonathan Lee</div>
              <div class="body-1">heyfromjonathan@gmail.com</div>
            </v-col>
          </v-row> -->
        </v-img>
        <v-list>
          <v-list-item 
            link
            v-for="(item, index) in menus"
            :key="index"  
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-app-bar
      app
      color="indigo"
      dark
      v-if="isHome"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        @click="setDialogComponent('search')"
        icon
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="setDialogComponent('tasks')">
        <div v-if="count>0">
          <v-badge color="orange" overlap>
            <template v-slot:badge>
              <span> {{count}} </span>
            </template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </div>
        <div v-else>
          <v-icon>mdi-bell</v-icon>
        </div>
        
      </v-btn>

      <!-- <v-text-field 
        align-with-title
        slot="extension"
        hide-details
        append-icon="mdi-arrow-right"
        flat
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        class="mb-3"
        @click="setDialogComponent('search')"
      ></v-text-field> -->
    </v-app-bar>

    <v-app-bar
      app
      color="indigo"
      dark
      v-else
    >
      <v-btn icon @click.stop="$router.push({ path: '/' })">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-toolbar-title>{{ titleSurah }}</v-toolbar-title>
    </v-app-bar>

    <alert />

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
       <v-slide-y-transition>
         <router-view></router-view>
       </v-slide-y-transition>
      </v-container>

      <keep-alive>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <component :is="currentComponent" @closed="setDialogStatus"></component>
        </v-dialog>
      </keep-alive>
    </v-main>
    <v-footer
      padless
    >
      <v-card
        class="flex grey lighten-2"
        flat
        tile
      >
        <v-card-title>
          <h4 class="subheading grey--text">{{appName}}</h4>
          <v-btn 
            class="mx-1 grey--text" text
            v-for="(social, index) in socialMedia"
            :key="index" 
          >
            <v-icon size="24px">{{social.icon}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="text-center">
          <span class="grey--text">&copy; {{ new Date().getFullYear() }} - Digital Quran {{ versionApp }} </span>
        </v-card-text>

      </v-card>
      
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: {
      source: String,
    },
    components: {
      Tasks: () => import('@/components/Tasks.vue'),
      Alert: () => import('@/components/Alert.vue'),
      Search: () => import('@/components/Search.vue'),
      AsmaulHusna: () => import('@/components/AsmaulHusna.vue')
    },
    data: () => ({
      drawer: false,
      menus: [
        { title: 'Home', icon: 'mdi-home-outline', route: '/' },
        { title: 'About', icon: 'mdi-information-outline', route: '/about' }
      ],
      socialMedia: [
        { icon: 'mdi-facebook' },
        { icon: 'mdi-instagram' }
      ]
    }),
    computed: {
      isHome() {
        return (this.$route.path === '/')
      },
      ...mapGetters({
        titleSurah: 'title',
        count: 'reading/count',
        dialogStatus : 'dialog/status',
        currentComponent : 'dialog/component'
      }),
      dialog: {
        get () {
          return this.dialogStatus
        },
        set (value) {
          this.setDialogStatus(value)
        }
      }
    },
    methods: {
      ...mapActions({
        setDialogStatus: 'dialog/setStatus',
        setDialogComponent : 'dialog/setComponent',
      })
    }
  }
</script>

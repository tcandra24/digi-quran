<template>
  <v-app id="inspire">
    <v-card>
      <v-navigation-drawer
        v-model="appDrawer"
        app
      >
        <v-img :aspect-ratio="16/8" src="https://cdn.wallpapersafari.com/24/78/ByQ3Zh.jpg"></v-img>
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
      <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer"></v-app-bar-nav-icon>
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
          <v-badge color="red" overlap>
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
            :href="social.link"
            target="_blank"
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
    components: {
      Tasks: () => import('@/components/Tasks.vue'),
      Alert: () => import('@/components/Alert.vue'),
      Search: () => import('@/components/Search.vue'),
      AsmaulHusna: () => import('@/components/AsmaulHusna.vue'),
      NabiNabi: () => import('@/components/NabiNabi.vue'),
      Malaikat: () => import('@/components/Malaikat.vue')
    },
    metaInfo: {
      titleTemplate: '%s | Digital Qur\'an',
      meta: [
        {
          name: 'dicoding:email',
          content: 'tcandra007@gmail.com'
        }
      ]
    },
    data: () => ({
      menus: [
        { 
          title: 'Home', 
          icon: 'mdi-home-outline', 
          route: '/' 
        },
        { 
          title: 'About', 
          icon: 'mdi-information-outline', 
          route: '/about' 
        }
      ],
      socialMedia: [
        { 
          icon: 'mdi-facebook', 
          link: 'https://www.facebook.com/tito.candra.71' 
        },
        { 
          icon: 'mdi-instagram', 
          link: 'https://www.instagram.com/titocandp/' 
        }
      ],
    }),
    computed: {
      isHome() {
        return (this.$route.path === '/')
      },
      ...mapGetters({
        titleSurah: 'title',
        drawer: 'drawer',
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
      },
      appDrawer: {
        get () {
          return this.drawer
        },
        set (value) {
          this.setDrawer(value)
        }
      }
    },
    methods: {
      ...mapActions({
        setDrawer: 'setDrawer',
        setDialogStatus: 'dialog/setStatus',
        setDialogComponent : 'dialog/setComponent',
      })
    }
  }
</script>

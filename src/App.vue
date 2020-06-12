<template>
  <v-app id="inspire">
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list shaped>
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

      <v-btn icon @click="dialog = true">
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
    </v-app-bar>

    <v-app-bar
      app
      color="indigo"
      dark
      v-else
    >
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-toolbar-title>{{ titleSurah }}</v-toolbar-title>
    </v-app-bar>

    <alert />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <v-slide-y-transition>
         <router-view></router-view>
       </v-slide-y-transition>
      </v-container>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <tasks :closeDialog="closeDialog" />
      </v-dialog>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }} - Digital Quran </span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: {
      source: String,
    },
    components: {
      Tasks: () => import('@/components/Tasks.vue'),
      Alert: () => import('@/components/Alert.vue'),
    },
    data: () => ({
      drawer: false,
      dialog: false,
      menus: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'About', icon: 'mdi-help-box', route: '/about' }
      ]
    }),
    computed: {
      isHome() {
        return (this.$route.path === '/')
      },
      ...mapGetters({
        titleSurah: 'title',
        count: 'reading/count',
      })
    },
    methods: {
      closeDialog (value) {
        this.dialog = value
      }
    }
  }
</script>

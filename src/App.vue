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
      <v-text-field 
        slot="extension"
        hide-details
        append-icon="mdi-arrow-right"
        flat
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        class="mb-3"
        @click="setDialogComponent('search')"
      ></v-text-field>
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

      <keep-alive>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <component :is="currentComponent" @closed="setDialogStatus"></component>
        </v-dialog>
      </keep-alive>
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

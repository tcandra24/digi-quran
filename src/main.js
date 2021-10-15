import Vue from 'vue'
import './plugins/axios'
import './plugins/helper'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import VueMeta from 'vue-meta'

Vue.use(VuetifyConfirm, { vuetify })
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

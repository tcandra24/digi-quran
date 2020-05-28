"use strict";
import Vue from 'vue';

const Helper = {
  install (Vue) {
    Vue.prototype.appName = process.env.VUE_APP_NAME
  }
}

Vue.use(Helper)

"use strict";
import Vue from 'vue';

const Helper = {
  install (Vue) {
    Vue.prototype.appName = process.env.VUE_APP_NAME
    Vue.prototype.firstUpper = function(str) {
      return str.toLowerCase().replace(/\b[a-z]/g, function(letter){
        return letter.toUpperCase();
      })
    }
  }
}

Vue.use(Helper)

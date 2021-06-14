import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'


new Vue({
  el: '#app',
  render: (h => {
    h('<App>')
  })
})

new Vuex({})

new VueRouter()

const i = axios.create()

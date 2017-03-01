// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'
//import router from './router'

import Hello from './components/Hello'
import teamEditLanding from './components/teamEditLanding'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Hello},
    {path: '/teamEditLanding', component: teamEditLanding}
  ]
});

import { store } from './store.js';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Hello</router-link><li>
        <li><router-link to="/teamEditLanding">teamEditLanding</router-link><li>
      </ul>
      <router-view></router-view>
    </div>`,
}).$mount('#app')

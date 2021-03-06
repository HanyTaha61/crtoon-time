import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Links from './routes'
import {store} from './store/store'

const Route = new VueRouter({
  mode: 'history',
  routes: Links
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router: Route
})

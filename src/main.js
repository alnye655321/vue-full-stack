import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js'

import Messages from "./components/Messages";
import Users from "./components/Users";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: "/", component:Messages},
  {path: "/users", component:Users},
]

const router = new VueRouter({routes});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

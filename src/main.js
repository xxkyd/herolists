import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";
import axios from 'axios'
Vue.prototype.axios = axios
// 设置baseurl
axios.defaults.baseURL = 'http://localhost:3000/'
import router from './router'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

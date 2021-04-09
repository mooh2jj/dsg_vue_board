import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
// import axios from 'axios'; //axios 호출
import router from './routes'; //설정 라우터 호출

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
// Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

new Vue({
  render: h => h(App)
  ,router
}).$mount('#app')

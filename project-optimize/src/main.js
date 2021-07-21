import Vue from 'vue'
import App from './App.vue'
import './plugins/index'
import store from './store/index.js'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')

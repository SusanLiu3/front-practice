import Vue from 'vue'
import App from './App.vue'
import datePicker from './components/datePicker/index.js'
Vue.config.productionTip = false
Vue.use(datePicker)
new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import * as THING from '../src/utils/thing.module'

Vue.use(ElementUI);

Vue.config.productionTip = false

window.THING = THING

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

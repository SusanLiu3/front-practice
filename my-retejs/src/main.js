/** disable-eslint */
import Vue from 'vue'
import App from './App.vue'

import Rete from "rete";
import ConnectionPlugin from 'rete-connection-plugin';
import VueRenderPlugin from 'rete-vue-render-plugin';

Vue.prototype.Rete = Rete;
Vue.prototype.ConnectionPlugin = ConnectionPlugin
Vue.prototype.VueRenderPlugin = VueRenderPlugin

Vue.config.productionTip = false
console.log($1)
console.log(jq)
console.log(THING.CODELESS)
new Vue({
  render: h => h(App),
}).$mount('#app')

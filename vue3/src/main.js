import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

/**
 * createApp 创建应用实例，返回一个实例可以用来注册全局组件
 * 参数：根组件配置
 * 然后将其挂载到某个dom上
 */
let app = createApp(App);
// 根组件实例
let vm = app.mount('#app');
console.log(vm.msg);

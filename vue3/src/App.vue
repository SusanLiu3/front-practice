<template>
  <div id="teleport"></div>
  <combinedApi />
  <setup name="setup" :title="curTitle" />
  <!-- 指令参数 [title] 动态绑定求值 -->
  <div :[title]="val" ref="content">
    {{ msg }}
  </div>
  <button @click="copyToBoard(msg)">复制</button>
  <!-- 多事件处理 -->
  <button @click="modifyMsg(), sayHi()">点击</button>
  <reactive />
  <computed />
  <provide />
  <temp />
  <tele />
  <template v-for="i in list" :key="i">
    <div>{{ i }}</div>
  </template>
  <div id="red" v-bind="{ id: 'yellow' }">v-bind 合并顺序</div>
  <testJsx title="test jsx" />
  <render />
</template>

<script>
import combinedApi from './components/combined/combinedApi.vue';
import setup from './components/combined/setup.vue';
import provide from './components/combined/provide.vue';
import temp from './components/combined/template.vue';
import reactive from './components/reactive/index.vue';
import computed from './components/reactive/computed.vue';
import tele from './components/teleport/index.vue';
import render from './components/render/index.vue';
import { nextTick } from 'vue';
import { testJsx } from './components/jsx/index.js';

export default {
  name: 'App',
  components: {
    combinedApi,
    setup,
    reactive,
    computed,
    provide,
    temp,
    tele,
    testJsx,
    render,
  },
  data() {
    return {
      msg: 'vue3 practice',
      title: 'name',
      val: 'lss',
      curTitle: 'setup练习',
      list: ['apple', 'banana'],
    };
  },

  methods: {
    modifyMsg() {
      this.msg = 'change msg';
      nextTick(() => {
        if (this.$refs.content.innerHTML === 'change msg') {
          console.log('dom 修改完成');
        }
      });
    },
    sayHi() {
      console.log('hi');
    },
    // 这个方法在支持 document.execCommand('copy')的方法才适用
    copyToBoard(msg) {
      // 创建text area
      let dom = document.createElement('textarea');
      // 将需要复制的值赋给text area
      dom.value = msg;
      // 添加css 防 删除添加时闪烁
      dom.setAttribute('readonly','');
      dom.style.position = 'absolute';
      dom.style.left = '-9999px';
      document.body.appendChild(dom);
      // 选中text area的值
      dom.select();
      // 复制
      document.execCommand('copy');
      // 删除
      document.body.removeChild(dom);
    },
  },
};
</script>

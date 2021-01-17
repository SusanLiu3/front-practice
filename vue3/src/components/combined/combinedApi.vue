<template>
  <!-- 组合式api--- 同一个逻辑关注点的代码组合到一起 setup 选项 -->
  <div class="btn-group" id="btnGroup">
    <button @click="modifyVal">修改value</button>
    <span>val:{{ testVal }} obj:{{ testObj.name }} double:{{ doubleVal }}</span>
  </div>

  <div v-for="i in list" :key="i">
    {{ i }}
  </div>
</template>
<script>
import fetchList from './combinedApi/list.js';
import others from './combinedApi/other.js';
import { onMounted, ref, watch, computed } from 'vue';
export default {
  name: 'combinedApi',
  setup(props) {
    let { list, getList } = fetchList();
    let { testVal, testObj, doubleVal } = others();

    // 通过setup 返回的 所有都可以被组件的其他部分(计算属性、方法、生命周期钩子等等）使用
    return {
      list,
      fetchList,
      testVal,
      testObj,
      doubleVal,
    };
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
    modifyVal() {
      // 修改上面通过ref构成 的响应式变量
      this.testVal++;
      this.testObj.name = 'ldd';
      this.list.push('tomato');
    },
  },
};
</script>

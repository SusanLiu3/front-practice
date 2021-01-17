<template>
  <!-- setup 练习 -->
  <div></div>
</template>
<script>
import { watch, reactive, h } from 'vue';
export default {
  name: 'setup',
  props: ['title'],
  // 接受两个参数 props 和 context
  /**
   * props 是响应式的
   * context 不是响应式的，暴露了组件的attrs,slots ,emit属性
   * setup 是在组件实例尚未创建时执行，所以无法访问data methods computed
   */
  setup(props, context) {
    let title = props.title;
    console.log(context.attrs.name);
    let obj = reactive({
      book: '飘',
      author: '未知',
    });
    return () => h('div', [obj.book, obj.author]); // 返回一个渲染函数
  },
};
</script>

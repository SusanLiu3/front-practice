<template>
  <!-- 通过ref=root ref=test，将其绑定到div作为其ref -->
  <div ref="root">我是root</div>
  <div ref="test">i am test</div>
</template>
<script>
import { onMounted, ref, h } from 'vue';
export default {
  name: 'template',
  setup() {
    /**
     * 如果vNode 中ref的值和 渲染上下文中的ref相对应，那么就会将 vNode 的相应元素或者组件实例分配给ref的值
     */
    let root = ref(null);
    // let test = ref(null);
    // onMounted(() => {
    //   // <div>我是root</div>  <div>i am test</div>
    //   console.log(root.value, test.value);
    // });
    // // 渲染上下文暴露root,test
    // return {
    //   root,
    //   test,
    // };

    // jsx 使用

    return () => h('div', { ref: root }, 'root2号');
    // return () => (<div ref={root}>root3号</div>);
  },
  mounted() {
    // <div>我是root</div>  <div>i am test</div>
    // console.log(this.root,this.test);
  },
};
</script>

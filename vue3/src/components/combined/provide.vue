<template>
  <inject />
</template>
<script>
import inject from './inject.vue';
import { provide, watch, ref, reactive,readonly  } from 'vue';
export default {
  name: 'provide',
  components: {
    inject,
  },
  /**
   * provide 需要传入两个参数 key value
   */
  setup() {
    // 简单使用
    provide('name', 'lss');
    provide('person', { name: 'lss' });

    // 增加提供值和注入值之间的响应性,使用ref 或者reactive
    let type = ref('book');
    let fruit = reactive({
      name: 'apple',
    });
    provide('type', type);
    provide('fruit', fruit);
    setTimeout(() => {
      type.value = 'cup';
      fruit.name = 'banana';
    }, 1000);

    // 如果想要提供的数据在注入组件不被修改，可以使用readonly

    let title = ref('provide');
    provide('title', readonly(title));

    watch([type, fruit], ([newType, newFruit]) => {
      console.log('响应式修改', newType, newFruit);
    });
  },
};
</script>

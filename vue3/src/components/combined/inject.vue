<template>
  {{ type }} {{ fruit.name }} {{title}}
  <button @click="modify">间接修改</button>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'inject',
  /**
   * inject 接受两个参数，一个注入的属性(key)，另外一个默认值
   */
  setup() {
    let name = inject('name');
    let age = inject('age', 18);
    let person = inject('person');
    let type = inject('type');
    let fruit = inject('fruit');
    let title = inject('title');
    return {
      name,
      age,
      person,
      type,
      fruit,
      title
    };
  },
  methods: {
    modify() {
      this.type = 'phone';
      this.fruit.name = 'peel';
      this.title='inject' // 由于title设置了只读，其值不会变化
    },
  },
};
</script>

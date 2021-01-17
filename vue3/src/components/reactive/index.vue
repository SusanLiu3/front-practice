<template>
  <!-- vue3 响应式 
       响应式：以声明式的方式去适应变化的编程规范
       相较于vue2，vue3使用proxy 代理实现数据的响应式-->
  <div>{{ obj.type + ':' + obj.name + ',价格:' + obj.price }} {{ str }}</div>
  <div @click="modify">编辑</div>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  name: 'reactive',
  /**
   * reactive 可以将对象转换成响应式对象，返回proxy代理的对象
   * ref 可以也将值类型，独立的原始值 ，对象转换成响应式对象，返回它包装在具有value 属性的对象中
   * 当 ref 被使用在上下文的时候，会自动展开 不需要加.value
   * toRefs 可以将响应式对象转换成原始对象，结果对象中的每个property都指向原始对象相应property的ref
   */
  setup() {
    let obj = reactive({
      type: '水果',
      name: '榴莲',
      price: 110,
      hobby:['read','sleep']
    });
    let str = ref('string');
    let obj2 = ref({ name: '蔬菜' });
    console.log(obj.name, str.value, obj2.value.name); // 注意下区别
    // 对响应式对象进行解构，使用解构的属性其响应式会消失，例子中的name 和type 响应式会消失 有待确定
    // let { hobby } = obj;
    // hobby.push('sing')
    // console.log(obj.hobby);
    return {
      obj,
      str,
      obj2,
    };
  },
  created() {
    // proxy  在目标对象之前架设了一层拦截
    let obj = {
      name: 'lss',
      age: 18,
    };
    let proxy = new Proxy(obj, {
      get(target, prop) {
        return `${target[prop]}test`;
      },
      set(target, prop, val) {
        target[prop] = val + 'proxy';
        return true;
      },
    });
    // console.log(proxy.name);
    proxy.name = 'ldd';
    // console.log(proxy.name);
  },
  methods: {
    modify() {
      this.obj.name = '香蕉';
      this.obj.price = 11;
      this.str = 'test';
      this.obj2.name = '肉';
      // console.log(this.obj2.name);
    },
  },
};
</script>

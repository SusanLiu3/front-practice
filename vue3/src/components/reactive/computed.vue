<template>
</template>
<script>
import { ref, computed, watchEffect, watch } from 'vue';
// 计算属性
/**
 * 侦听器 watchEffect 立即执行传入的函数，响应式追踪其依赖，在依赖变更时 重新执行函数,
 * 当watchEffect 在setup中调用，侦听器会伴随组件的整个生命周期，直到组件销毁，当然也可以显示
 * 的销毁;当传入{flush:'post'} 可以让侦听器在组件更新后执行;
 * watch : 等同于 watchEffect ,监听特定的数据源，并在回调函数执行副作用
 * 相较于 watchEffect,watch允许：
 * ① 懒执行副作用
 * ② 说明什么时候应该触发侦听器运行
 * ③ 暴露侦听属性变化前后的值
 */
export default {
  name: 'computed',
  setup() {
    let count = ref(0);
    let stop = watchEffect(
      () => {
        // 副作用
        console.log('count变化', count.value); // 2
      },
      {
        onTrack() {
          console.log('front'); // 在响应式属性被追踪前调用 1
        },
        onTrigger() {
          console.log('change'); // 依赖项变更 导致副作用被触发时调用 // 3
        },
      }
      // {
      //   flush: 'post', // 这样只会在组件更新后打印，'count变化1',有点类似 watch 中immediate
      // }
    );
    let countValue = computed({
      get: () => count.value,
      set: (val) => (count.value = val),
    });
    // setInterval(() => {
    //   countValue.value++;
    // }, 1000);
    console.log('computed', countValue.value);
    countValue.value++;
    console.log('computed', countValue.value);
    console.log('computed', count.value);
    // stop();

    let testWatch = ref(1);
    let double = 0;
    watch(testWatch, (newVal, oldVal) => {
      double = newVal * 2;
      console.log(double,newVal,oldVal);
    });
    // 监听多个数据源
    // watch([data1,data2],([newData1,newData2],[oldData1,oldData2])=>{

    // })
    // setInterval(() => {
    //   testWatch.value++;
    // }, 1000);
    return {
      double,
    };
  },
};
</script>

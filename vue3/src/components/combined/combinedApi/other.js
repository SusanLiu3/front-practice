import {ref, watch, computed } from 'vue';
export default function other(params) {
  /**
   * 看看vue3 新增的ref ，可以使任何响应式变量在任何地方起
   * 接受一个参数，返回它包装在具有value 属性的对象中 ，然后使用value访问就具有响应式
   */
  let testVal = ref(0);
  let testObj = ref({ name: 'lss' });
  // watch 响应式更改
  watch(testVal, (newVal, oldVal) => {
    console.log(`testval变化,变化前:${oldVal},新的值:${newVal}`);
  });
  // COMPUTED
  let doubleVal = computed(() => {
    return testVal.value * 2;
  });
  return {
    testVal,
    testObj,
    doubleVal
  }
}

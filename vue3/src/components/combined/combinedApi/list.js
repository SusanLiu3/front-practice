import { onMounted, ref} from 'vue';
export default function fetchList() {
  let list = ref([]);
  let getList = () => {
    list.value = ['apple', 'banana', 'orange', 'peel', 'potato'];
  };
  // setup 中的生命周期钩子函数 和组件的生命周期钩子函数一致，只是前面需要加上'on'
  // 这些函数将在组件执行钩子函数时的回调函数
  onMounted(getList);
  return {
    list,
    getList,
  };
}

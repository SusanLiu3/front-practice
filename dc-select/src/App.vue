<template>
  <div id="app">
    <dc-select
        @on-select-change="valChange"
        :mutilAllow="true"
        wrapWidth="200"
        :list="list"
        :showIcon="false"
      ></dc-select>
  </div>
</template>

<script>
let dcSelect =()=>import('./components/index.vue') 
export default {
  name: 'App',
  components:{dcSelect},
  data(){
    return {
       list: [
        { name: '男', value: 1 },
        { name: '女', value: 2 }
      ],
    }
  },
  methods:{
    valChange (list) {
      console.log(list)
    },
  }
}
</script>

<style>
#app{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#32394D
}
</style>

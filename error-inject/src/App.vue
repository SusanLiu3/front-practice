<template>
  <div id="app">
    <div v-error-inject="{text:errorMsg,visible}">
      <input type="text" v-model="val" @blur="blurHandler">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      val:'',
      errorMsg:"",
      visible:false
    }
  },
  methods:{
    blurHandler(){
      if (!this.val){
        this.errorMsg='**请输入正确的名字。'
        this.visible='visible';
        return
      }
      // 也可以写一写其他的校验等等
      this.errorMsg=''
      this.visible='hidden'
    }
  }
}
</script>

<style>
</style>

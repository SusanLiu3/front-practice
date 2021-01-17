<template>
  <div id="app">
    <dc-date-picker :inputVal="inputVal" @on-date-change="setDate('inputVal',$event)"></dc-date-picker>
    <dc-date-picker :inputVal="inputVal1" @on-date-change="setDate('inputVal1',$event)"></dc-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
      inputVal1:''
    };
  },
  methods: {
    setDate(prop,val) {
      this[prop] = val;
    }
  }
};
</script>

<style>
html, body {
  width:100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%
}
</style>

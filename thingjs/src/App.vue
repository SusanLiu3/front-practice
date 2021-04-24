<template>
  <div id="app">
    <div id="div3d"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    /* eslint-disable */
    const app = new THING.App({
      container: "div3d", // 3D容器
      url: 'https://www.thingjs.com/static/models/storehouse',
    });
  }
};
</script>

<style>
#app {
}
#div3d {
  width: 100%;
  height: 100%;
}
</style>

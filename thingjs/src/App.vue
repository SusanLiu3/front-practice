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
    let app = new THING.App({
      url: "https://www.thingjs.com/static/models/storehouse",
    });
    app.on("load", function(ev) {
      app.level.change(ev.campus);
      console.log(ev.buildings)
    });
    app.on(THING.EventType.EnterLevel,'.Building',function(ev){
      console.log(ev,'kkkkk')
    })
  }
};
</script>

<style>
#app {
}
#div3d {
}
</style>

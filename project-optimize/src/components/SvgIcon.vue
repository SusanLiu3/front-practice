<template>
    <svg :class="[className,'svg-icon']" aria-hidden="true">
        <use :xlink:href="curIconName"></use>
    </svg>
</template>
<script>
export default {
    name:'svgIcon',
    props:['iconName','className'],
    computed:{
        curIconName(){
            return '#icon-'+this.iconName
        }
    }
}
</script>
<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
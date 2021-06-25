<!--
* @Author: 开发者
* @Change: 更改者
* @Date: 年-月-日
* @Description: 功能描述
-->
<template>
    <div>
        <div id="div3d"></div>
    </div>
</template>

<script>
/* eslint-disable */
import { createScene, createBox, createMarker } from '../utils/index.js';
export default {
    name: '',
    props: [],
    data() {
        return {};
    },
    components: {},
    computed: {},
    watch: {},
    created() { },
    mounted() {
        createScene()
    },
    methods: {},
    destroyed() { },
};
</script>

<style lang="scss" scoped>
#div3d {
    width: 100%;
    height: 100%;
}
</style>

<template>
    <!-- <component :is="comPare[type]" v-bind="$attrs"></component> -->
    <div :id="chartId"></div>
</template>
<script>
import chartProcess from '../utils/drawProcess.js'
export default {
    name:'Chart',
    props:['chartId','type','config'],
    data(){
        return {
            comPare:{
                line:'lineChart'
            }
        }
    },
    mounted(){
        let instance = chartProcess(this.chartId,this.type,this.config)
        instance.draw()
    }
}
</script>

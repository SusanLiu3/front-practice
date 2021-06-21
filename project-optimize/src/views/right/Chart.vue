<template>
    <div>
        <chart class="chart-wrap" chartId="chartWrap" type="line" :config="config"> </chart>
    </div>
    
</template>
<script>
import chart from '../../components/Chart'
export default {
    components: {
        chart
    },
    data() {
        return {
            config: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }]
            }
        }
    }
}
</script>
<style scoped>
.chart-wrap{
    height: 500px;
}
</style>

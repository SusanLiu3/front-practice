
// import chartConfig from '../chartConfig.js'

import * as echarts from 'echarts';

function Chart(id,config) {
}

Chart.prototype.initData=function () {
    // // 初始化配置文件
    // let curConfig = JSON.parse(JSON.stringify(chartConfig))
    // Object.assign(curConfig, config) 
    // return curConfig
}
Chart.prototype.drawChart = function () {
    // 画图
    var chartDom = document.getElementById(this.id);
    var myChart = echarts.init(chartDom);
    myChart.setOption(this.config);
}

export default Chart;
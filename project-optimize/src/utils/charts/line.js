
import Chart from './chart.js'
import { chartConfig } from '../chartConfig.js'
// eslint-disable-next-line
function Line(id, config) {
    this.id = id
    this.config = this.initData(config)
}
Line.prototype = Object.create(Chart.prototype)

Line.prototype.initData = function (config) {
    // 初始化配置文件
    let curConfig = JSON.parse(JSON.stringify(chartConfig))
    Object.assign(curConfig, config)
    return curConfig
}

// Line.prototype.drawChart=function (params) {

// }

export default Line
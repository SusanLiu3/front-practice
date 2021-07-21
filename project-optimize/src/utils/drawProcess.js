
import Line from './charts/line.js'
window.line = Line;
function chartProcess(id, type, config) {
    let instance = new window[type](id,config)
    return {
        draw () {
            instance.drawChart()
        },
        update(){

        }
    }
}
export default chartProcess;
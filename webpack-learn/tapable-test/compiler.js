const {
    SyncHook,
    AsyncSeriesHook
} = require('tapable');
class Compiler {
    constructor() {
        this.hooks = {
            accelerate: new SyncHook(["newSpeed"]),
            calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList"])
        }
    }
    run() {
        this.hooks.accelerate.call(10)
        this.hooks.calculateRoutes.callAsync(11)
    }
}
module.exports = Compiler
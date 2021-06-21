define(function (require, exports, module) {
    const { msg, fun } = require('./world')
    module.exports = function () {
        console.log(msg)
        fun()
    }
})
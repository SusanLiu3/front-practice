define(function (require, exports, module) {
    let obj = require('./world') // {msg:'world'}
    exports.sayHi = function () {
        console.log('hello', obj.msg)
    }
});
/**
 * ['modules'] 依赖的模块
 * 模块代码
 */
// define(['modules'], function(require, factory) {
//     'use strict';
    
// });
/**
 * 当前模块不依赖其他模块
 */
define(function () {
    console.log('我已经运行了吗')
    return {
        msg:'hello',
        fun:function () {
            console.log('hello require')
        }
    }
})
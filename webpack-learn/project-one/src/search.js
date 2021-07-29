// import Vue from 'vue'
import './test.scss'
import {
    sayHi
} from './common/index.js'
const test = require('./imgs/test.jpg')
console.log(sayHi())
// import test from './imgs/test.jpg'
new Vue({
    el:'#app',
    render:function(h){
        return (<div class='test'>
            test jsx page
            <img src={test}></img>
            </div>)
    }
})
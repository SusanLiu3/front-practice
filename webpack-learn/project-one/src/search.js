import Vue from 'vue'
import './test.scss'
const test = require('./imgs/test.jpg')
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
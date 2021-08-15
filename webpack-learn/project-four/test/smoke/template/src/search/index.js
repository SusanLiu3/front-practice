// import Vue from 'vue'
import '../test.scss'
import {
    sayHi,
    sayTreeShaking,
} from '../common'

const test = require('../img/test.jpg')

new Vue({
    el: '#app',
    data() {
        return {
            text: '',
        }
    },
    render(h) {
        return (<div class='test'>
            test jsx page
            <img src={test}></img>
            <button onClick={this.clk}>动态加载</button>
            <div>{this.text ? this.text : ''}</div>
        </div>)
    },
    methods: {
        clk() {
            require.ensure([], () => {
                this.text = require('../dynamic.js').default
            })
            console.log('点击了')
        },
    },
})

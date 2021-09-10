// import Vue from 'vue'
import './test.scss'
const test = require('./imgs/test.jpg')
new Vue({
    el:'#app',
    data(){
        return {
            text:''
        }
    },
    render:function(h){
        return (<div class='test'>
            test jsx page
            <img src={test}></img>
            <button onClick={this.clk}>动态加载</button>
    <div>{this.text?this.text:''}</div>
            </div>)
    },
    methods:{ 
        clk(){
            // require.ensure([],()=>{
            //     this.text=require('./dynamic.js').default
            // })
          import('./dynamic.js').then(text=>{
              this.text=text.default
          })
            console.log('点击了')
        }
    }
})
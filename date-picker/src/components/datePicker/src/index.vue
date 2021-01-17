<template>
  <div class="dc-datepicker" @click.stop="clkProcess" ref="dcDatePicker">
    <input type="text" :placeholder="placeholder" v-model="inputVal" readonly />
  </div>
</template>
<script>
import Vue from "vue";
import DcDatePicker from "./detail.vue";
export default {
  name: "DcDatePicker",
  props: {
    placeholder: {
      type: String,
      default: "YYYY-MM-DD"
    },
    inputVal: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    }
  },
  methods: {
    clkProcess(e) {
      let dom = document.querySelector(".dc-datepicker-wrap");
      let target = e.currentTarget || e.target;
      // 获取x,y
      let { x, y, height, width } = target.getBoundingClientRect();
      // 判断是点击当前input框还是另外一个,如果是另外一个不需要return ，如果是当前，则需要return
      if (dom){
        let {y:tempY}=dom.getBoundingClientRect()
        dom.remove();
        if (tempY-y<=height){
          return;
        }
      }
      let Cons = Vue.extend(DcDatePicker);
      let ins = new Cons();
      ins.$mount(document.createElement("div"));
      ins.onDateChange=(tempInputVal)=>{
        this.$emit('on-date-change',tempInputVal)
        let tempDom=document.querySelector(".dc-datepicker-wrap")
        tempDom&&tempDom.remove()
      }
      // 给日期选择框定位
      ins.inputVal = this.inputVal;
      ins.$el.style.top = height + y + "px";
      if (this.textAlign === "left") {
        ins.$el.style.left = x + "px";
      } else if (this.textAlign === "right") {
        ins.$el.style.left = x + width + "px";
        ins.$el.style.transform = "translateX(-100%)";
      } else {
        ins.$el.style.left = x + width / 2 + "px";
        ins.$el.style.transform = "translateX(-50%)";
      }
      // 监听body的点击事件，如果点击位置不在datepicker范围内，就remove相应的detail
      document.body.removeEventListener("click", function() {});
      document.body.addEventListener("click", function(eBody){
        // 获取detail元素的位置
        let dom = document.querySelector(".dc-datepicker-wrap");
        if (!dom) {
          return;
        }
        // 获取点击的位置
        // ,height:curHeight,width:curWidth
        let { x: curX, y: curY } = eBody.target.getBoundingClientRect();
        
        let {
          x: domX,
          y: domY,
          height: domHeight,
          width: domWidth
        } = dom.getBoundingClientRect();
        console.log(curX,curY)
        console.log(domX,domWidth,domY,domHeight)
        if (
          !(
            curX >= domX &&
            curX <= domX + domWidth &&
            curY >= domY &&
            curY <= domY + domHeight
          )
        ) {
          dom.remove();
        }
      });
      document.body.append(ins.$el);
    }
  }
};
</script>
<style lang="scss" scoped>
.dc-datepicker {
  width: 192px;
  height: 40px;
  background-color: #fff;
  border-radius: 4px;
  // position: relative;
  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 9px 10px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #a4a4a4;
    outline: none;
    
    &:hover {
      border: 1px solid #424242;
    }
    &:focus {
      border: 1px solid #4284f5;
    }
  }
}
</style>

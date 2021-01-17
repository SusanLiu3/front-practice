<template>
  <div :style="{width:wrapWidth+'px'}" @click.stop="clkHandler" class="select-wrap" ref="select">
    <!-- <template v-if="mutilAllow"> -->
    <input
      :style="{width:wrapWidth+'px'}"
      type="text"
      readonly
      :placeholder="selected.length>0?'':placeHolder"
    />
    <span class="selected-box">
      <span v-for="i in selected" :key="i.value">
        <span>{{i.name}}</span>
        <span :data-value="i.value" class="icon-close">+</span>
      </span>
    </span>
    <!-- </template>
    <template v-else>
      <input type="text" focus v-model="selectedText" readonly :placeholder="placeHolder" />
    </template>-->

    <div v-if="showIcon" class="icon-triangle"></div>
  </div>
</template>
<script>
import Vue from "vue";
import list from "./list.vue";
import { addEvent } from "./index.js";
export default {
  props: {
    // list:{name:'',value:''}
    list: {
      type: Array,
      default: () => []
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    mutilAllow: {
      type: Boolean,
      default: false
    },
    placeHolder: {
      type: String,
      default: "请选择"
    },
    wrapWidth: {
      type: [String, Number],
      default: 150
    },
    spanWdith: {
      type: [String, Number],
      default: 40
    }
  },
  data() {
    return {
      selected: [],
      showListFlag: false
    };
  },
  watch: {
    selected: {
      handler: function(val) {
        this.$emit("on-select-change", val);
      }
    }
  },
  computed: {
    selectedText() {
      let text = "";
      this.selected.forEach(i => {
        text += i.name + ",";
      });
      return text ? text.substr(0, text.length - 1) : text;
    }
  },
  methods: {
    delItem(val) {
      this.selected = this.selected
        .filter(i => "" + i.value !== val)
        .filter(i => i.value !== val);
    },
    clkHandler(e) {
      // if (e && (e.target.tagName === 'use' || e.target.tagName === 'svg')) {
      //   let val = e.target.dataset.value;
      //   if (e.target.tagName === 'use') {
      //     val = e.target.parentElement.dataset.value;
      //   }
      //   this.delItem(val);
      //   return;
      // }
      let val = e.target.dataset.value;
      if (!val) {
        val = e.target.parentElement.dataset.value;
      }
      if (val) {
        this.delItem(val);
        return;
      }

      let listDom = document.querySelector(".ui-select-list-wrap");
      if (listDom) {
        listDom.remove();
      }
      // this.showListFlag = !this.showListFlag;
      let ListConstructor = Vue.extend(list);
      let instance = new ListConstructor();
      instance.$mount(document.createElement("div"));
      instance.list = this.list;
      instance.mutilAllow = this.mutilAllow;
      instance.selected = this.selected;
      // instance.showListFlag = this.showListFlag;
      // let that = this;
      addEvent.call(this, e => {
        let newListDom = window.document.querySelector(".ui-select-list-wrap");
        if (newListDom) {
          let xMin = newListDom.clientLeft;
          let xMax = xMin + newListDom.offsetWidth;
          let yMin = newListDom.clientTop;
          let yMax = yMin + newListDom.offsetHeight;
          let x = e.screenX;
          let y = e.screenY;
          if (!(x <= xMax && x <= xMin && y >= yMin && y < yMax)) {
            //   this.showListFlag = false;
            newListDom.remove();
          }
        }
      });
      // document.body.append(instance.$el);
      this.$refs.select.append(instance.$el);
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
input{
  outline: none;
  border: none;
  padding: 0;
  margin: 0
}
.select-wrap {
  // display: inline-block;
  position: relative;
  // width: 150px;
  line-height: 40px;
  // height: 40px;
  background-color: #fff;
  border-radius: 4px;
  color: #000;
  // z-index: 1;
  input {
    position: absolute;
    display: inline-block;
    // width: 150px;
    // height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  .selected-box {
    position: absolute;
    cursor: text;
    font-size: 0;
    background-color: #fff;
    line-height: 30px;
    & > span {
      display: inline-block;
      // width: 40px;
      height: 30px;
      line-height: 30px;
      padding: 0 8px;
      //text-align: center;
      font-size: 12px;
      color: #424242;
      margin-top: 5px;
      margin-left: 4px;
      padding-left: 2px;
      background-color: #fefae0;
      .icon-close {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        background-color: #fff;
        height: 30px;
        width: 30px;
        line-height: 30px;
        vertical-align: middle;
        color: #c0c4cc;
        right: -7px;
        top: 0;
        transform: rotate(-45deg) scale(0.8);
      }
    }
  }
  .icon-triangle {
    width: 0;
    height: 0;
    border-top: 8px solid #000;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 4px;
    top: 16px;
  }
}
</style>

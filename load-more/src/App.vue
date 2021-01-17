<!--
 * @Author: your name
 * @Date: 2020-01-04 19:37:40
 * @LastEditTime : 2020-01-05 14:49:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-world/src/App.vue
 -->
<template>
  <div id="app">
    <div class="wrap" v-scroll="fetchList" delay="1000">
      <ul>
        <li v-for="i in list" :key="i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: [],
      timer: null
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    /**
     * event.target.clientHeight  容器的可视高度
       event.target.scrollTop 滚动条滚动的距离
       event.target.scrollHeight 容器的实际高度
     */
    scroll(event) {
      // 判断什么时候滚动条滚到容器的底部，就是滚动的条件
      let flag =
        event.target.clientHeight +
          event.target.scrollTop -
          event.target.scrollHeight +
          80 >
        0;
      if (flag) {
        this.throttle(this.fetchList);
      }
    },
    fetchList() {
      let list = [];
      let last = this.list.length;
      for (let i = last; i < last + 100; i++) {
        list.push("测试" + i);
      }
      this.list = [...this.list, ...list];
    },
    /**
     * @description:节流
     * @param {type} 回调
     * @return:
     */
    throttle(cb) {
      if (this.timer) {
        // 如果当前定时器存在，则不执行
        return;
      }
      // 永远保证在一段时间内，只会执行第一个操作触发事件的回调函数
      this.timer = setTimeout(() => {
        typeof cb === "function" && cb();
        clearTimeout(this.timer);
        this.timer = null;
      }, 500);
    },
    /**
     * @description: 防抖
     * @param {type} 回调函数
     * @return:
     */
    debound(cb) {
      if (this.timer) {
        // 非第一次触发事件，清楚定时器，重新设置定时器
        clearTimeout(this.timer);
        this.timer = null;
      }
      // 第一次事件触发时，设置定时器，某个时间段后执行函数
      this.timer = setTimeout(() => {
        console.log("❤️❤️");
        typeof cb === "function" && cb();
        clearTimeout(this.timer);
        this.timer = null;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
#app {
  .wrap {
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    overflow: auto;
    ul li {
      list-style: none;
    }
  }
}
</style>

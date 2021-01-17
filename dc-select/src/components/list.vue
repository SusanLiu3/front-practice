<template>
  <ul class="ui-select-list-wrap">
   <!-- <ul> -->
      <li
        :class="[hasSelected(i)?'disabled':'ui-select-li-item']"
        @click.stop="onSelect(i)"
        v-for="i in list"
        :key="i.value"
      >{{i.name}}</li>
    <!-- </ul> -->
  </ul>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      selected: [],
      mutilAllow: false,
      showListFlag: false
    };
  },
  methods: {
    onSelect (i) {
      if (this.hasSelected(i)) {
        return;
      }
      if (this.mutilAllow) {
        this.selected.push(i);
      } else {
        this.selected.pop();
        this.selected.push(i);
        let dom = document.querySelector('.ui-select-list-wrap');
        dom && dom.remove();
        this.showListFlag = false;
      }
    },
    hasSelected (i) {
      return this.selected.filter(m => m.value === i.value).length > 0;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.ui-select-list-wrap {
    position: absolute;
    top: 40px;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #fff;
    margin-top: 2px;
    border-radius: 4px;
    z-index: 99999;
    list-style: none;
    // ul {
    //   width: 100%;
    //   padding: 0;
    //   margin: 0;
    //   list-style: none;
       li {
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #fefae0;
        background-color: inherit;
        padding-left: 10px;
        cursor: pointer;
        color: #424242;
        font-size: 14px;
      }
      li.disabled {
        color: #ccc;
        pointer-events: none;
        cursor: default;
      }
      li:hover {
        background: #fefae0;
      }
   // }
  }
</style>

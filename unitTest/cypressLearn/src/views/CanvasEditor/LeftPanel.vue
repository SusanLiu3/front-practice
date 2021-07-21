<!--
* @Author: lss
* @Change: 更改者
* @Date: 年-月-日
* @Description: 画布编辑页面左侧面板
-->
<template>
  <div class="left-panel-wrap">
    <!-- <div class="">侧边栏1</div> -->
    <com-list></com-list>
  </div>
</template>
<script>
import ComList from "./LeftPanel/ComList";
export default {
  components: {
    ComList,
  },
};
</script>
<style lang="scss" scoped>
// 修改高度自适应
.left-panel-wrap {
  display: flex;
  & > div {
    width: 150px;
    height: 100%;
    // border: 1px solid red;
  }
}
</style>

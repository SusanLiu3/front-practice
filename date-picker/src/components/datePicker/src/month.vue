<template>
  <div class="dc-datepicker-month-wrap-body">
    <ul>
      <li @click="$emit('on-date-change', 'monthChange', i)" :class="curMonth===i?'active':''"  v-for="i in monthList" :key="i">{{i}}</li>
    </ul>
    <div class="return-btn" @click="$emit('on-return-back')">回到当天</div>
  </div>
</template>
<script>
export default {
  props: {
    curMonth: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }
};
</script>
<style lang="scss" scoped>
.dc-datepicker-month-wrap-body {
  margin: 5px 0;
  font-size: 14px;
  color: #424242;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;;
    li{
        width: 36px;
        height: 36px;
        line-height: 36px;;
        margin: 10px 8px;
        box-sizing: border-box;;
        text-align: center;
        cursor: pointer;
        &:hover{
            background-color:#E7EBF2;
        }
    }
    li.active{
        color: #409eff;
    }
  }
  .return-btn{
      text-align: right;
      padding-right: 13px;
  }
}
</style>

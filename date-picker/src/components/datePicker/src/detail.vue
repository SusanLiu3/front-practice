<template>
     <div class="dc-datepicker-wrap">
      <div class="dc-datepicker-wrap-head">
        <a
          @click="getData('prev')"
          href="javascript:void(0)"
          class="dc-datepicker-wrap-button prev"
        >&lt;</a>
        <span @click="switchType" class="year-month">{{title}}</span>
        <a
          @click="getData('next')"
          href="javascript:void(0)"
          class="dc-datepicker-wrap-button next"
        >&gt;</a>
      </div>
      <component
        v-bind="$attrs"
        @on-date-change="dateChange"
        @on-return-back="retBackDay"
        :curDate="curDate"
        :is="curType"
        :monthData="monthData"
        :curYear="curYear"
        :curMonth="curMonth"
      ></component>
    </div>
</template>
<script>
import DatePicker from './index.js';
let day = () => import('./day.vue');
let month = () => import('./month.vue');
export default {
  name: 'DcDatePicker',
  //   props: {
  //     inputVal: {
  //       type: String,
  //       default: ''
  //     }
  //   },
  components: { day, month },
  data () {
    return {
      curYear: 0,
      curMonth: 0,
      monthData: [],
      instance: null,
      weekdayArr: ['日', '一', '二', '三', '四', '五', '六'],
      curType: 'day',
      curDate: null,
      inputVal: '',
      onDateChange:null
    };
  },
  watch: {
    instance: {
      handler (val) {
        this.curYear = val.year;
        this.curMonth = val.month;
        this.monthData = val.monthData;
      },
      deep: true
    },
    inputVal: {
      handler (val) {
        this.curDate = new Date(val);
      },
      immediate: true
    }
  },
  computed: {
    title () {
      if (this.curType === 'month') {
        return this.curYear + '年';
      }
      return this.curYear + '年' + this.curMonth + '月';
    }
  },
  mounted () {
    this.instance = new DatePicker();
    this.instance.getMonthData();
  },
  methods: {
    retBackDay () {
      let date = this.curDate;
      if (!this.inputVal) {
        date = new Date();
      }
      this.instance.year = date.getFullYear();
      this.instance.month = date.getMonth() + 1;
      this.instance.getMonthData();
      this.curType = 'day';
    },
    getData (direction) {
      if (this.curType === 'day') {
        this.instance.switchMonth(direction);
        return;
      }
      this.curMonth = direction === 'prev' ? this.curMonth - 1 : this.curMonth + 1;
    },
    dateChange (type, item) {
      this[type](item);
    },
    monthChange (i) {
      this.instance.month = i;
      this.instance.getMonthData();
      this.curType = 'day';
    },
    dayChange (item) {
      this.curDate = new Date(
        this.instance.year,
        item.thisMonth - 1,
        item.showDay
      );
      let tempInputVal = this.instance.retFormatDate(
        this.instance.year,
        item.thisMonth,
        item.showDay
      );
      this.onDateChange(tempInputVal)
    },
    switchType () {
      this.curType = this.curType === 'day' ? 'month' : 'day';
    }
  }
};
</script>
<style lang="scss" scoped>
  .dc-datepicker-wrap {
    position: absolute;
    width: 230px;
    background: #ffffff;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 5px 10px;
    .dc-datepicker-wrap-head {
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #424242;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #4284f5;
      }
      .dc-datepicker-wrap-button {
        font-size: 20px;
        width: 20px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      .dc-datepicker-wrap-button.prev {
        float: left;
      }
      .dc-datepicker-wrap-button.next {
        float: right;
      }
      .year-month {
        cursor: pointer;
      }
    }
  }

</style>

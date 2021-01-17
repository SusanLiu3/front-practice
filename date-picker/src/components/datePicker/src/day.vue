<template>
  <div class="dc-datepicker-day-wrap-body">
    <table>
      <thead>
        <th v-for="i in weekdayArr" :key="i">{{i}}</th>
      </thead>
      <tbody>
        <template v-for="(iTr,trIdx) in weekdayArr">
          <tr :key="'tr_'+trIdx">
            <template v-for="(iTd,tdIdx) in monthData.slice(trIdx*7,(trIdx+1)*7)">
              <td :key="'td_'+tdIdx" @click="$emit('on-date-change','dayChange',iTd)">
                <span
                  :class="[iTd.showDay!==iTd.day?'not-cur-month-day':'',sameDayFlag(iTd.thisMonth,iTd.showDay,today)?'is-today':'',sameDayFlag(iTd.thisMonth,iTd.showDay,curDate)?'is-selected':'']"
                >{{iTd.showDay}}</span>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    curYear: {
      type: [Number, String],
      default: 0
    },
    curMonth: {
      type: [Number, String],
      default: 0
    },
    monthData: {
      type: Array,
      default: _ => []
    },
    curDate: {
      type: Date,
      default: null
    }
  },
  data () {
    return {
      weekdayArr: ['日', '一', '二', '三', '四', '五', '六'],
      today: null
    };
  },
  mounted () {
    this.today = new Date();
  },
  methods: {
    /**
     * 是否同一天
     */
    sameDayFlag (month, day, compare) {
      if (!compare) {
        return false;
      }
      if (
        this.curYear === compare.getFullYear() &&
        month === compare.getMonth() + 1 &&
        day === compare.getDate()
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped lang='scss'>
.dc-datepicker-day-wrap-body {
  margin: 5px 0;
  font-size: 14px;
  color: #424242;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    td {
      font-size: 12px;
      cursor: pointer;
      span {
        width: 24px;
        height: 24px;
        display: inline-block;
        margin: 0 auto;
        line-height: 24px;
        &:hover {
          color: #409eff;
        }
      }
      .not-cur-month-day {
        color: #a4a4a4;
      }
      span.is-today {
        color: #409eff;
      }
      span.is-selected {
        border-radius: 50%;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}
</style>

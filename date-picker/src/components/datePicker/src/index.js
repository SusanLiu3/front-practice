class DatePicker {
  constructor (year, month) {
    let now = new Date();
    this.year = year || now.getFullYear();
    this.month = month || now.getMonth() + 1;
    this.monthData = [];
  }

  getMonthData (tempYear, tempMonth) {
    let year = tempYear || this.year;
    let month = tempMonth || this.month;
    //
    let firstDate = new Date(year, month - 1, 1); // 当前月第一天date对象
    let lastDate = new Date(year, month, 0); // 最后一天
    let lastDateDay = lastDate.getDate(); // 最后一天的日期
    let firstDayFirstWeek = firstDate.getDay();

    let prevMonthLastDate = new Date(year, month - 1, 0);
    let prevMonthLastDay = prevMonthLastDate.getDate();
    let ret = [];
    for (let i = 0; i < 6 * 7; i++) {
      let day = -firstDayFirstWeek + i + 1;
      let showDay = day;
      let thisMonth = month;
      // 上个月
      if (day <= 0) {
        showDay = prevMonthLastDay + day;
        thisMonth--;
      } else if (showDay > lastDateDay) {
        showDay = showDay - lastDateDay;
        thisMonth++;
      }
      if (month === 0) {
        month = 12;
      }
      if (month > 12) {
        month = 1;
      }
      ret.push({
        day, // 可能为负数  可能大于最后一天
        showDay, // 展示的日期
        thisMonth
      });
    }
    this.monthData = ret;
    return ret;
  }

  switchMonth (direc) {
    if (direc === 'prev') {
      this.month--;
    } else {
      this.month++;
    }
    if (this.month === 0) {
      this.month = 12;
      this.year--;
    } else if (this.month === 13) {
      this.month = 1;
      this.year++;
    }
    this.getMonthData();
  }

  retFormatDate (year, month, day) {
    month = month <= 9 ? '0' + month : month;
    day = day <= 9 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }
}
export default DatePicker;

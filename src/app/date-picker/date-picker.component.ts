import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, forwardRef } from '@angular/core';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';

declare var jquery: any;
declare var $: any;
const myMoment = extendMoment(moment);
//declare var moment:any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;
  Title: string;
  MomentInstance: any;
  MonthRange: any;
  CalendarYear: number;
  CalendarMonth: number;
  //
  CalInfoMonth: number = 0;
  CalInfoYear: number = 0;
  CalsInfoDaysInMont: number = 0;
  CalsInfoWeekOfMont: number = 0;
  CalMonth: Array<any> = [];
  //
  Months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  Weekdays: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  Quater: number = 4;
  WeekCount: number = 5;
  Weeks: 3;

  CurrentMonthWeeks: Array<number> = [];
  constructor() {

  }

  isLeapYear = () => {
    return this.MomentInstance.isLeapYear();
  }
  calDaysInMonth = () => {
    return this.MomentInstance.daysInMonth();
  }
  calcDaysInMonth = (year, month) => {
    return myMoment({ year: year, month: month }).daysInMonth();
  }
  calcFirstWeek = (year, month) => {
    return myMoment({ year: year, month: month }).weekday();
  }

  setCalendar = () => {
    this.MomentInstance = myMoment({ year: this.CalendarYear, month: this.CalendarMonth - 1 });
    console.log("setCalendar - ", this.MomentInstance.format());
    this.setCalendarInfo();
  }
  setCalendarInfo = () => {
    var dvMonth;
    this.Months.forEach(n => {
      dvMonth = $("<div></div>");
      dvMonth.append("<span>" + n + "</span>");
      $("#dvCal").append(dvMonth);
    });

    var _startDate = myMoment({ year: this.CalendarYear, month: this.CalendarMonth - 1 }).startOf('month');
    var _endDate = myMoment({ year: this.CalendarYear, month: this.CalendarMonth - 1 }).endOf('month');
    var _monthRange = myMoment({ year: this.CalendarYear, month: this.CalendarMonth - 1 }).range(_startDate, _endDate);
    var _days = Array.from(_monthRange.by('days'));
    let sd = Array.from(_monthRange.by('days'));
    var week = [];
    for (let item in sd) {
      if (week.indexOf(sd[item].week()) < 0)
        week.push(sd[item].week())
    }
    console.log('week', week);


  }
  setFiscalMonth = (self, year, month, day, week_count) => {

  }
  setFiscalWeek = (tbody, year, month, day) => {

  }

  ngOnInit() {
    this.CalendarMonth = 7;
    this.CalendarYear = 2018;
    this.setCalendar();
    console.log("daysInMonth", this.calDaysInMonth());
    console.log("isLeapyear", this.isLeapYear());
  }

  ngAfterViewInit() {
    $("#dtDateSelector").datepicker({ firstDay: 1, showTrailingWeek: true, showOtherMonths: true, selectOtherMonths: true, constrainInput: false, showWeek: true });
    $("#dtBroadCastCal").datepicker({ firstDay: 1,changeYear:true,changeMonth:true, showTrailingWeek: false, showOtherMonths: true, selectOtherMonths: true, constrainInput: false, showWeek: true });

  }

}

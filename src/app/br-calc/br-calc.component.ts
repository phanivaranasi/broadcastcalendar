import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-br-calc',
  templateUrl: './br-calc.component.html',
  styleUrls: ['./br-calc.component.css']
})
export class BrCalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var settings = {
      'month': 7,
      'year': 2018
    };
    var self = $("#dvClac"),
      ily = this.is_leap_year(settings.year), // is leap year
      fdom = (new Date(settings.year - 1, settings.month)).getDay(), // first day of month
      fwolm = this.days_in_month(settings.year - 1, settings.month), // first week of last month
      year = settings.year - 1,
      month = Math.abs((settings.month - 1) % 12),
      day = fwolm - fdom,
      week_count = 5;
      var fiscal_month;
    for (var j = 0, quarters = 4; j < quarters; j += 1) {
      for (var k = 0, weeks = 3; k < weeks; k += 1) {
        week_count = k === 0 ? 5 : 4;
        if (k === 2 && j === 0 && ily) {
          week_count = 5;
        }
        if (j === 0 && k === 0) {
          fiscal_month = this.FiscalMonth(self, year, month, day, week_count);
        } else {

          fiscal_month.push(week_count);
          fiscal_month = this.FiscalMonth.apply({}, fiscal_month);
        }
      }
    }
  }
  is_leap_year = function (yr) {
    var offset = 3; // not sure how to really do this
    return ((52 * (yr + offset) + 146) % 293) < 52;
  };
  days_in_month = (year, month)=> {
    return 32 - (new Date(year, month, 32).getDate());
  };
  FiscalMonth = function (bind_elem, year, month, day, week_count) {

    var table = $('<table><thead><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></thead><tbody></table>'),
      tbody = $('tbody', table),
      week = this.build_week(tbody, year, month, day);
    for (var i = 0, il = week_count - 1; i < il; i += 1) {
      week = this.build_week.apply({}, week);
    }
    table.append(week[0]);
    bind_elem.append(table);
    return [bind_elem, week[1], week[2], week[3]];
  };
  build_week = function (tbody, year, month, day) {
    var tr = $('<tr></tr>'),
      td,
      dicm = this.days_in_month(year, month), // days in current month 
      zo = 0, // zero offset
      d; // day of week
    for (var i = 0, il = 7; i < il; i += 1) {
      td = $('<td></td>');
      d = ((i + day) % (dicm + 1));
      if (d === 0) {
        zo += 1;
        if (month + 1 > 11) {
          month = 0;
          year += 1;
        } else {
          month += 1;
        }
      }
      td.html(d + zo);
      tr.append(td);
    }
    tbody.append(tr);
    return [tbody,
      year,
      month,
      (d + zo + 1)];
  };
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';

import * as _moment from 'moment';
import { Moment } from 'moment';

import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'datepicker-formats-example',
  templateUrl: 'datepicker-formats-example.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class DatepickerFormatsExample {
  minDate : any = "";

  myFilter = (m: Moment | null): boolean => {
    const day = (m || moment()).day();
    return day !== 0 && day !== 6 && day !== 5 && day !== 4 && day !== 2 && day !== 1;
  } 
  
  ngOnInit() {
 //const currentYear = moment().year();
// this.minDate = moment([currentYear - 0, 5 ,1]);
this.getDate();

} 
  getDate(){
    var date : any = new Date();
    var todaysDate : any = date.getDate();
    if(todaysDate < 10){
      todaysDate = '0' + todaysDate;
    }
    var month = date.getMonth() + 1;
    if(month < 10){
      month = '0' + month;
    }
    var year = date.getFullYear();
    this.minDate = year + "-" + month + "-" + todaysDate;
    console.log(this.minDate);
  }

  date = new FormControl(moment());
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BrCalcComponent } from './br-calc/br-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    BrCalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

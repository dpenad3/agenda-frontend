import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/es';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    ComponentsModule,
    NgCalendarModule
  ],
  declarations: [CalendarPage],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES'}
  ]
})
export class CalendarPageModule {}

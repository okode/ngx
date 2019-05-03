import { Component, ViewChild, TemplateRef, OnInit, ViewEncapsulation } from '@angular/core';
import { startOfDay, subDays, addDays, endOfMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';

export class CustomDateFormatter extends CalendarDateFormatter {
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'EEE', locale);
  }
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'MMMM y', locale);
  }
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mapfre-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // Important to import '~angular-calendar/css/angular-calendar.css' in calendar.component.scss
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent implements OnInit {

  // Documentation: https://github.com/mattlewis92/angular-calendar

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor(
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.addEvents();
  }

  async dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    const toast = await this.toastController.create({
      message: 'Day selected: ' + new DatePipe('en').transform(date, 'yyyy-MM-dd', 'en'),
      color: 'medium',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
    console.log(date, events);
  }

  addEvents() {
    this.events = [{
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      allDay: true,
    }, {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      allDay: true
    }, {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
    }];
  }

  handleEvent(action: string, event: CalendarEvent): void {

  }

}


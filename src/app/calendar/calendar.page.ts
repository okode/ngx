import { Component, ViewChild, TemplateRef, OnInit, ViewEncapsulation } from '@angular/core';
import { startOfDay, subDays, addDays, endOfMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';

class CustomDateFormatter extends CalendarDateFormatter {
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'EEE', locale);
  }
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'MMMM y', locale);
  }
}

/**
 * @ignore <example-url>http://localhost:8080/assets/playground?componentPath=calendar</example-url>
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  encapsulation: ViewEncapsulation.None,
  // Important to import '~angular-calendar/css/angular-calendar.css' in calendar.page.scss
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarPage implements OnInit {

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

}


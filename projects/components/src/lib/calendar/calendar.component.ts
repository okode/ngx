import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';

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
export class CalendarComponent {

  // Documentation: https://github.com/mattlewis92/angular-calendar

  CalendarView = CalendarView;
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  @Input() activeDayIsOpen = false;
  @Input() weekStartsOn = 1;

  @Output() dayClicked = new EventEmitter<{ date: Date; events: CalendarEvent[] }>();
  @Output() handleEvent = new EventEmitter<{ action: string, event: CalendarEvent }>();

  constructor() { }

  onDayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    this.dayClicked.emit({ date, events });
  }

  onHandleEvent(action: string, event: CalendarEvent): void {
    this.handleEvent.emit({ action, event });
  }

}


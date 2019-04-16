import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

/**
 * @ignore <example-url>http://localhost:8080/assets/playground?componentPath=calendar</example-url>
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {

  calendarPlugins = [ dayGridPlugin ];

}

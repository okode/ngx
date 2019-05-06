import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { subDays, startOfDay, addDays, endOfMonth, addHours } from 'date-fns';
/**
 * <example-url>../../assets/playground.html?componentPath=calendar</example-url>
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss']
})
export class CalendarPage implements OnInit {

  constructor(
    private toastController: ToastController
  ) { }


  viewDate = new Date();
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;
  weekStartsOn = '1';

  ngOnInit() {
    this.addEvents();
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

  async onDayClicked(event: { date: Date; events: CalendarEvent[] }) {
    const toast = await this.toastController.create({
      message: 'Day selected: ' + new DatePipe('en').transform(event.date, 'yyyy-MM-dd', 'en'),
      color: 'medium',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
    console.log(event.date, event.events);
  }

  async onHandleEvent(event: { action: string, event: CalendarEvent }) {
    const toast = await this.toastController.create({
      message: 'Event selected: ' + event.event.title,
      color: 'medium',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
    console.log(event.action, event);
  }

}


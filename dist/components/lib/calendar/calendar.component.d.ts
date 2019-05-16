import { EventEmitter } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
export declare class CustomDateFormatter extends CalendarDateFormatter {
    monthViewColumnHeader({ date, locale }: DateFormatterParams): string;
    monthViewTitle({ date, locale }: DateFormatterParams): string;
}
export declare class CalendarComponent {
    CalendarView: typeof CalendarView;
    viewDate: Date;
    events: CalendarEvent[];
    activeDayIsOpen: boolean;
    weekStartsOn: number;
    dayClicked: EventEmitter<{
        date: Date;
        events: CalendarEvent<any>[];
    }>;
    handleEvent: EventEmitter<{
        action: string;
        event: CalendarEvent<any>;
    }>;
    constructor();
    onDayClicked({ date, events }: {
        date: Date;
        events: CalendarEvent[];
    }): void;
    onHandleEvent(action: string, event: CalendarEvent): void;
}

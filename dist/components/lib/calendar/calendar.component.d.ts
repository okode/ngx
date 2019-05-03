import { TemplateRef, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { ToastController } from '@ionic/angular';
export declare class CustomDateFormatter extends CalendarDateFormatter {
    monthViewColumnHeader({ date, locale }: DateFormatterParams): string;
    monthViewTitle({ date, locale }: DateFormatterParams): string;
}
export declare class CalendarComponent implements OnInit {
    private toastController;
    modalContent: TemplateRef<any>;
    CalendarView: typeof CalendarView;
    viewDate: Date;
    events: CalendarEvent[];
    constructor(toastController: ToastController);
    ngOnInit(): void;
    dayClicked({ date, events }: {
        date: Date;
        events: CalendarEvent[];
    }): Promise<void>;
    addEvents(): void;
    handleEvent(action: string, event: CalendarEvent): void;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { startOfDay, subDays, addDays, endOfMonth, addHours } from 'date-fns';
import { CalendarView, CalendarDateFormatter } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
var CustomDateFormatter = /** @class */ (function (_super) {
    tslib_1.__extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewColumnHeader = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'EEE', locale);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CustomDateFormatter.prototype.monthViewTitle = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new DatePipe(locale).transform(date, 'MMMM y', locale);
    };
    return CustomDateFormatter;
}(CalendarDateFormatter));
export { CustomDateFormatter };
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(toastController) {
        this.toastController = toastController;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.events = [];
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addEvents();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarComponent.prototype.dayClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, events = _a.events;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Day selected: ' + new DatePipe('en').transform(date, 'yyyy-MM-dd', 'en'),
                            color: 'medium',
                            position: 'bottom',
                            duration: 2000
                        })];
                    case 1:
                        toast = _b.sent();
                        toast.present();
                        console.log(date, events);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.addEvents = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} action
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.handleEvent = /**
     * @param {?} action
     * @param {?} event
     * @return {?}
     */
    function (action, event) {
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'mapfre-calendar',
                    template: "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button mwlCalendarPreviousView [view]=\"CalendarView.Month\" [(viewDate)]=\"viewDate\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>{{ viewDate | calendarDate:(CalendarView.Month + 'ViewTitle'): 'en' }}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button mwlCalendarToday [(viewDate)]=\"viewDate\">Today</ion-button>\n    <ion-button mwlCalendarNextView [view]=\"CalendarView.Month\" [(viewDate)]=\"viewDate\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  activeDayIsOpen=\"false\"\n  weekStartsOn=\"1\"\n  (dayClicked)=\"dayClicked($event.day)\"\n  (eventClicked)=\"handleEvent('Clicked', $event.event)\">\n</mwl-calendar-month-view>\n",
                    encapsulation: ViewEncapsulation.None,
                    // Important to import '~angular-calendar/css/angular-calendar.css' in calendar.component.scss
                    providers: [
                        {
                            provide: CalendarDateFormatter,
                            useClass: CustomDateFormatter
                        }
                    ],
                    styles: [".cal-month-view .cal-header{text-align:center;font-weight:bolder}.cal-month-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view .cal-days{border:1px solid;border-bottom:0}.cal-month-view .cal-cell-top{min-height:78px;flex:1}.cal-month-view .cal-cell-row{-js-display:flex;display:flex}.cal-month-view .cal-cell{float:left;flex:1;-js-display:flex;display:flex;flex-direction:column;align-items:stretch}.cal-month-view .cal-day-cell{min-height:100px}@media all and (-ms-high-contrast:none){.cal-month-view .cal-day-cell{display:block}}.cal-month-view .cal-day-cell:not(:last-child){border-right:1px solid #e1e1e1}.cal-month-view .cal-days .cal-cell-row{border-bottom:1px solid #e1e1e1}.cal-month-view .cal-day-badge{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;background-color:#b94a48;color:#fff}.cal-month-view .cal-day-number{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view .cal-events{flex:1;align-items:flex-end;margin:3px;line-height:10px;-js-display:flex;display:flex;flex-wrap:wrap}.cal-month-view .cal-day-cell.cal-in-month.cal-has-events{cursor:pointer}.cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.1;cursor:default}.cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:1.9em}.cal-month-view .cal-open-day-events .cal-event{position:relative;top:2px}.cal-month-view .cal-out-month .cal-day-badge,.cal-month-view .cal-out-month .cal-event{opacity:.3}.cal-month-view .cal-draggable{cursor:move}.cal-month-view .cal-drag-active *{pointer-events:none}.cal-month-view .cal-event-title{cursor:pointer}.cal-month-view .cal-event-title:hover{text-decoration:underline}.cal-month-view{background-color:#fff}.cal-month-view .cal-cell-row:hover{background-color:#fafafa}.cal-month-view .cal-cell-row .cal-cell:hover,.cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#ededed}.cal-month-view .cal-days{border-color:#e1e1e1}.cal-month-view .cal-event{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px;background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#8b0000}.cal-month-view .cal-day-cell.cal-today{background-color:#e8fde7}.cal-month-view .cal-day-cell.cal-drag-over{background-color:#e0e0e0!important}.cal-month-view .cal-open-day-events{padding:15px;color:#fff;background-color:#555;box-shadow:inset 0 0 15px 0 rgba(0,0,0,.5)}.cal-week-view *{box-sizing:border-box}.cal-week-view .cal-day-headers{-js-display:flex;display:flex;padding-left:70px;border:1px solid}.cal-week-view .cal-day-headers .cal-header{flex:1;text-align:center;padding:5px}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:1px solid}.cal-week-view .cal-day-headers .cal-header:first-child{border-left:1px solid}.cal-week-view .cal-day-headers span{font-weight:400;opacity:.5}.cal-week-view .cal-day-column{flex-grow:1;border-left:1px solid}.cal-week-view .cal-event{font-size:12px;border:1px solid}.cal-week-view .cal-time-label-column{width:70px;height:100%}.cal-week-view .cal-all-day-events{border:1px solid;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view .cal-all-day-events .cal-day-columns{height:100%;width:100%;-js-display:flex;display:flex;position:absolute;top:0;z-index:0}.cal-week-view .cal-all-day-events .cal-events-row{position:relative;height:31px;margin-left:70px}.cal-week-view .cal-all-day-events .cal-event-container{display:inline-block;position:absolute}.cal-week-view .cal-all-day-events .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-week-view .cal-all-day-events .cal-event{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:5px;border-bottom-right-radius:5px}.cal-week-view .cal-all-day-events .cal-time-label-column{-js-display:flex;display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view .cal-all-day-events .cal-resize-handle{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:0}.cal-week-view .cal-event,.cal-week-view .cal-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view .cal-drag-active{pointer-events:none;z-index:1}.cal-week-view .cal-drag-active *{pointer-events:none}.cal-week-view .cal-time-events{position:relative;border:1px solid;border-top:0;-js-display:flex;display:flex}.cal-week-view .cal-time-events .cal-day-columns{-js-display:flex;display:flex;flex-grow:1}.cal-week-view .cal-time-events .cal-day-column{position:relative}.cal-week-view .cal-time-events .cal-event-container{position:absolute;z-index:1}.cal-week-view .cal-time-events .cal-event{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view .cal-time-events .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-week-view .cal-hour-segment{position:relative}.cal-week-view .cal-hour-segment::after{content:'\\00a0'}.cal-week-view .cal-event-container:not(.cal-draggable){cursor:pointer}.cal-week-view .cal-draggable{cursor:move}.cal-week-view .cal-hour-segment,.cal-week-view mwl-calendar-week-view-hour-segment{display:block}.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-week-view .cal-time{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-week-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view{background-color:#fff}.cal-week-view .cal-day-headers{border-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-drag-over,.cal-week-view .cal-day-headers .cal-header:hover{background-color:#ededed}.cal-week-view .cal-day-column{border-left-color:#e1e1e1}.cal-week-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view .cal-all-day-events{border-color:#e1e1e1}.cal-week-view .cal-header.cal-today{background-color:#e8fde7}.cal-week-view .cal-header.cal-weekend span{color:#8b0000}.cal-week-view .cal-time-events{border-color:#e1e1e1}.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#ededed}.cal-week-view .cal-hour-odd{background-color:#fafafa}.cal-week-view .cal-drag-over .cal-hour-segment{background-color:#ededed}.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-day-view *{box-sizing:border-box}.cal-day-view .cal-hour-rows{width:100%;border:1px solid;overflow-x:auto;position:relative}.cal-day-view .cal-hour-segment,.cal-day-view mwl-calendar-day-view-hour-segment{display:block}.cal-day-view .cal-hour-segment::after{content:'\\00a0'}.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-day-view .cal-time{font-weight:700;width:70px;height:100%;-js-display:flex;display:flex;justify-content:center;align-items:center}.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-day-view .cal-drag-active .cal-hour-segment{pointer-events:none}.cal-day-view .cal-event-container{position:absolute;cursor:pointer}.cal-day-view .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-day-view .cal-event{padding:5px;font-size:12px;border:1px solid;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}.cal-day-view .cal-all-day-events>*{cursor:pointer}.cal-day-view .cal-draggable{cursor:move}.cal-day-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-day-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-day-view .cal-drag-active{z-index:1}.cal-day-view .cal-drag-active *{pointer-events:none}.cal-day-view .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-day-view .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-day-view{background-color:#fff}.cal-day-view .cal-hour-rows{border-color:#e1e1e1}.cal-day-view .cal-hour:nth-child(odd){background-color:#fafafa}.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-day-view .cal-drag-over .cal-hour-segment,.cal-day-view .cal-hour-segment:hover{background-color:#ededed}.cal-day-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-tooltip{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left{padding:0 5px;margin-left:-3px}.cal-tooltip-inner{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem;color:#fff;background-color:#000}.cal-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}"]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: ToastController }
    ]; };
    CalendarComponent.propDecorators = {
        modalContent: [{ type: ViewChild, args: ['modalContent',] }]
    };
    return CalendarComponent;
}());
export { CalendarComponent };
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.modalContent;
    /** @type {?} */
    CalendarComponent.prototype.CalendarView;
    /** @type {?} */
    CalendarComponent.prototype.viewDate;
    /** @type {?} */
    CalendarComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.toastController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUUsT0FBTyxFQUFpQixZQUFZLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0sa0JBQWtCLENBQUM7QUFDM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRDtJQUF5QywrQ0FBcUI7SUFBOUQ7O0lBT0EsQ0FBQzs7Ozs7SUFOUSxtREFBcUI7Ozs7SUFBNUIsVUFBNkIsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ3pDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFDTSw0Q0FBYzs7OztJQUFyQixVQUFzQixFQUFxQztZQUFuQyxjQUFJLEVBQUUsa0JBQU07UUFDbEMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBeUMscUJBQXFCLEdBTzdEOztBQUNEO0lBd0JFLDJCQUNVLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUwxQyxpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixhQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQW9CLEVBQUUsQ0FBQztJQUkxQixDQUFDOzs7O0lBRUosb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUssc0NBQVU7Ozs7SUFBaEIsVUFBaUIsRUFBeUQ7WUFBdkQsY0FBSSxFQUFFLGtCQUFNOzs7Ozs0QkFDZixxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzs0QkFDOUMsT0FBTyxFQUFFLGdCQUFnQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQzs0QkFDbEYsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsRUFBQTs7d0JBTEksS0FBSyxHQUFHLFNBS1o7d0JBQ0YsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDM0I7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJO2FBQ2IsRUFBRTtnQkFDRCxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsa0NBQWtDO2dCQUN6QyxNQUFNLEVBQUUsSUFBSTthQUNiLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUMsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNmLEtBQUssRUFBRSxpQ0FBaUM7YUFDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsdUNBQVc7Ozs7O0lBQVgsVUFBWSxNQUFjLEVBQUUsS0FBb0I7SUFFaEQsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNDRCQUF3QztvQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O29CQUVyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLG1CQUFtQjt5QkFDOUI7cUJBQ0Y7O2lCQUNGOzs7O2dCQXZCUSxlQUFlOzs7K0JBNEJyQixTQUFTLFNBQUMsY0FBYzs7SUErQzNCLHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FuRFksaUJBQWlCOzs7SUFJNUIseUNBQTBEOztJQUUxRCx5Q0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIsbUNBQTZCOzs7OztJQUczQiw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXJ0T2ZEYXksIHN1YkRheXMsIGFkZERheXMsIGVuZE9mTW9udGgsIGFkZEhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCwgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsIERhdGVGb3JtYXR0ZXJQYXJhbXMgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbURhdGVGb3JtYXR0ZXIgZXh0ZW5kcyBDYWxlbmRhckRhdGVGb3JtYXR0ZXIge1xuICBwdWJsaWMgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZVBpcGUobG9jYWxlKS50cmFuc2Zvcm0oZGF0ZSwgJ0VFRScsIGxvY2FsZSk7XG4gIH1cbiAgcHVibGljIG1vbnRoVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZVBpcGUobG9jYWxlKS50cmFuc2Zvcm0oZGF0ZSwgJ01NTU0geScsIGxvY2FsZSk7XG4gIH1cbn1cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWFwZnJlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gSW1wb3J0YW50IHRvIGltcG9ydCAnfmFuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzJyBpbiBjYWxlbmRhci5jb21wb25lbnQuc2Nzc1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gICAgICB1c2VDbGFzczogQ3VzdG9tRGF0ZUZvcm1hdHRlclxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY2FsZW5kYXJcblxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRlbnQnKSBtb2RhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQ2FsZW5kYXJWaWV3ID0gQ2FsZW5kYXJWaWV3O1xuICB2aWV3RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIGFzeW5jIGRheUNsaWNrZWQoeyBkYXRlLCBldmVudHMgfTogeyBkYXRlOiBEYXRlOyBldmVudHM6IENhbGVuZGFyRXZlbnRbXSB9KSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogJ0RheSBzZWxlY3RlZDogJyArIG5ldyBEYXRlUGlwZSgnZW4nKS50cmFuc2Zvcm0oZGF0ZSwgJ3l5eXktTU0tZGQnLCAnZW4nKSxcbiAgICAgIGNvbG9yOiAnbWVkaXVtJyxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICAgIGNvbnNvbGUubG9nKGRhdGUsIGV2ZW50cyk7XG4gIH1cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbe1xuICAgICAgc3RhcnQ6IHN1YkRheXMoc3RhcnRPZkRheShuZXcgRGF0ZSgpKSwgMSksXG4gICAgICBlbmQ6IGFkZERheXMobmV3IERhdGUoKSwgMSksXG4gICAgICB0aXRsZTogJ0EgMyBkYXkgZXZlbnQnLFxuICAgICAgYWxsRGF5OiB0cnVlLFxuICAgIH0sIHtcbiAgICAgIHN0YXJ0OiBzdWJEYXlzKGVuZE9mTW9udGgobmV3IERhdGUoKSksIDMpLFxuICAgICAgZW5kOiBhZGREYXlzKGVuZE9mTW9udGgobmV3IERhdGUoKSksIDMpLFxuICAgICAgdGl0bGU6ICdBIGxvbmcgZXZlbnQgdGhhdCBzcGFucyAyIG1vbnRocycsXG4gICAgICBhbGxEYXk6IHRydWVcbiAgICB9LCB7XG4gICAgICBzdGFydDogYWRkSG91cnMoc3RhcnRPZkRheShuZXcgRGF0ZSgpKSwgMiksXG4gICAgICBlbmQ6IG5ldyBEYXRlKCksXG4gICAgICB0aXRsZTogJ0EgZHJhZ2dhYmxlIGFuZCByZXNpemFibGUgZXZlbnQnLFxuICAgIH1dO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoYWN0aW9uOiBzdHJpbmcsIGV2ZW50OiBDYWxlbmRhckV2ZW50KTogdm9pZCB7XG5cbiAgfVxuXG59XG5cbiJdfQ==
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@ionic/angular'), require('@angular/core'), require('@angular/common'), require('angular-calendar'), require('angular-calendar/date-adapters/date-fns')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-components', ['exports', '@angular/forms', '@ionic/angular', '@angular/core', '@angular/common', 'angular-calendar', 'angular-calendar/date-adapters/date-fns'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-components'] = {}),global.ng.forms,global['@ionic/angular'],global.ng.core,global.ng.common,global['angular-calendar'],global['angular-calendar/date-adapters/date-fns']));
}(this, (function (exports,forms,angular,core,common,angularCalendar,dateFns) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomDateFormatter = /** @class */ (function (_super) {
        __extends(CustomDateFormatter, _super);
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
                return new common.DatePipe(locale).transform(date, 'EEE', locale);
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
                return new common.DatePipe(locale).transform(date, 'MMMM y', locale);
            };
        return CustomDateFormatter;
    }(angularCalendar.CalendarDateFormatter));
    var CalendarComponent = /** @class */ (function () {
        function CalendarComponent() {
            // Documentation: https://github.com/mattlewis92/angular-calendar
            this.CalendarView = angularCalendar.CalendarView;
            this.viewDate = new Date();
            this.events = [];
            this.activeDayIsOpen = false;
            this.weekStartsOn = 1;
            this.dayClicked = new core.EventEmitter();
            this.handleEvent = new core.EventEmitter();
        }
        /**
         * @param {?} __0
         * @return {?}
         */
        CalendarComponent.prototype.onDayClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var date = _a.date, events = _a.events;
                this.dayClicked.emit({ date: date, events: events });
            };
        /**
         * @param {?} action
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.onHandleEvent = /**
         * @param {?} action
         * @param {?} event
         * @return {?}
         */
            function (action, event) {
                this.handleEvent.emit({ action: action, event: event });
            };
        CalendarComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'mapfre-calendar',
                        template: "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button mwlCalendarPreviousView [view]=\"CalendarView.Month\" [(viewDate)]=\"viewDate\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>{{ viewDate | calendarDate:(CalendarView.Month + 'ViewTitle'): 'en' }}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button mwlCalendarToday [(viewDate)]=\"viewDate\">Today</ion-button>\n    <ion-button mwlCalendarNextView [view]=\"CalendarView.Month\" [(viewDate)]=\"viewDate\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [activeDayIsOpen]=\"activeDayIsOpen\"\n  [weekStartsOn]=\"weekStartsOn\"\n  (dayClicked)=\"onDayClicked($event.day)\"\n  (eventClicked)=\"onHandleEvent('Clicked', $event.event)\">\n</mwl-calendar-month-view>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        // Important to import '~angular-calendar/css/angular-calendar.css' in calendar.component.scss
                        providers: [
                            {
                                provide: angularCalendar.CalendarDateFormatter,
                                useClass: CustomDateFormatter
                            }
                        ],
                        styles: [".cal-month-view .cal-header{text-align:center;font-weight:bolder}.cal-month-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view .cal-days{border:1px solid;border-bottom:0}.cal-month-view .cal-cell-top{min-height:78px;flex:1}.cal-month-view .cal-cell-row{-js-display:flex;display:flex}.cal-month-view .cal-cell{float:left;flex:1;-js-display:flex;display:flex;flex-direction:column;align-items:stretch}.cal-month-view .cal-day-cell{min-height:100px}@media all and (-ms-high-contrast:none){.cal-month-view .cal-day-cell{display:block}}.cal-month-view .cal-day-cell:not(:last-child){border-right:1px solid #e1e1e1}.cal-month-view .cal-days .cal-cell-row{border-bottom:1px solid #e1e1e1}.cal-month-view .cal-day-badge{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;background-color:#b94a48;color:#fff}.cal-month-view .cal-day-number{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view .cal-events{flex:1;align-items:flex-end;margin:3px;line-height:10px;-js-display:flex;display:flex;flex-wrap:wrap}.cal-month-view .cal-day-cell.cal-in-month.cal-has-events{cursor:pointer}.cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.1;cursor:default}.cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:1.9em}.cal-month-view .cal-open-day-events .cal-event{position:relative;top:2px}.cal-month-view .cal-out-month .cal-day-badge,.cal-month-view .cal-out-month .cal-event{opacity:.3}.cal-month-view .cal-draggable{cursor:move}.cal-month-view .cal-drag-active *{pointer-events:none}.cal-month-view .cal-event-title{cursor:pointer}.cal-month-view .cal-event-title:hover{text-decoration:underline}.cal-month-view{background-color:#fff}.cal-month-view .cal-cell-row:hover{background-color:#fafafa}.cal-month-view .cal-cell-row .cal-cell:hover,.cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#ededed}.cal-month-view .cal-days{border-color:#e1e1e1}.cal-month-view .cal-event{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px;background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#8b0000}.cal-month-view .cal-day-cell.cal-today{background-color:#e8fde7}.cal-month-view .cal-day-cell.cal-drag-over{background-color:#e0e0e0!important}.cal-month-view .cal-open-day-events{padding:15px;color:#fff;background-color:#555;box-shadow:inset 0 0 15px 0 rgba(0,0,0,.5)}.cal-week-view *{box-sizing:border-box}.cal-week-view .cal-day-headers{-js-display:flex;display:flex;padding-left:70px;border:1px solid}.cal-week-view .cal-day-headers .cal-header{flex:1;text-align:center;padding:5px}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:1px solid}.cal-week-view .cal-day-headers .cal-header:first-child{border-left:1px solid}.cal-week-view .cal-day-headers span{font-weight:400;opacity:.5}.cal-week-view .cal-day-column{flex-grow:1;border-left:1px solid}.cal-week-view .cal-event{font-size:12px;border:1px solid}.cal-week-view .cal-time-label-column{width:70px;height:100%}.cal-week-view .cal-all-day-events{border:1px solid;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view .cal-all-day-events .cal-day-columns{height:100%;width:100%;-js-display:flex;display:flex;position:absolute;top:0;z-index:0}.cal-week-view .cal-all-day-events .cal-events-row{position:relative;height:31px;margin-left:70px}.cal-week-view .cal-all-day-events .cal-event-container{display:inline-block;position:absolute}.cal-week-view .cal-all-day-events .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-week-view .cal-all-day-events .cal-event{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:5px;border-bottom-right-radius:5px}.cal-week-view .cal-all-day-events .cal-time-label-column{-js-display:flex;display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view .cal-all-day-events .cal-resize-handle{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:0}.cal-week-view .cal-event,.cal-week-view .cal-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view .cal-drag-active{pointer-events:none;z-index:1}.cal-week-view .cal-drag-active *{pointer-events:none}.cal-week-view .cal-time-events{position:relative;border:1px solid;border-top:0;-js-display:flex;display:flex}.cal-week-view .cal-time-events .cal-day-columns{-js-display:flex;display:flex;flex-grow:1}.cal-week-view .cal-time-events .cal-day-column{position:relative}.cal-week-view .cal-time-events .cal-event-container{position:absolute;z-index:1}.cal-week-view .cal-time-events .cal-event{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view .cal-time-events .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-week-view .cal-hour-segment{position:relative}.cal-week-view .cal-hour-segment::after{content:'\\00a0'}.cal-week-view .cal-event-container:not(.cal-draggable){cursor:pointer}.cal-week-view .cal-draggable{cursor:move}.cal-week-view .cal-hour-segment,.cal-week-view mwl-calendar-week-view-hour-segment{display:block}.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-week-view .cal-time{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-week-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view{background-color:#fff}.cal-week-view .cal-day-headers{border-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-drag-over,.cal-week-view .cal-day-headers .cal-header:hover{background-color:#ededed}.cal-week-view .cal-day-column{border-left-color:#e1e1e1}.cal-week-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view .cal-all-day-events{border-color:#e1e1e1}.cal-week-view .cal-header.cal-today{background-color:#e8fde7}.cal-week-view .cal-header.cal-weekend span{color:#8b0000}.cal-week-view .cal-time-events{border-color:#e1e1e1}.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#ededed}.cal-week-view .cal-hour-odd{background-color:#fafafa}.cal-week-view .cal-drag-over .cal-hour-segment{background-color:#ededed}.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-day-view *{box-sizing:border-box}.cal-day-view .cal-hour-rows{width:100%;border:1px solid;overflow-x:auto;position:relative}.cal-day-view .cal-hour-segment,.cal-day-view mwl-calendar-day-view-hour-segment{display:block}.cal-day-view .cal-hour-segment::after{content:'\\00a0'}.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-day-view .cal-time{font-weight:700;width:70px;height:100%;-js-display:flex;display:flex;justify-content:center;align-items:center}.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-day-view .cal-drag-active .cal-hour-segment{pointer-events:none}.cal-day-view .cal-event-container{position:absolute;cursor:pointer}.cal-day-view .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-day-view .cal-event{padding:5px;font-size:12px;border:1px solid;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}.cal-day-view .cal-all-day-events>*{cursor:pointer}.cal-day-view .cal-draggable{cursor:move}.cal-day-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-day-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-day-view .cal-drag-active{z-index:1}.cal-day-view .cal-drag-active *{pointer-events:none}.cal-day-view .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-day-view .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-day-view{background-color:#fff}.cal-day-view .cal-hour-rows{border-color:#e1e1e1}.cal-day-view .cal-hour:nth-child(odd){background-color:#fafafa}.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-day-view .cal-drag-over .cal-hour-segment,.cal-day-view .cal-hour-segment:hover{background-color:#ededed}.cal-day-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-tooltip{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left{padding:0 5px;margin-left:-3px}.cal-tooltip-inner{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem;color:#fff;background-color:#000}.cal-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}"]
                    }] }
        ];
        /** @nocollapse */
        CalendarComponent.ctorParameters = function () { return []; };
        CalendarComponent.propDecorators = {
            viewDate: [{ type: core.Input }],
            events: [{ type: core.Input }],
            activeDayIsOpen: [{ type: core.Input }],
            weekStartsOn: [{ type: core.Input }],
            dayClicked: [{ type: core.Output }],
            handleEvent: [{ type: core.Output }]
        };
        return CalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = dateFns.adapterFactory;
    var MapfreCalendarModule = /** @class */ (function () {
        function MapfreCalendarModule() {
        }
        MapfreCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            angularCalendar.CalendarModule.forRoot({
                                provide: angularCalendar.DateAdapter,
                                useFactory: ɵ0
                            })
                        ],
                        declarations: [CalendarComponent],
                        exports: [CalendarComponent]
                    },] }
        ];
        return MapfreCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MapfreCalendarModule = MapfreCalendarModule;
    exports.ɵb = CalendarComponent;
    exports.ɵa = CustomDateFormatter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-components.umd.js.map
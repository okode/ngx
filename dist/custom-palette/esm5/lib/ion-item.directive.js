/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.componentCss = "\n    ion-item[custom-palette] ion-label {\n      z-index: 9999;\n      padding-left: 10px;\n      margin-left: 6px;\n      pointer-events: none;\n      color: gray !important;\n    }\n    ion-item[custom-palette] ion-label::first-line {\n      content: ' ';\n      position: absolute;\n      background: white;\n      box-shadow: 0px 0px 0px 10px white;\n    }\n    ion-item[custom-palette].item-has-value ion-label,\n    ion-item[custom-palette].item-has-focus ion-label {\n      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;\n    }\n    ion-item[custom-palette] ion-input input {\n      margin-left: 16px;\n      margin-top: -2px;\n    }\n    ion-item[custom-palette] ion-select {\n      padding-left: 16px;\n      margin-top: -2px;\n    }\n    html.md ion-item[custom-palette].item-label-floating ion-label {\n      margin-left: 6px;\n      margin-bottom: 3px;\n    }\n  ";
        this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native:after {\n      content: ' ';\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      bottom: -10px;\n      height: 54px;\n      width: calc(100% - 2px);\n      border: 1px solid #ddd;\n      margin-top: 20px;\n      margin-bottom: 10px;\n      border-radius: 3px;\n    }\n    .item-native .item-inner {\n      margin-bottom: 8px;\n      border: 0px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
        this.setComponentStyle();
    };
    /**
     * @private
     * @return {?}
     */
    IonItemDirective.prototype.getShadow = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    };
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    IonItemDirective.prototype.setShadowStyle = /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        if (shadow) {
            shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
        }
    };
    /**
     * @private
     * @return {?}
     */
    IonItemDirective.prototype.setComponentStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
        if (document.getElementById(tagId)) {
            return;
        }
        /** @type {?} */
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = tagId;
        style.appendChild(document.createTextNode(this.componentCss));
        document.head.appendChild(style);
    };
    IonItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[custom-palette]"
                },] }
    ];
    /** @nocollapse */
    IonItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonItemDirective;
}());
export { IonItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.componentCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBZ0VFLDBCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTNEMUIsaUJBQVksR0FBRyw4NEJBOEJ0QixDQUFDO1FBRU0sb0JBQWUsR0FBRyxnaEJBeUJ6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8seUNBQWM7Ozs7O0lBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLGVBQWUsYUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7Ozs7SUFFTyw0Q0FBaUI7Ozs7SUFBekI7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxrQkFBa0I7UUFDL0UsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUN6QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDakIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBSjJCLFVBQVU7O0lBNEZ0Qyx1QkFBQztDQUFBLEFBMUZELElBMEZDO1NBdkZZLGdCQUFnQjs7Ozs7O0lBRTNCLHdDQThCRTs7Ozs7SUFFRiwyQ0F5QkU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2N1c3RvbS1wYWxldHRlXWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRDc3MgPSBgXG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1sYWJlbCB7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1sYWJlbDo6Zmlyc3QtbGluZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgycHgpIHRyYW5zbGF0ZVgoMnB4KSBzY2FsZSguOCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1pbnB1dCBpbnB1dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tc2VsZWN0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuICAgIGh0bWwubWQgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0tbGFiZWwtZmxvYXRpbmcgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuICBgO1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZTphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGhlaWdodDogNTRweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUgLml0ZW0taW5uZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICAgIHRoaXMuc2V0Q29tcG9uZW50U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZShzaGFkb3cpIHtcbiAgICBpZiAoc2hhZG93KSB7IHNoYWRvdy5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3VzdG9tQ3NzfTwvc3R5bGU+YDsgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb21wb25lbnRTdHlsZSgpIHtcbiAgICBjb25zdCB0YWdJZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICsgJy1jb21wb25lbnQtc3R5bGUnO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCkpIHsgcmV0dXJuOyB9XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkID0gdGFnSWQ7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jb21wb25lbnRDc3MpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG59XG4iXX0=
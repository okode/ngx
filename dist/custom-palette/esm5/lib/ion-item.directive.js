/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
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
    IonItemDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBZ0NFLDBCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTNCMUIsb0JBQWUsR0FBRyxnaEJBeUJ6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8seUNBQWM7Ozs7O0lBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLGVBQWUsYUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKMkIsVUFBVTs7SUFpRHRDLHVCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E1Q1ksZ0JBQWdCOzs7Ozs7SUFFM0IsMkNBeUJFOzs7OztJQUVVLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtjdXN0b20tcGFsZXR0ZV1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZTphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGhlaWdodDogNTRweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUgLml0ZW0taW5uZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxufVxuIl19
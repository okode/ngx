/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .select-icon-inner {
      left: -5px;
      margin-top: -5px;
      border-top: 5px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setShadowStyle(this.getShadow());
    }
    /**
     * @private
     * @return {?}
     */
    getShadow() {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    }
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    setShadowStyle(shadow) {
        if (shadow) {
            shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`;
        }
    }
}
IonSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-select`
            },] }
];
/** @nocollapse */
IonSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2lvbi1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBYTdCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWDFCLG9CQUFlLEdBQUc7Ozs7Ozs7OztHQVN6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLGVBQWUsVUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQUoyQixVQUFVOzs7Ozs7O0lBT3BDLDZDQVNFOzs7OztJQUVVLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi1zZWxlY3RgXG59KVxuZXhwb3J0IGNsYXNzIElvblNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3BhY2l0eTogLjMzO1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2hhZG93U3R5bGUodGhpcy5nZXRTaGFkb3coKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoc2hhZG93KSB7XG4gICAgaWYgKHNoYWRvdykgeyBzaGFkb3cuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0N1c3RvbUNzc308L3N0eWxlPmA7IH1cbiAgfVxuXG59XG4iXX0=
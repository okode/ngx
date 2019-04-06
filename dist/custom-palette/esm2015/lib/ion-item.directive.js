/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .item-native {
      border: none;
      padding: 0px;
    }
    .item-native .item-inner {
      border: 0px;
      padding: 0px;
    }
    .item-highlight {
      display: none !important;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const inputSelector = 'ion-input, ion-select, ion-textarea, ion-datetime';
        /** @type {?} */
        const input = this.el.nativeElement.querySelector(inputSelector);
        if (input && this.el.nativeElement.querySelector('ion-label')) {
            this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        }
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
IonItemDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-item`
            },] }
];
/** @nocollapse */
IonItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFnQjNCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZDFCLG9CQUFlLEdBQUc7Ozs7Ozs7Ozs7OztHQVl6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTs7Y0FDQSxhQUFhLEdBQUcsbURBQW1EOztjQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxlQUFlLFVBQVUsQ0FBQztTQUFFO0lBQy9FLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQywyQ0FZRTs7Ozs7SUFFVSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlucHV0U2VsZWN0b3IgPSAnaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEsIGlvbi1kYXRldGltZSc7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dFNlbGVjdG9yKTtcbiAgICBpZiAoaW5wdXQgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgIH1cbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxufVxuIl19
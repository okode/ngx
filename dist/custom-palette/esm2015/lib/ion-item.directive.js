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
      min-height: 68px;
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
        const inputsFloatingLabel = this.el.nativeElement.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
        /** @type {?} */
        const inputsStaticLabel = this.el.nativeElement.querySelector('ion-checkbox, ion-toggle');
        if (inputsFloatingLabel) {
            if (this.el.nativeElement.querySelector('ion-label')) {
                this.el.nativeElement.setAttribute('custom-palette', 'floating-label');
                this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
            }
            this.setShadowStyle(this.getShadow());
        }
        else if (inputsStaticLabel) {
            if (this.el.nativeElement.querySelector('ion-label')) {
                this.el.nativeElement.setAttribute('custom-palette', 'static-label');
            }
            this.setShadowStyle(this.getShadow());
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFpQjNCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZjFCLG9CQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7R0FhekIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLFFBQVE7O2NBQ0EsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUM3RCxtREFBbUQsQ0FDcEQ7O2NBQ0ssaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUMzRCwwQkFBMEIsQ0FDM0I7UUFDRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdkY7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxpQkFBaUIsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxlQUFlLFVBQVUsQ0FBQztTQUFFO0lBQy9FLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQywyQ0FhRTs7Ozs7SUFFVSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWluLWhlaWdodDogNjhweDtcbiAgICB9XG4gICAgLml0ZW0taGlnaGxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBpbnB1dHNGbG9hdGluZ0xhYmVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEsIGlvbi1kYXRldGltZSdcbiAgICApO1xuICAgIGNvbnN0IGlucHV0c1N0YXRpY0xhYmVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW9uLWNoZWNrYm94LCBpb24tdG9nZ2xlJ1xuICAgICk7XG4gICAgaWYgKGlucHV0c0Zsb2F0aW5nTGFiZWwpIHtcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUnLCAnZmxvYXRpbmctbGFiZWwnKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U2hhZG93U3R5bGUodGhpcy5nZXRTaGFkb3coKSk7XG4gICAgfSBlbHNlIGlmIChpbnB1dHNTdGF0aWNMYWJlbCkge1xuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKSkge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZScsICdzdGF0aWMtbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U2hhZG93U3R5bGUodGhpcy5nZXRTaGFkb3coKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxufVxuIl19
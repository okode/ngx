/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCss = `
    :host(.ion-focused) .item-native {
      background: transparent;
    }
    .item-native {
      border: none;
      padding: 0px;
      background: transparent;
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
        this.floatingLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
        this.staticLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const e = this.el.nativeElement;
        /** @type {?} */
        const inputFloatingLabel = e.querySelector(this.floatingLabelSelector);
        /** @type {?} */
        const inputStaticLabel = e.querySelector(this.staticLabelSelector);
        /** @type {?} */
        const label = e.querySelector('ion-label');
        if (label && (inputFloatingLabel || inputStaticLabel)) {
            e.setAttribute('custom-palette', true);
            if (inputFloatingLabel) {
                e.setAttribute('custom-palette-style', 'floating-label');
                e.querySelector('ion-label').setAttribute('position', 'floating');
            }
            else {
                e.setAttribute('custom-palette-style', 'static-label');
            }
            // has icon?
            if (e.querySelector('ion-icon')) {
                e.classList.add('item-has-icon');
            }
            this.setShadowStyle();
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
     * @return {?}
     */
    setShadowStyle() {
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
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
    IonItemDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.floatingLabelSelector;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.staticLabelSelector;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXdCM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUF0QjFCLGNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQm5CLENBQUM7UUFFTSwwQkFBcUIsR0FBRywyREFBMkQsQ0FBQztRQUNwRix3QkFBbUIsR0FBRywyREFBMkQsQ0FBQztJQUVyRCxDQUFDOzs7O0lBRXRDLFFBQVE7O2NBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7Y0FDekIsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7O2NBQ2hFLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztjQUM1RCxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3JELENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN4RDtZQUNELFlBQVk7WUFDWixJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQztJQUNuRSxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBSjJCLFVBQVU7Ozs7Ozs7SUFPcEMscUNBaUJFOzs7OztJQUVGLGlEQUE0Rjs7Ozs7SUFDNUYsK0NBQTBGOzs7OztJQUU5RSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDc3MgPSBgXG4gICAgOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWluLWhlaWdodDogNjhweDtcbiAgICB9XG4gICAgLml0ZW0taGlnaGxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG5cbiAgcHJpdmF0ZSBmbG9hdGluZ0xhYmVsU2VsZWN0b3IgPSAnaW9uLWlucHV0LCBpb24tc2VsZWN0LCBzZWxlY3QsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lJztcbiAgcHJpdmF0ZSBzdGF0aWNMYWJlbFNlbGVjdG9yID0gJ2lvbi1pbnB1dCwgaW9uLXNlbGVjdCwgc2VsZWN0LCBpb24tdGV4dGFyZWEsIGlvbi1kYXRldGltZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0RmxvYXRpbmdMYWJlbCA9IGUucXVlcnlTZWxlY3Rvcih0aGlzLmZsb2F0aW5nTGFiZWxTZWxlY3Rvcik7XG4gICAgY29uc3QgaW5wdXRTdGF0aWNMYWJlbCA9IGUucXVlcnlTZWxlY3Rvcih0aGlzLnN0YXRpY0xhYmVsU2VsZWN0b3IpO1xuICAgIGNvbnN0IGxhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICBpZiAobGFiZWwgJiYgKGlucHV0RmxvYXRpbmdMYWJlbCB8fMKgaW5wdXRTdGF0aWNMYWJlbCkpIHtcbiAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZScsIHRydWUpO1xuICAgICAgaWYgKGlucHV0RmxvYXRpbmdMYWJlbCkge1xuICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUtc3R5bGUnLCAnZmxvYXRpbmctbGFiZWwnKTtcbiAgICAgICAgZS5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJ2Zsb2F0aW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUtc3R5bGUnLCAnc3RhdGljLWxhYmVsJyk7XG4gICAgICB9XG4gICAgICAvLyBoYXMgaWNvbj9cbiAgICAgIGlmIChlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJykpwqB7IGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1oYXMtaWNvbicpOyB9XG4gICAgICB0aGlzLnNldFNoYWRvd1N0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKCkge1xuICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0Nzc308L3N0eWxlPmA7XG4gIH1cblxufVxuIl19
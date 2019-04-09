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
        const e = this.el.nativeElement;
        /** @type {?} */
        const inputFloatingLabel = e.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
        /** @type {?} */
        const inputStaticLabel = e.querySelector('ion-checkbox, ion-toggle');
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
        this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWlCM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFmMUIsb0JBQWUsR0FBRzs7Ozs7Ozs7Ozs7OztHQWF6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTs7Y0FDQSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztjQUN6QixrQkFBa0IsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLG1EQUFtRCxDQUFDOztjQUN6RixnQkFBZ0IsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDOztjQUM5RCxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3JELENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN4RDtZQUNELFlBQVk7WUFDWixJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxlQUFlLFVBQVUsQ0FBQztJQUN6RSxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBSjJCLFVBQVU7Ozs7Ozs7SUFPcEMsMkNBYUU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dEZsb2F0aW5nTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhLCBpb24tZGF0ZXRpbWUnKTtcbiAgICBjb25zdCBpbnB1dFN0YXRpY0xhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24tY2hlY2tib3gsIGlvbi10b2dnbGUnKTtcbiAgICBjb25zdCBsYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgaWYgKGxhYmVsICYmIChpbnB1dEZsb2F0aW5nTGFiZWwgfHzCoGlucHV0U3RhdGljTGFiZWwpKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUnLCB0cnVlKTtcbiAgICAgIGlmIChpbnB1dEZsb2F0aW5nTGFiZWwpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ2Zsb2F0aW5nLWxhYmVsJyk7XG4gICAgICAgIGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ3N0YXRpYy1sYWJlbCcpO1xuICAgICAgfVxuICAgICAgLy8gaGFzIGljb24/XG4gICAgICBpZiAoZS5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpKcKgeyBlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taGFzLWljb24nKTsgfVxuICAgICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gO1xuICB9XG5cbn1cbiJdfQ==
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
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXFCM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFuQjFCLGNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQm5CLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxRQUFROztjQUNBLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O2NBQ3pCLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsbURBQW1ELENBQUM7O2NBQ3pGLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7O2NBQzlELEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsWUFBWTtZQUNaLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUFFO1lBQ3RFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDO0lBQ25FLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQyxxQ0FpQkU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3NzID0gYFxuICAgIDpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dEZsb2F0aW5nTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhLCBpb24tZGF0ZXRpbWUnKTtcbiAgICBjb25zdCBpbnB1dFN0YXRpY0xhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24tY2hlY2tib3gsIGlvbi10b2dnbGUnKTtcbiAgICBjb25zdCBsYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgaWYgKGxhYmVsICYmIChpbnB1dEZsb2F0aW5nTGFiZWwgfHzCoGlucHV0U3RhdGljTGFiZWwpKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUnLCB0cnVlKTtcbiAgICAgIGlmIChpbnB1dEZsb2F0aW5nTGFiZWwpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ2Zsb2F0aW5nLWxhYmVsJyk7XG4gICAgICAgIGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ3N0YXRpYy1sYWJlbCcpO1xuICAgICAgfVxuICAgICAgLy8gaGFzIGljb24/XG4gICAgICBpZiAoZS5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpKcKgeyBlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taGFzLWljb24nKTsgfVxuICAgICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDc3N9PC9zdHlsZT5gO1xuICB9XG5cbn1cbiJdfQ==
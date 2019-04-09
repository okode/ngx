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
    :host(.ion-focused) .item-native {
      background: transparent;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQW9CM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsQjFCLG9CQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQnpCLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxRQUFROztjQUNBLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O2NBQ3pCLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsbURBQW1ELENBQUM7O2NBQ3pGLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7O2NBQzlELEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsWUFBWTtZQUNaLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUFFO1lBQ3RFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLGVBQWUsVUFBVSxDQUFDO0lBQ3pFLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQywyQ0FnQkU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIDpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA2OHB4O1xuICAgIH1cbiAgICAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRGbG9hdGluZ0xhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24taW5wdXQsIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lJyk7XG4gICAgY29uc3QgaW5wdXRTdGF0aWNMYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWNoZWNrYm94LCBpb24tdG9nZ2xlJyk7XG4gICAgY29uc3QgbGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgIGlmIChsYWJlbCAmJiAoaW5wdXRGbG9hdGluZ0xhYmVsIHx8wqBpbnB1dFN0YXRpY0xhYmVsKSkge1xuICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlJywgdHJ1ZSk7XG4gICAgICBpZiAoaW5wdXRGbG9hdGluZ0xhYmVsKSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZS1zdHlsZScsICdmbG9hdGluZy1sYWJlbCcpO1xuICAgICAgICBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZS1zdHlsZScsICdzdGF0aWMtbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIC8vIGhhcyBpY29uP1xuICAgICAgaWYgKGUucXVlcnlTZWxlY3RvcignaW9uLWljb24nKSnCoHsgZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWhhcy1pY29uJyk7IH1cbiAgICAgIHRoaXMuc2V0U2hhZG93U3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoKSB7XG4gICAgdGhpcy5nZXRTaGFkb3coKS5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3VzdG9tQ3NzfTwvc3R5bGU+YDtcbiAgfVxuXG59XG4iXX0=
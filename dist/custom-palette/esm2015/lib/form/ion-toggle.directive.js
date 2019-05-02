/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class IonToggleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.enabledText = '';
        this.disabledText = '';
        this.shadowCss = `
    :host {
      width: 80px;
    }
    :host(.toggle-checked) .toggle-inner {
      -webkit-transform: translate3d(48px, 0, 0);
      transform: translate3d(48px, 0, 0);
    }
    :host .toggle-icon:after {
      line-height: 33px;
      color: white;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 13px;
      width: 50px;
      display: inline-block;
      text-align: center;
    }
    :host(.toggle-checked) .toggle-icon:after {}
    :host(:not(.toggle-checked)) .toggle-icon:after {
      position: absolute;
      margin-left: 28px;
      color: #ccc;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setShadowStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && (changes.enabledText || changes.disabledText)) {
            this.getShadow().innerHTML += `<style>
        :host(.toggle-checked) .toggle-icon:after { content: '${this.enabledText}'; }
        :host(:not(.toggle-checked)) .toggle-icon:after { content: '${this.disabledText}'; }
      </style>`;
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
IonToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-toggle[custom-palette-toggle][mode='ios']`
            },] }
];
/** @nocollapse */
IonToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonToggleDirective.propDecorators = {
    enabledText: [{ type: Input }],
    disabledText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IonToggleDirective.prototype.enabledText;
    /** @type {?} */
    IonToggleDirective.prototype.disabledText;
    /**
     * @type {?}
     * @private
     */
    IonToggleDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonToggleDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBK0I3QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTdCekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qm5CLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJO2dFQUM0QixJQUFJLENBQUMsV0FBVztzRUFDVixJQUFJLENBQUMsWUFBWTtlQUN4RSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQztJQUNuRSxDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQ0FBK0M7YUFDMUQ7Ozs7WUFKMkIsVUFBVTs7OzBCQU9uQyxLQUFLOzJCQUNMLEtBQUs7Ozs7SUFETix5Q0FBMEI7O0lBQzFCLDBDQUEyQjs7Ozs7SUFFM0IsdUNBd0JFOzs7OztJQUVVLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi10b2dnbGVbY3VzdG9tLXBhbGV0dGUtdG9nZ2xlXVttb2RlPSdpb3MnXWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGVuYWJsZWRUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkVGV4dCA9ICcnO1xuXG4gIHByaXZhdGUgc2hhZG93Q3NzID0gYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbiAgICA6aG9zdCgudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXIge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQ4cHgsIDAsIDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0OHB4LCAwLCAwKTtcbiAgICB9XG4gICAgOmhvc3QgLnRvZ2dsZS1pY29uOmFmdGVyIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgOmhvc3QoLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWljb246YWZ0ZXIge31cbiAgICA6aG9zdCg6bm90KC50b2dnbGUtY2hlY2tlZCkpIC50b2dnbGUtaWNvbjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICAgIGNvbG9yOiAjY2NjO1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2hhZG93U3R5bGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiAoY2hhbmdlcy5lbmFibGVkVGV4dCB8fCBjaGFuZ2VzLmRpc2FibGVkVGV4dCkpIHtcbiAgICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+XG4gICAgICAgIDpob3N0KC50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pY29uOmFmdGVyIHsgY29udGVudDogJyR7dGhpcy5lbmFibGVkVGV4dH0nOyB9XG4gICAgICAgIDpob3N0KDpub3QoLnRvZ2dsZS1jaGVja2VkKSkgLnRvZ2dsZS1pY29uOmFmdGVyIHsgY29udGVudDogJyR7dGhpcy5kaXNhYmxlZFRleHR9JzsgfVxuICAgICAgPC9zdHlsZT5gO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDc3N9PC9zdHlsZT5gO1xuICB9XG5cbn1cbiJdfQ==
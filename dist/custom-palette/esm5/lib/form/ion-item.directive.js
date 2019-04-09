/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    :host(.ion-focused) .item-native {\n      background: transparent;\n    }\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n      min-height: 68px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var e = this.el.nativeElement;
        /** @type {?} */
        var inputFloatingLabel = e.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
        /** @type {?} */
        var inputStaticLabel = e.querySelector('ion-checkbox, ion-toggle');
        /** @type {?} */
        var label = e.querySelector('ion-label');
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
     * @return {?}
     */
    IonItemDirective.prototype.setShadowStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.getShadow().innerHTML += "<style>" + this.shadowCustomCss + "</style>";
    };
    IonItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-item"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUF1QkUsMEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBbEIxQixvQkFBZSxHQUFHLGtVQWdCekIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLG1DQUFROzs7SUFBUjs7WUFDUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUN6QixrQkFBa0IsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLG1EQUFtRCxDQUFDOztZQUN6RixnQkFBZ0IsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDOztZQUM5RCxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3JELENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN4RDtZQUNELFlBQVk7WUFDWixJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7SUFFTyx5Q0FBYzs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksWUFBVSxJQUFJLENBQUMsZUFBZSxhQUFVLENBQUM7SUFDekUsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBSjJCLFVBQVU7O0lBc0R0Qyx1QkFBQztDQUFBLEFBcERELElBb0RDO1NBakRZLGdCQUFnQjs7Ozs7O0lBRTNCLDJDQWdCRTs7Ozs7SUFFVSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dEZsb2F0aW5nTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhLCBpb24tZGF0ZXRpbWUnKTtcbiAgICBjb25zdCBpbnB1dFN0YXRpY0xhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24tY2hlY2tib3gsIGlvbi10b2dnbGUnKTtcbiAgICBjb25zdCBsYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgaWYgKGxhYmVsICYmIChpbnB1dEZsb2F0aW5nTGFiZWwgfHzCoGlucHV0U3RhdGljTGFiZWwpKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUnLCB0cnVlKTtcbiAgICAgIGlmIChpbnB1dEZsb2F0aW5nTGFiZWwpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ2Zsb2F0aW5nLWxhYmVsJyk7XG4gICAgICAgIGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ3N0YXRpYy1sYWJlbCcpO1xuICAgICAgfVxuICAgICAgLy8gaGFzIGljb24/XG4gICAgICBpZiAoZS5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpKcKgeyBlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taGFzLWljb24nKTsgfVxuICAgICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gO1xuICB9XG5cbn1cbiJdfQ==
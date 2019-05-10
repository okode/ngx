/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.shadowCss = "\n    :host(.ion-focused) .item-native {\n      background: transparent;\n    }\n    .item-native {\n      border: none;\n      padding: 0px;\n      background: transparent;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n      min-height: 68px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
        this.floatingLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
        this.staticLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
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
        var inputFloatingLabel = e.querySelector(this.floatingLabelSelector);
        /** @type {?} */
        var inputStaticLabel = e.querySelector(this.staticLabelSelector);
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
        this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUEyQkUsMEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBdEIxQixjQUFTLEdBQUcsa1dBaUJuQixDQUFDO1FBRU0sMEJBQXFCLEdBQUcsMkRBQTJELENBQUM7UUFDcEYsd0JBQW1CLEdBQUcsMkRBQTJELENBQUM7SUFFckQsQ0FBQzs7OztJQUV0QyxtQ0FBUTs7O0lBQVI7O1lBQ1EsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7WUFDekIsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7O1lBQ2hFLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztZQUM1RCxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3JELENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN4RDtZQUNELFlBQVk7WUFDWixJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7SUFFTyx5Q0FBYzs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksWUFBVSxJQUFJLENBQUMsU0FBUyxhQUFVLENBQUM7SUFDbkUsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBSjJCLFVBQVU7O0lBMER0Qyx1QkFBQztDQUFBLEFBeERELElBd0RDO1NBckRZLGdCQUFnQjs7Ozs7O0lBRTNCLHFDQWlCRTs7Ozs7SUFFRixpREFBNEY7Ozs7O0lBQzVGLCtDQUEwRjs7Ozs7SUFFOUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3NzID0gYFxuICAgIDpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIHByaXZhdGUgZmxvYXRpbmdMYWJlbFNlbGVjdG9yID0gJ2lvbi1pbnB1dCwgaW9uLXNlbGVjdCwgc2VsZWN0LCBpb24tdGV4dGFyZWEsIGlvbi1kYXRldGltZSc7XG4gIHByaXZhdGUgc3RhdGljTGFiZWxTZWxlY3RvciA9ICdpb24taW5wdXQsIGlvbi1zZWxlY3QsIHNlbGVjdCwgaW9uLXRleHRhcmVhLCBpb24tZGF0ZXRpbWUnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dEZsb2F0aW5nTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IodGhpcy5mbG9hdGluZ0xhYmVsU2VsZWN0b3IpO1xuICAgIGNvbnN0IGlucHV0U3RhdGljTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGF0aWNMYWJlbFNlbGVjdG9yKTtcbiAgICBjb25zdCBsYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgaWYgKGxhYmVsICYmIChpbnB1dEZsb2F0aW5nTGFiZWwgfHzCoGlucHV0U3RhdGljTGFiZWwpKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUnLCB0cnVlKTtcbiAgICAgIGlmIChpbnB1dEZsb2F0aW5nTGFiZWwpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ2Zsb2F0aW5nLWxhYmVsJyk7XG4gICAgICAgIGUucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlLXN0eWxlJywgJ3N0YXRpYy1sYWJlbCcpO1xuICAgICAgfVxuICAgICAgLy8gaGFzIGljb24/XG4gICAgICBpZiAoZS5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpKcKgeyBlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taGFzLWljb24nKTsgfVxuICAgICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDc3N9PC9zdHlsZT5gO1xuICB9XG5cbn1cbiJdfQ==
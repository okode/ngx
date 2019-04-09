/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n      min-height: 68px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUFvQkUsMEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZjFCLG9CQUFlLEdBQUcsbVBBYXpCLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxtQ0FBUTs7O0lBQVI7O1lBQ1EsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7WUFDekIsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxtREFBbUQsQ0FBQzs7WUFDekYsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQzs7WUFDOUQsS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksS0FBSyxJQUFJLENBQUMsa0JBQWtCLElBQUksZ0JBQWdCLENBQUMsRUFBRTtZQUNyRCxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDeEQ7WUFDRCxZQUFZO1lBQ1osSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQUU7WUFDdEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8seUNBQWM7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLGVBQWUsYUFBVSxDQUFDO0lBQ3pFLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQUoyQixVQUFVOztJQW1EdEMsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTlDWSxnQkFBZ0I7Ozs7OztJQUUzQiwyQ0FhRTs7Ozs7SUFFVSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWluLWhlaWdodDogNjhweDtcbiAgICB9XG4gICAgLml0ZW0taGlnaGxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0RmxvYXRpbmdMYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWlucHV0LCBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWEsIGlvbi1kYXRldGltZScpO1xuICAgIGNvbnN0IGlucHV0U3RhdGljTGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1jaGVja2JveCwgaW9uLXRvZ2dsZScpO1xuICAgIGNvbnN0IGxhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICBpZiAobGFiZWwgJiYgKGlucHV0RmxvYXRpbmdMYWJlbCB8fMKgaW5wdXRTdGF0aWNMYWJlbCkpIHtcbiAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZScsIHRydWUpO1xuICAgICAgaWYgKGlucHV0RmxvYXRpbmdMYWJlbCkge1xuICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUtc3R5bGUnLCAnZmxvYXRpbmctbGFiZWwnKTtcbiAgICAgICAgZS5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJ2Zsb2F0aW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY3VzdG9tLXBhbGV0dGUtc3R5bGUnLCAnc3RhdGljLWxhYmVsJyk7XG4gICAgICB9XG4gICAgICAvLyBoYXMgaWNvbj9cbiAgICAgIGlmIChlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJykpwqB7IGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1oYXMtaWNvbicpOyB9XG4gICAgICB0aGlzLnNldFNoYWRvd1N0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKCkge1xuICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0N1c3RvbUNzc308L3N0eWxlPmA7XG4gIH1cblxufVxuIl19
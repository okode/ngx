/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonInputDirective = /** @class */ (function () {
    function IonInputDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    IonInputDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.input) {
            this.input = this.el.nativeElement.querySelector('input');
            if (this.input) {
                this.input.addEventListener('focus', (/**
                 * @return {?}
                 */
                function () { }));
            }
        }
    };
    IonInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-input"
                },] }
    ];
    /** @nocollapse */
    IonInputDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonInputDirective;
}());
export { IonInputDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonInputDirective.prototype.input;
    /**
     * @type {?}
     * @private
     */
    IonInputDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24taW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFeEU7SUFPRSwyQkFDVSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNyQixDQUFDOzs7O0lBRUosOENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87OztnQkFBRSxjQUFPLENBQUMsRUFBQyxDQUFDO2FBQ2hEO1NBQ0Y7SUFDSCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFKbUIsVUFBVTs7SUFzQjlCLHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FqQlksaUJBQWlCOzs7Ozs7SUFFNUIsa0NBQWM7Ozs7O0lBR1osK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi1pbnB1dGBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcblxuICBwcml2YXRlIGlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
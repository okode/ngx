/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
export class IonTextAreaDirective {
    /**
     * @param {?} el
     * @param {?} platform
     */
    constructor(el, platform) {
        this.el = el;
        this.platform = platform;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.input) {
            this.input = this.el.nativeElement.querySelector('textarea');
            if (this.input) {
                this.input.addEventListener('focus', (/**
                 * @return {?}
                 */
                () => this.fixScrollAndCaret()));
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    fixScrollAndCaret() {
        // workaroud to flix floating caret
        if (this.platform.is('ios')) {
            /** @type {?} */
            const val = this.el.nativeElement.value;
            this.el.nativeElement.value = val + '.';
            this.el.nativeElement.value = val;
        }
    }
}
IonTextAreaDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-textarea`
            },] }
];
/** @nocollapse */
IonTextAreaDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.input;
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRleHRhcmVhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tdGV4dGFyZWEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzFDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBSS9CLFlBQ1UsRUFBYyxFQUNkLFFBQWtCO1FBRGxCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7SUFFSixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsQ0FBQzthQUN0RTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSztZQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUxtQixVQUFVO1lBQ3JCLFFBQVE7Ozs7Ozs7SUFPZixxQ0FBYzs7Ozs7SUFHWixrQ0FBc0I7Ozs7O0lBQ3RCLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi10ZXh0YXJlYWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uVGV4dEFyZWFEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcblxuICBwcml2YXRlIGlucHV0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB0aGlzLmZpeFNjcm9sbEFuZENhcmV0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4U2Nyb2xsQW5kQ2FyZXQoKSB7XG4gICAgLy8gd29ya2Fyb3VkIHRvIGZsaXggZmxvYXRpbmcgY2FyZXRcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbCArICcuJztcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cblxufVxuIl19
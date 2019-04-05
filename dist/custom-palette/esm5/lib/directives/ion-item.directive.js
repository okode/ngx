/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.componentCss = "\n    ion-item[custom-palette] ion-label {\n      z-index: 9999;\n      padding-left: 10px;\n      margin-left: 6px;\n      pointer-events: none;\n      color: gray !important;\n    }\n    ion-item[custom-palette] ion-label::first-line {\n      content: ' ';\n      position: absolute;\n      background: white;\n      box-shadow: 0px 0px 0px 10px white;\n    }\n    ion-item[custom-palette].item-has-value ion-label,\n    ion-item[custom-palette].item-has-focus ion-label {\n      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;\n    }\n    ion-item[custom-palette] ion-input input {\n      margin-left: 16px;\n      margin-top: -2px;\n    }\n    ion-item[custom-palette] ion-select {\n      padding-left: 16px;\n      margin-top: -2px;\n    }\n    html.md ion-item[custom-palette].item-label-floating ion-label {\n      margin-left: 6px;\n      margin-bottom: 3px;\n    }\n  ";
        this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native:after {\n      content: ' ';\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      bottom: -10px;\n      height: 54px;\n      width: calc(100% - 2px);\n      border: 1px solid #ddd;\n      margin-top: 20px;\n      margin-bottom: 10px;\n      border-radius: 3px;\n    }\n    .item-native .item-inner {\n      margin-bottom: 8px;\n      border: 0px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
        this.setComponentStyle();
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
     * @param {?} shadow
     * @return {?}
     */
    IonItemDirective.prototype.setShadowStyle = /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        if (shadow) {
            shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
        }
    };
    /**
     * @private
     * @return {?}
     */
    IonItemDirective.prototype.setComponentStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
        if (document.getElementById(tagId)) {
            return;
        }
        /** @type {?} */
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = tagId;
        style.appendChild(document.createTextNode(this.componentCss));
        document.head.appendChild(style);
    };
    IonItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-item[custom-palette]"
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
    IonItemDirective.prototype.componentCss;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUFnRUUsMEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBM0QxQixpQkFBWSxHQUFHLDg0QkE4QnRCLENBQUM7UUFFTSxvQkFBZSxHQUFHLGdoQkF5QnpCLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sb0NBQVM7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7Ozs7SUFFTyx5Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksWUFBVSxJQUFJLENBQUMsZUFBZSxhQUFVLENBQUM7U0FBRTtJQUMvRSxDQUFDOzs7OztJQUVPLDRDQUFpQjs7OztJQUF6Qjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLGtCQUFrQjtRQUMvRSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1lBQ3pDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUN4QixLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNqQixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBeEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQzs7OztnQkFKMkIsVUFBVTs7SUE0RnRDLHVCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0F2RlksZ0JBQWdCOzs7Ozs7SUFFM0Isd0NBOEJFOzs7OztJQUVGLDJDQXlCRTs7Ozs7SUFFVSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgY29tcG9uZW50Q3NzID0gYFxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tbGFiZWwge1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tbGFiZWw6OmZpcnN0LWxpbmUge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxMHB4IHdoaXRlO1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1oYXMtdmFsdWUgaW9uLWxhYmVsLFxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWhhcy1mb2N1cyBpb24tbGFiZWwge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMnB4KSB0cmFuc2xhdGVYKDJweCkgc2NhbGUoLjgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24taW5wdXQgaW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLXNlbGVjdCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIH1cbiAgICBodG1sLm1kIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWxhYmVsLWZsb2F0aW5nIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbiAgYDtcblxuICBwcml2YXRlIHNoYWRvd0N1c3RvbUNzcyA9IGBcbiAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmU6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJ2Zsb2F0aW5nJyk7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSh0aGlzLmdldFNoYWRvdygpKTtcbiAgICB0aGlzLnNldENvbXBvbmVudFN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoc2hhZG93KSB7XG4gICAgaWYgKHNoYWRvdykgeyBzaGFkb3cuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0N1c3RvbUNzc308L3N0eWxlPmA7IH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29tcG9uZW50U3R5bGUoKSB7XG4gICAgY29uc3QgdGFnSWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSArICctY29tcG9uZW50LXN0eWxlJztcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnSWQpKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCA9IHRhZ0lkO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY29tcG9uZW50Q3NzKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxufVxuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBZ0VFLDBCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTNEMUIsaUJBQVksR0FBRyw4NEJBOEJ0QixDQUFDO1FBRU0sb0JBQWUsR0FBRyxnaEJBeUJ6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLG9DQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8seUNBQWM7Ozs7O0lBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLGVBQWUsYUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7Ozs7SUFFTyw0Q0FBaUI7Ozs7SUFBekI7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxrQkFBa0I7UUFDL0UsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUN6QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDakIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7Ozs7Z0JBSjJCLFVBQVU7O0lBNEZ0Qyx1QkFBQztDQUFBLEFBMUZELElBMEZDO1NBdkZZLGdCQUFnQjs7Ozs7O0lBRTNCLHdDQThCRTs7Ozs7SUFFRiwyQ0F5QkU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdYFxufSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGNvbXBvbmVudENzcyA9IGBcbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWxhYmVsIHtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWxhYmVsOjpmaXJzdC1saW5lIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTBweCB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDJweCkgdHJhbnNsYXRlWCgycHgpIHNjYWxlKC44KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWlucHV0IGlucHV0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1zZWxlY3Qge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICB9XG4gICAgaHRtbC5tZCBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1sYWJlbC1mbG9hdGluZyBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gIGA7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBib3R0b206IC0xMHB4O1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICB9XG4gICAgLml0ZW0taGlnaGxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgIHRoaXMuc2V0U2hhZG93U3R5bGUodGhpcy5nZXRTaGFkb3coKSk7XG4gICAgdGhpcy5zZXRDb21wb25lbnRTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxuICBwcml2YXRlIHNldENvbXBvbmVudFN0eWxlKCkge1xuICAgIGNvbnN0IHRhZ0lkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWNvbXBvbmVudC1zdHlsZSc7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ0lkKSkgeyByZXR1cm47IH1cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgPSB0YWdJZDtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNvbXBvbmVudENzcykpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbn1cbiJdfQ==
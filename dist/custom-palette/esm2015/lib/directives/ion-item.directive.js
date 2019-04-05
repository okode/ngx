/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.componentCss = `
    ion-item[custom-palette] ion-label {
      z-index: 9999;
      padding-left: 10px;
      margin-left: 6px;
      pointer-events: none;
      color: gray !important;
    }
    ion-item[custom-palette] ion-label::first-line {
      content: ' ';
      position: absolute;
      background: white;
      box-shadow: 0px 0px 0px 10px white;
    }
    ion-item[custom-palette].item-has-value ion-label,
    ion-item[custom-palette].item-has-focus ion-label {
      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;
    }
    ion-item[custom-palette] ion-input input {
      margin-left: 16px;
      margin-top: -2px;
    }
    ion-item[custom-palette] ion-select {
      padding-left: 16px;
      margin-top: -2px;
    }
    html.md ion-item[custom-palette].item-label-floating ion-label {
      margin-left: 6px;
      margin-bottom: 3px;
    }
  `;
        this.shadowCustomCss = `
    .item-native {
      border: none;
      padding: 0px;
    }
    .item-native:after {
      content: ' ';
      position: absolute;
      z-index: 1;
      left: 0px;
      bottom: -10px;
      height: 54px;
      width: calc(100% - 2px);
      border: 1px solid #ddd;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 3px;
    }
    .item-native .item-inner {
      margin-bottom: 8px;
      border: 0px;
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
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
        this.setComponentStyle();
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
     * @param {?} shadow
     * @return {?}
     */
    setShadowStyle(shadow) {
        if (shadow) {
            shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setComponentStyle() {
        /** @type {?} */
        const tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
        if (document.getElementById(tagId)) {
            return;
        }
        /** @type {?} */
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = tagId;
        style.appendChild(document.createTextNode(this.componentCss));
        document.head.appendChild(style);
    }
}
IonItemDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-item[custom-palette]`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQTZEM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUEzRDFCLGlCQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCdEIsQ0FBQztRQUVNLG9CQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QnpCLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBTTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksVUFBVSxJQUFJLENBQUMsZUFBZSxVQUFVLENBQUM7U0FBRTtJQUMvRSxDQUFDOzs7OztJQUVPLGlCQUFpQjs7Y0FDakIsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxrQkFBa0I7UUFDL0UsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFOztjQUN6QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDakIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQXhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQzs7OztZQUoyQixVQUFVOzs7Ozs7O0lBT3BDLHdDQThCRTs7Ozs7SUFFRiwyQ0F5QkU7Ozs7O0lBRVUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdYFxufSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGNvbXBvbmVudENzcyA9IGBcbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWxhYmVsIHtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWxhYmVsOjpmaXJzdC1saW5lIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMTBweCB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0taGFzLXZhbHVlIGlvbi1sYWJlbCxcbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1oYXMtZm9jdXMgaW9uLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDJweCkgdHJhbnNsYXRlWCgycHgpIHNjYWxlKC44KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLWlucHV0IGlucHV0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1zZWxlY3Qge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICB9XG4gICAgaHRtbC5tZCBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1sYWJlbC1mbG9hdGluZyBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gIGA7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDdXN0b21Dc3MgPSBgXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBib3R0b206IC0xMHB4O1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZSAuaXRlbS1pbm5lciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICB9XG4gICAgLml0ZW0taGlnaGxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJykuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICdmbG9hdGluZycpO1xuICAgIHRoaXMuc2V0U2hhZG93U3R5bGUodGhpcy5nZXRTaGFkb3coKSk7XG4gICAgdGhpcy5zZXRDb21wb25lbnRTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxuICBwcml2YXRlIHNldENvbXBvbmVudFN0eWxlKCkge1xuICAgIGNvbnN0IHRhZ0lkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWNvbXBvbmVudC1zdHlsZSc7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ0lkKSkgeyByZXR1cm47IH1cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgPSB0YWdJZDtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNvbXBvbmVudENzcykpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbn1cbiJdfQ==
(self.webpackChunkauth_app=self.webpackChunkauth_app||[]).push([[682],{682:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AuthModule:()=>Tt});var r=n(583),i=n(639),s=n(402),o=n(574),a=n(796),l=n(2),u=n(555);function h(t,e){return new o.y(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let o=0,a=0;for(let l=0;l<r;l++){const u=(0,s.D)(t[l]);let h=!1;n.add(u.subscribe({next:t=>{h||(h=!0,a++),i[l]=t},error:t=>n.error(t),complete:()=>{o++,o!==r&&h||(a===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}let c=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t}),t})(),d=(()=>{class t extends c{}return t.\u0275fac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.\u0275dir=i.lG2({type:t,features:[i.qOj]}),t})();const p=new i.OlP("NgValueAccessor"),g={provide:p,useExisting:(0,i.Gpc)(()=>_),multi:!0},m=new i.OlP("CompositionEventMode");let _=(()=>{class t extends c{constructor(t,e,n){super(t,e),this._compositionMode=n,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=(0,r.q)()?(0,r.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(m,8))},t.\u0275dir=i.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&i.NdJ("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[i._Bn([g]),i.qOj]}),t})();function f(t){return null==t||0===t.length}function y(t){return null!=t&&"number"==typeof t.length}const v=new i.OlP("NgValidators"),C=new i.OlP("NgAsyncValidators"),V=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class A{static min(t){return function(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return function(t){return f(t.value)?{required:!0}:null}(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return f(t.value)||V.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>f(e.value)||!y(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>y(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return b;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(f(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}(t)}static nullValidator(t){return null}static compose(t){return T(t)}static composeAsync(t){return D(t)}}function b(t){return null}function w(t){return null!=t}function E(t){const e=(0,i.QGY)(t)?(0,s.D)(t):t;return(0,i.CqO)(e),e}function O(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function S(t,e){return e.map(e=>e(t))}function Z(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function T(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return O(S(t,e))}}function k(t){return null!=t?T(Z(t)):null}function D(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if((0,a.k)(e))return h(e,null);if((0,u.K)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&(0,a.k)(t[0])?t[0]:t,null).pipe((0,l.U)(t=>e(...t)))}return h(t,null)}(S(t,e).map(E)).pipe((0,l.U)(O))}}function F(t){return null!=t?D(Z(t)):null}function U(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function P(t){return t._rawValidators}function q(t){return t._rawAsyncValidators}let x=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=k(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=F(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t}),t})(),j=(()=>{class t extends x{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.\u0275dir=i.lG2({type:t,features:[i.qOj]}),t})();class M extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class N{constructor(t){this._cd=t}is(t){var e,n,r;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(r=null===(n=this._cd)||void 0===n?void 0:n.control)||void 0===r?void 0:r[t])}}let G=(()=>{class t extends N{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(M,2))},t.\u0275dir=i.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&i.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[i.qOj]}),t})(),B=(()=>{class t extends N{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(j,10))},t.\u0275dir=i.lG2({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,e){2&t&&i.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))("ng-submitted",e.is("submitted"))},features:[i.qOj]}),t})();function Y(t,e){z(t,e),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&R(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&R(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function I(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),J(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function z(t,e){const n=P(t);null!==e.validator?t.setValidators(U(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const r=q(t);null!==e.asyncValidator?t.setAsyncValidators(U(r,e.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const i=()=>t.updateValueAndValidity();L(e._rawValidators,i),L(e._rawAsyncValidators,i)}function J(t,e){let n=!1;if(null!==t){if(null!==e.validator){const r=P(t);if(Array.isArray(r)&&r.length>0){const i=r.filter(t=>t!==e.validator);i.length!==r.length&&(n=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const r=q(t);if(Array.isArray(r)&&r.length>0){const i=r.filter(t=>t!==e.asyncValidator);i.length!==r.length&&(n=!0,t.setAsyncValidators(i))}}}const r=()=>{};return L(e._rawValidators,r),L(e._rawAsyncValidators,r),n}function R(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function $(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Q="VALID",W="INVALID",H="PENDING",X="DISABLED";function K(t){return(rt(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?k(t):t||null}function et(t,e){return(rt(e)?e.asyncValidators:t)||null}function nt(t){return Array.isArray(t)?F(t):t||null}function rt(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class it{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=tt(this._rawValidators),this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Q}get invalid(){return this.status===W}get pending(){return this.status==H}get disabled(){return this.status===X}get enabled(){return this.status!==X}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=tt(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=nt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=H,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=X,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Q,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==Q&&this.status!==H||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?X:Q}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=H,this._hasOwnPendingAsyncValidator=!0;const e=E(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof ot?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof at&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?X:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(H)?H:this._anyControlsHaveStatus(W)?W:Q}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){rt(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class st extends it{constructor(t=null,e,n){super(K(e),et(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){$(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){$(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class ot extends it{constructor(t,e,n){super(K(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof st?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class at extends it{constructor(t,e,n){super(K(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof st?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})();const ht=new i.OlP("NgModelWithFormControlWarning"),ct={provide:j,useExisting:(0,i.Gpc)(()=>dt)};let dt=(()=>{class t extends j{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(J(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return Y(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){I(t.control||null,t,!1),$(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(I(e||null,t),n instanceof st&&(Y(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);(function(t,e){z(t,e)})(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return J(t,e)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){z(this.form,this),this._oldForm&&J(this._oldForm,this)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(v,10),i.Y36(C,10))},t.\u0275dir=i.lG2({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&i.NdJ("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([ct]),i.qOj,i.TTD]}),t})();const pt={provide:M,useExisting:(0,i.Gpc)(()=>gt)};let gt=(()=>{class t extends M{constructor(t,e,n,r,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,r,i;return Array.isArray(e),e.forEach(t=>{t.constructor===_?n=t:Object.getPrototypeOf(t.constructor)===d?r=t:i=t}),i||r||n||null}(0,r)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(j,13),i.Y36(v,10),i.Y36(C,10),i.Y36(p,10),i.Y36(ht,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([pt]),i.qOj,i.TTD]}),t._ngModelWarningSentOnce=!1,t})(),mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[ut]]}),t})(),_t=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ht,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[mt]}),t})(),ft=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r,i=null,s=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(i=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,r=null!=e.updateOn?e.updateOn:void 0):(i=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new ot(n,{asyncValidators:s,updateOn:r,validators:i})}control(t,e,n){return new st(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new at(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof st||t instanceof ot||t instanceof at?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=(0,i.Yz7)({factory:function(){return new t},token:t,providedIn:_t}),t})();var yt=n(663),vt=n(259),Ct=n.n(vt),Vt=n(608);let At=(()=>{class t{constructor(t,e,n){this.formBuilder=t,this.router=e,this.authService=n,this.loginForm=this.formBuilder.group({email:["testuser@gmail.com",[A.required,A.email]],password:["testuser123456",[A.required]]})}ngOnInit(){}login(){this.authService.login(this.loginForm.value).subscribe(t=>{!0===t?this.router.navigateByUrl("/dashboard"):Ct().fire("Something went wrong",`${t}`,"error")})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(ft),i.Y36(yt.F0),i.Y36(Vt.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-login"]],decls:24,vars:1,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["formControlName","email","type","email","name","email","placeholder","type an email",1,"input100"],[1,"focus-input100"],[1,"wrap-input100"],["formControlName","password","type","password","name","password","placeholder","type a password",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],[1,"login100-form-btn"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/register",1,"txt2"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(){return e.login()}),i.TgZ(1,"span",1),i._uU(2," Login "),i.qZA(),i.TgZ(3,"div",2),i.TgZ(4,"span",3),i._uU(5,"Email"),i.qZA(),i._UZ(6,"input",4),i._UZ(7,"span",5),i.qZA(),i.TgZ(8,"div",6),i.TgZ(9,"span",3),i._uU(10,"Password"),i.qZA(),i._UZ(11,"input",7),i._UZ(12,"span",5),i.qZA(),i._UZ(13,"div",8),i.TgZ(14,"div",9),i.TgZ(15,"div",10),i._UZ(16,"div",11),i.TgZ(17,"button",12),i._uU(18," Login "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(19,"div",13),i.TgZ(20,"span",14),i._uU(21," If you don't have an account click bellow to sign up "),i.qZA(),i.TgZ(22,"a",15),i._uU(23," Sign up here "),i.qZA(),i.qZA(),i.qZA()),2&t&&i.Q6J("formGroup",e.loginForm)},directives:[lt,B,dt,_,G,gt,yt.yS],encapsulation:2}),t})();function bt(t,e){1&t&&(i.TgZ(0,"span",18),i._uU(1,"name should be at least 3 chars long"),i.qZA())}function wt(t,e){1&t&&(i.TgZ(0,"span",18),i._uU(1,"This field should be a valid email"),i.qZA())}function Et(t,e){1&t&&(i.TgZ(0,"span",18),i._uU(1,"Password should be at least 6 chars long"),i.qZA())}let Ot=(()=>{class t{constructor(t,e,n){this.formBuilder=t,this.router=e,this.authService=n,this.registerForm=this.formBuilder.group({name:["",[A.required,A.minLength(3)]],email:["",[A.required,A.email]],password:["",[A.required,A.minLength(6)]]})}ngOnInit(){}register(){if(!this.registerForm.valid)return console.log(this.registerForm.controls.name.errors),console.log(this.registerForm.controls.email.errors),void console.log(this.registerForm.controls.password.errors);this.authService.register(this.registerForm.value).subscribe(t=>{!0===t?this.router.navigateByUrl("/dashboard"):Ct().fire("Something went wrong",`${t}`,"error")})}isValidField(t){return!1}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(ft),i.Y36(yt.F0),i.Y36(Vt.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-register"]],decls:32,vars:4,consts:[["autocomplete","off",1,"login100-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["formControlName","name","type","text","formControlName","name","name","name","placeholder","type a name",1,"input100"],[1,"focus-input100"],["class","error-text",4,"ngIf"],["formControlName","email","type","email","name","email","placeholder","type an email",1,"input100"],[1,"wrap-input100"],["formControlName","password","type","password","name","password","placeholder","type a password",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],[1,"login100-form-btn"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/login",1,"txt2"],[1,"error-text"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(){return e.register()}),i.TgZ(1,"span",1),i._uU(2," Register "),i.qZA(),i.TgZ(3,"div",2),i.TgZ(4,"span",3),i._uU(5,"Name"),i.qZA(),i._UZ(6,"input",4),i._UZ(7,"span",5),i.qZA(),i.YNc(8,bt,2,0,"span",6),i.TgZ(9,"div",2),i.TgZ(10,"span",3),i._uU(11,"Email"),i.qZA(),i._UZ(12,"input",7),i._UZ(13,"span",5),i.qZA(),i.YNc(14,wt,2,0,"span",6),i.TgZ(15,"div",8),i.TgZ(16,"span",3),i._uU(17,"Password"),i.qZA(),i._UZ(18,"input",9),i._UZ(19,"span",5),i.qZA(),i.YNc(20,Et,2,0,"span",6),i._UZ(21,"div",10),i.TgZ(22,"div",11),i.TgZ(23,"div",12),i._UZ(24,"div",13),i.TgZ(25,"button",14),i._uU(26," register "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(27,"div",15),i.TgZ(28,"span",16),i._uU(29," \xbfDo you have an account? "),i.qZA(),i.TgZ(30,"a",17),i._uU(31," Log in here "),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.registerForm),i.xp6(8),i.Q6J("ngIf",e.isValidField("name")),i.xp6(6),i.Q6J("ngIf",e.isValidField("email")),i.xp6(6),i.Q6J("ngIf",e.isValidField("password")))},directives:[lt,B,dt,_,G,gt,r.O5,yt.yS],encapsulation:2}),t})();const St=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-main"]],decls:4,vars:0,consts:[[1,"limiter"],[1,"container-login100",2,"background-image","url('../../../../assets/images/bg-01.jpg')"],[1,"wrap-login100","p-l-55","p-r-55","p-t-65","p-b-54"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i._UZ(3,"router-outlet"),i.qZA(),i.qZA(),i.qZA())},directives:[yt.lC],encapsulation:2}),t})(),children:[{path:"login",component:At},{path:"register",component:Ot},{path:"**",redirectTo:"login"}]}];let Zt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[yt.Bz.forChild(St)],yt.Bz]}),t})(),Tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,Zt,_t]]}),t})()}}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-favourite-add-user-favourite-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-add/user-favourite-add.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-add/user-favourite-add.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\n\n<div class=\"content\">\n    <header class=\"page-header\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto p-3\">\n                <h1>{{ isEditing ? 'Update' : 'Create' }} Favourite</h1>\n            </div>\n        </div>\n    </header>\n    <section class=\"page-content container-fluid\">\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\n            <div class=\"loader\"></div>\n        </div>\n        <div class=\"card card-tabs strache-card\">\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\n                <div class=\"card-body p-25 p-l-30 p-r-30\">\n                    <div class=\"d-flex\">\n                        <div class=\"left-form-content m-l-20 m-r-40\">\n                            <div class=\"clearfix\">\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                    <img [src]=\"productImage ? productImage : 'assets/images/demo.png'\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row flex\">\n                            <div class=\"col-xl-12 \" style=\"margin-left:25px ;\">\n                                <div class=\"form-row\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Product</label>\n                                            <ng-select [formControl]=\"addForm.controls['product_id']\"\n                                                [items]=\"productList\" bindLabel=\"label\" bindValue=\"value\"\n                                                placeholder=\"-- Select a Product --\">\n                                            </ng-select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\"> Is Favourite  &nbsp;&nbsp;</label>\n                                            <label class=\"switch\">\n                                                <input type=\"checkbox\" [formControl]=\"addForm.controls['is_favourite']\">\n                                                <span class=\"slider round\"></span>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer text-right\">\n                    <div class=\"btn-list\">\n                        <button type=\"button\" [routerLink]=\"['/favourite']\"\n                            class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\n                            <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\n                            Success</button>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "./src/app/shared/directive/number.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directive/number.directive.ts ***!
  \******************************************************/
/*! exports provided: NumberDirective, FloatNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function() { return FloatNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 ||
            (e.keyCode === 110) || (e.keyCode === 190))) {
            e.preventDefault();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], NumberDirective.prototype, "onKeyDown", null);
NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[number]'
    })
], NumberDirective);

let FloatNumberDirective = class FloatNumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
};
FloatNumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], FloatNumberDirective.prototype, "onKeyDown", null);
FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[floatNumber]'
    })
], FloatNumberDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/number.directive */ "./src/app/shared/directive/number.directive.ts");




let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/user-favourite/user-favourite-add/user-favourite-add.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user-favourite/user-favourite-add/user-favourite-add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserFavouriteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFavouriteAddComponent", function() { return UserFavouriteAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user-favourite.service */ "./src/app/service/user-favourite.service.ts");





let UserFavouriteAddComponent = class UserFavouriteAddComponent {
    constructor(router, activatedRoute, fb, userfavouriteservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.userfavouriteservice = userfavouriteservice;
        this.loadingState = false;
        this.productList = [];
        this.productImage = '';
        this.showLoader = false;
        this.formErrors = {
            product_id: null,
            apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
            this.editObject();
        }
        this.addForm = fb.group({
            product_id: [null],
            is_favourite: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
    }
    editObject() {
        this.loadingState = true;
        this.userfavouriteservice.getUserFavouriteById(this.editId).subscribe((response) => {
            this.loadingState = false;
            if (response.data) {
                this.addForm.patchValue({
                    product_id: response.data.product_id,
                    is_favourite: response.data.is_favourite
                });
            }
        }, (error) => {
            this.loadingState = false;
            this.router.navigateByUrl('/favourite');
        });
    }
    submitForm(formdata) {
        if (this.addForm.valid) {
            this.showLoader = true;
            if (this.isEditing) {
                this.userfavouriteservice.editUserFavourite(this.editId, formdata.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/favourite');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('product_id')) {
                                this.formErrors.product_id = obj.product_id;
                            }
                        });
                    }
                });
            }
            else {
                this.userfavouriteservice.addUserFavourite(formdata.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/favourite');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('product_id')) {
                                this.formErrors.product_id = obj.product_id;
                            }
                        });
                    }
                });
            }
        }
    }
};
UserFavouriteAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_4__["UserFavouriteService"] }
];
UserFavouriteAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-favourite-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-favourite-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-add/user-favourite-add.component.html")).default,
    })
], UserFavouriteAddComponent);



/***/ }),

/***/ "./src/app/user-favourite/user-favourite-add/user-favourite-add.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user-favourite/user-favourite-add/user-favourite-add.module.ts ***!
  \********************************************************************************/
/*! exports provided: UserFavouriteAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFavouriteAddModule", function() { return UserFavouriteAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_favourite_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-favourite-add.component */ "./src/app/user-favourite/user-favourite-add/user-favourite-add.component.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");










const routes = [
    {
        path: '',
        component: _user_favourite_add_component__WEBPACK_IMPORTED_MODULE_7__["UserFavouriteAddComponent"],
    }
];
let UserFavouriteAddModule = class UserFavouriteAddModule {
};
UserFavouriteAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_favourite_add_component__WEBPACK_IMPORTED_MODULE_7__["UserFavouriteAddComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__["LoderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]
    })
], UserFavouriteAddModule);



/***/ })

}]);
//# sourceMappingURL=user-favourite-add-user-favourite-add-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-company-add-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/add-company/add-company.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/add-company/add-company.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\r\n<div class=\"content\">\r\n    <header class=\"page-header\">\r\n        <div class=\"d-flex align-items-center\">\r\n            <div class=\"mr-auto p-3\">\r\n                <h1>{{ isEditing ? 'Update' : 'Create' }} Company</h1>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <section class=\"page-content container-fluid\">\r\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n        <div class=\"card card-tabs strache-card\">\r\n            <form [formGroup]=\"companyForm\" (ngSubmit)=\"submitForm()\" role=\"form\">\r\n                <div class=\"card-body p-l-30 p-r-30\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-8\">\r\n                            <h5 class=\"mb-4 mt-1 font-weight-600 text-dark\">Company Details</h5>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControl]=\"companyForm.controls['name']\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Email</label>\r\n                                        <input type=\"text\" class=\"form-control\" [formControl]=\"companyForm.controls['email']\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Phone No</label>\r\n                                        <div class=\"input-group\">\r\n                                            <input placeholder=\"Code\" style=\"flex: none !important;width: 70px;\" value=\"+91\" type=\"text\" class=\"form-control\" disabled>\r\n                                            <input number type=\"text\" numbersOnly class=\"form-control\" [formControl]=\"companyForm.controls['phone_number']\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Address</label>\r\n                                        <div class=\"input-group\">\r\n                                            <textarea class=\"form-control\" [formControl]=\"companyForm.controls['address']\" rows=\"2\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer text-right\">\r\n                    <div class=\"btn-list\">\r\n                        <button type=\"button\" [routerLink]=\"['/company']\" class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\r\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\r\n                            <i *ngIf=\"!showLoader\"class=\"fas fa-check\"></i>\r\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\r\n                            Success</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./src/app/company/add-company/add-company.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/add-company/add-company.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");








let AddCompanyComponent = class AddCompanyComponent {
    constructor(router, activatedRoute, fb, dataService, commonService, companyService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.dataService = dataService;
        this.commonService = commonService;
        this.companyService = companyService;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            email: null,
            name: null,
            phone_number: null,
            apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
            this.editObject();
        }
        this.companyForm = fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_common__WEBPACK_IMPORTED_MODULE_7__["validateEmailFormControl"]])],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)])],
            address: [''],
        });
    }
    ngOnInit() {
    }
    editObject() {
        this.loadingState = true;
        this.companyService.getCompanyById(this.editId, { admin: true }).subscribe((response) => {
            this.loadingState = false;
            if (response.data) {
                this.companyForm.patchValue({
                    email: response.data.email,
                    name: response.data.name,
                    phone_number: response.data.phone_number,
                    address: response.data.address,
                });
            }
        }, (error) => {
            this.loadingState = false;
            this.router.navigateByUrl('/company');
        });
    }
    submitForm() {
        if (this.companyForm.valid) {
            this.showLoader = true;
            const formData = {
                email: this.companyForm.value.email.toLowerCase(),
                phone_number: this.companyForm.value.phone_number,
                name: this.companyForm.value.name,
                address: this.companyForm.value.address,
            };
            if (this.isEditing) {
                this.companyService.editCompany(this.editId, formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/company');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('email')) {
                                this.formErrors.email = obj.email;
                            }
                            if (obj.hasOwnProperty('phone_number')) {
                                this.formErrors.phone_number = obj.phone_number;
                            }
                            if (!obj.hasOwnProperty('name') && !obj.hasOwnProperty('phone_number') && !obj.hasOwnProperty('email')) {
                                this.formErrors.apierror = obj;
                            }
                        });
                    }
                });
            }
            else {
                this.companyService.addCompany(formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/company');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('email')) {
                                this.formErrors.email = obj.email;
                            }
                            if (obj.hasOwnProperty('phone_number')) {
                                this.formErrors.phone_number = obj.phone_number;
                            }
                            if (!obj.hasOwnProperty('company_name') &&
                                !obj.hasOwnProperty('email') && !obj.hasOwnProperty('phone_number')) {
                                this.formErrors.apierror = obj;
                            }
                        });
                    }
                });
            }
        }
    }
};
AddCompanyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }
];
AddCompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-company',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/add-company/add-company.component.html")).default
    })
], AddCompanyComponent);



/***/ }),

/***/ "./src/app/company/add-company/add-company.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/company/add-company/add-company.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyModule", function() { return AddCompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company.component */ "./src/app/company/add-company/add-company.component.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");







// import { Ng2FlatpickrModule } from 'ng2-flatpickr';
// import { NgSelectModule } from '@ng-select/ng-select';


const routes = [
    {
        path: '',
        component: _add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"],
        data: { title: 'add_company' }
    }
];
let AddCompanyModule = class AddCompanyModule {
};
AddCompanyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__["LoderModule"]
        ]
    })
], AddCompanyModule);



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



/***/ })

}]);
//# sourceMappingURL=add-company-add-company-module-es2015.js.map
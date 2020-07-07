(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-add-category-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\r\n\r\n<div class=\"content\">\r\n    <header class=\"page-header\">\r\n        <div class=\"d-flex align-items-center\">\r\n            <div class=\"mr-auto p-3\">\r\n                <h1>{{ isEditing ? 'Update' : 'Create' }} Category</h1>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <section class=\"page-content container-fluid\">\r\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n        <div class=\"card card-tabs strache-card\">\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n                <div class=\"card-body p-25 p-l-30 p-r-30\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"left-form-content m-l-20 m-r-40\">\r\n                            <div class=\"clearfix\">\r\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                                    <div class=\"btn-file mt-3\">\r\n                                        <div class=\"thumbnail fileinput-new  rounded-circle\" style=\"width: 150px; height: 150px;\">\r\n                                            <img [src]=\"editImageUrl ? editImageUrl : 'assets/images/demo.png'\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <button class=\"fileinput-new btn btn-secondary btn-sm btn-file mt-3\"> Browse\r\n                                            Image </button>\r\n                                        <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\" file-model=\"myFile\">\r\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail  rounded-circle\" style=\"width: 150px; height: 150px;\"></div>\r\n                                    </div>\r\n                                    <div class=\"text-center\">\r\n                                        <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\" data-dismiss=\"fileinput\">Remove</a>\r\n                                    </div>\r\n                                    <div class=\"clearfix mt-3\">\r\n                                        <p class=\"upload-img-label text-muted font-size-12\">*Recommended Size:\r\n                                            <br>Minimum 250 * 250</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row flex\">\r\n                            <div class=\"col-xl-12 \" style=\"margin-left:25px ;\">\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" [formControl]=\"addForm.controls['name']\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer text-right\">\r\n                    <div class=\"btn-list\">\r\n                        <button type=\"button\" [routerLink]=\"['/category']\" class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\r\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\r\n                            <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\r\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\r\n                            Success</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./src/app/category/category-add/category-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");





let CategoryAddComponent = class CategoryAddComponent {
    constructor(router, activatedRoute, fb, categoryService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.categoryService = categoryService;
        this.loadingState = false;
        this.editImageUrl = null;
        this.showLoader = false;
        this.formErrors = {
            name: null,
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
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
    }
    editObject() {
        this.loadingState = true;
        this.categoryService.getCategoryById(this.editId).subscribe((response) => {
            this.loadingState = false;
            if (response.data) {
                this.editImageUrl = response.data.image,
                    this.addForm.patchValue({
                        name: response.data.name,
                    });
            }
        }, (error) => {
            this.loadingState = false;
            this.router.navigateByUrl('/category');
        });
    }
    fileChangeEvent(fileInput) {
        const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;
        if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
        }
        else {
            this.removeFile();
            this.selectedFile = fileInput.target.files[0];
        }
    }
    removeFile() {
        this.selectedFile = null;
    }
    submitForm(formdata) {
        if (this.addForm.valid) {
            this.showLoader = true;
            if (this.isEditing) {
                this.categoryService.editCategory(this.editId, formdata.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/category');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('name')) {
                                this.formErrors.name = obj.name;
                            }
                        });
                    }
                });
            }
            else {
                this.categoryService.addCategory(formdata.value).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/category');
                    }
                    else {
                        this.showLoader = false;
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('name')) {
                                this.formErrors.name = obj.name;
                            }
                        });
                    }
                });
            }
        }
    }
};
CategoryAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
CategoryAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html")).default
    })
], CategoryAddComponent);



/***/ }),

/***/ "./src/app/category/category-add/category-add.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/category/category-add/category-add.module.ts ***!
  \**************************************************************/
/*! exports provided: CategoryAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddModule", function() { return CategoryAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _category_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-add.component */ "./src/app/category/category-add/category-add.component.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");









const routes = [
    {
        path: '',
        component: _category_add_component__WEBPACK_IMPORTED_MODULE_7__["CategoryAddComponent"],
    }
];
let CategoryAddModule = class CategoryAddModule {
};
CategoryAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _category_add_component__WEBPACK_IMPORTED_MODULE_7__["CategoryAddComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_8__["LoderModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]
    })
], CategoryAddModule);



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
//# sourceMappingURL=category-add-category-add-module-es2015.js.map
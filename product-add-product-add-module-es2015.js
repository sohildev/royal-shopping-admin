(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-add-product-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-add/product-add.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-add/product-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\r\n<div class=\"content\">\r\n    <header class=\"page-header\">\r\n        <div class=\"d-flex align-items-center\">\r\n            <div class=\"mr-auto p-3\">\r\n                <h1>{{ isEditing ? 'Update' : 'Create' }} Product</h1>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <section class=\"page-content container-fluid\">\r\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n        <div class=\"card card-tabs strache-card\">\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n                <div class=\"card-body p-25 p-l-30 p-r-30\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"left-form-content m-l-20 m-r-40\">\r\n                            <div class=\"clearfix\">\r\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\r\n                                    <div class=\"btn-file mt-3\">\r\n                                        <div class=\"thumbnail fileinput-new  rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\">\r\n                                            <img [src]=\"editImageUrl ? editImageUrl : 'assets/images/demo.png'\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <button class=\"fileinput-new btn btn-secondary btn-sm btn-file mt-3\"> Browse\r\n                                            Image </button>\r\n                                        <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\"\r\n                                            type=\"file\" file-model=\"myFile\">\r\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail  rounded-circle\"\r\n                                            style=\"width: 150px; height: 150px;\"></div>\r\n                                    </div>\r\n                                    <div class=\"text-center\">\r\n                                        <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\r\n                                            data-dismiss=\"fileinput\">Remove</a>\r\n                                    </div>\r\n                                    <div class=\"clearfix mt-3\">\r\n                                        <p class=\"upload-img-label text-muted font-size-12\">*Recommended Size:\r\n                                            <br>Minimum 250 * 250</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row flex\">\r\n                            <div class=\"col-xl-12 \" style=\"margin-left:25px ;\">\r\n                                <div class=\"form-row mr-5\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Name</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [formControl]=\"addForm.controls['name']\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Price</label>\r\n                                            <input number type=\"text\" class=\"form-control\"\r\n                                                [formControl]=\"addForm.controls['price']\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-row mr-5\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Category</label>\r\n                                            <ng-select [formControl]=\"addForm.controls['category_id']\"\r\n                                                [items]=\"categoryList\" bindLabel=\"label\" bindValue=\"value\"\r\n                                                (change)=\"getBrandList(true)\" placeholder=\"-- Select a Category --\">\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Brand</label>\r\n                                            <ng-select [formControl]=\"addForm.controls['brand_id']\" [items]=\"brandList\"\r\n                                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"-- Select a Brand --\">\r\n                                            </ng-select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Product Information</label>\r\n                                            <div class=\"input-group\">\r\n                                                <textarea class=\"form-control\"\r\n                                                    [formControl]=\"addForm.controls['product_info']\"\r\n                                                    rows=\"3\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <label class=\"control-label\">Product Details</label>\r\n                                        <ngx-editor [formControl]=\"addForm.controls['product_detail']\">\r\n                                        </ngx-editor>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card-footer text-right\">\r\n                    <div class=\"btn-list\">\r\n                        <button type=\"button\" [routerLink]=\"['/product']\"\r\n                            class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\r\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\r\n                            <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\r\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\r\n                            Success</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <!-- <div class=\"col-sm-12\">\r\n\r\n                <label class=\"control-label\">Product Details</label>\r\n                <ngx-editor [ngModel]=\"doc\"></ngx-editor>\r\n            </div> -->\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/drop-down.service */ "./src/app/service/drop-down.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







let ProductAddComponent = class ProductAddComponent {
    constructor(router, activatedRoute, fb, location, dropdownService, productService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        this.dropdownService = dropdownService;
        this.productService = productService;
        this.loadingState = false;
        this.editImageUrl = null;
        this.showLoader = false;
        this.formErrors = {
            name: null,
            apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        this.brandList = [];
        this.categoryList = [];
        this.doc = {
            type: "doc",
            content: [
                {
                    type: "heading",
                    attrs: {
                        level: 3
                    },
                    content: [
                        {
                            type: "text",
                            text: "Hello"
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "This is editable text. You can focus it and start typing."
                        }
                    ]
                },
                {
                    type: "heading",
                    attrs: {
                        level: 3
                    },
                    content: [
                        {
                            type: "text",
                            text: "The code block is a code editor"
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "This editor has been wired up to render code blocks as instances of the "
                        },
                        {
                            type: "text",
                            marks: [
                                {
                                    type: "link",
                                    attrs: {
                                        href: "http://codemirror.net",
                                        title: null
                                    }
                                }
                            ],
                            text: "CodeMirror"
                        },
                        {
                            type: "text",
                            text: " code editor, which provides syntax highlighting, auto-indentation, and similar."
                        }
                    ]
                },
                {
                    type: "code_block",
                    content: [
                        {
                            type: "text",
                            text: "function max(a, b) {\n  return a > b ? a : b\n}"
                        }
                    ]
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."
                        }
                    ]
                }
            ]
        };
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
            this.editObject();
        }
        this.addForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            product_info: [null],
            product_detail: [this.doc],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            category_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.getCategoryList();
    }
    getCategoryList() {
        this.loadingState = true;
        this.dropdownService.getCategoryDrp().subscribe((res) => {
            this.loadingState = false;
            if (res.success) {
                this.categoryList = res.data ? res.data : [];
            }
        });
    }
    getBrandList(front) {
        this.loadingState = true;
        const params = {};
        if (this.addForm.value.category_id) {
            if (front) {
                this.addForm.patchValue({ brand_id: '' });
            }
            params.category_id = this.addForm.value.category_id;
        }
        this.dropdownService.getBrandDrp(params).subscribe((res) => {
            this.loadingState = false;
            if (res.success) {
                this.brandList = res.data ? res.data : [];
            }
        });
    }
    editObject() {
        this.loadingState = true;
        this.productService.getProductById(this.editId).subscribe((response) => {
            this.loadingState = false;
            if (response.data) {
                this.editImageUrl = response.data.image,
                    this.addForm.patchValue({
                        name: response.data.name,
                        price: response.data.price,
                        category_id: JSON.parse(response.data.category_id).value,
                        brand_id: JSON.parse(response.data.brand_id).value,
                        product_info: response.data.product_info,
                        product_detail: response.data.product_detail ? JSON.parse(response.data.product_detail) : ''
                    });
                this.getBrandList(false);
            }
        }, (error) => {
            this.loadingState = false;
            // this.router.navigateByUrl('/product');
            this.back();
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
        console.log(formdata.value.product_detail);
        console.log("formData", formdata.value);
        if (this.addForm.valid) {
            this.showLoader = true;
            const formData = new FormData();
            formData.append('name', formdata.value.name);
            formData.append('price', formdata.value.price);
            formData.append('category_id', formdata.value.category_id);
            formData.append('brand_id', formdata.value.brand_id);
            formData.append('product_detail', JSON.stringify(formdata.value.product_detail));
            formData.append('product_info', formdata.value.product_info);
            if (this.selectedFile) {
                formData.append('file', this.selectedFile);
            }
            console.log("formData", formData);
            if (this.isEditing) {
                this.productService.editProduct(this.editId, formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        // this.router.navigateByUrl('/product');
                        this.back();
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
                this.productService.addProduct(formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        // this.router.navigateByUrl('/product');
                        this.back();
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
    back() {
        this.location.back();
    }
};
ProductAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_5__["DropDownService"] },
    { type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-add/product-add.component.html")).default
    })
], ProductAddComponent);



/***/ }),

/***/ "./src/app/product/product-add/product-add.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product/product-add/product-add.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddModule", function() { return ProductAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/__ivy_ngcc__/fesm2015/ngx-editor.js");











const routes = [
    {
        path: '',
        component: _product_add_component__WEBPACK_IMPORTED_MODULE_7__["ProductAddComponent"],
    }
];
let ProductAddModule = class ProductAddModule {
};
ProductAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product_add_component__WEBPACK_IMPORTED_MODULE_7__["ProductAddComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_9__["LoderModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_10__["NgxEditorModule"]
        ]
    })
], ProductAddModule);



/***/ })

}]);
//# sourceMappingURL=product-add-product-add-module-es2015.js.map
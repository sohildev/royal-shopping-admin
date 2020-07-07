(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\r\n<div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-7 align-self-center\">\r\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Product</h4>\r\n            <div class=\"d-flex align-items-center\">\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb m-0 p-0\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\r\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Product List</li>\r\n                    </ol>\r\n                </nav>\r\n                <div class=\"form-group ml-3\">\r\n                    <ng-select [(ngModel)]=\"category_id\" [items]=\"categoryList\" bindLabel=\"label\" bindValue=\"value\"\r\n                        (change)=\"onCategoryChange()\" placeholder=\" Select a Category \"></ng-select>\r\n                </div>\r\n                <div class=\"form-group ml-3\">\r\n                    <ng-select [(ngModel)]=\"brand_id\" [items]=\"brandList\" bindLabel=\"label\" bindValue=\"value\"\r\n                        (change)=\"getObjects()\" placeholder=\" Select a Brand \"></ng-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"col-5 align-self-center\">\r\n            <div class=\"customize-input float-right\">\r\n                <button type=\"button\" [routerLink]=\"['/product/add']\"\r\n                    class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Product</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"content\">\r\n    <section class=\"page-content container-fluid\">\r\n        <div class=\"card strache-card\">\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover m-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <!-- <th style=\"width:50px;\">Emp. ID</th> -->\r\n                                <th>Name</th>\r\n                                <th>Category</th>\r\n                                <th>Brand</th>\r\n                                <th class=\"table-field-status\">Status</th>\r\n                                <th class=\"table-field-actions text-center\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let obj of objectArray\">\r\n                                <td>\r\n                                    <a [routerLink]=\"['view', obj.id]\">\r\n                                        <div class=\"media d-user\">\r\n                                            <img [src]=\"obj?.image ? obj?.image : 'assets/images/demo.png'\"\r\n                                                alt=\"Brand logo\" class=\"rounded-circle\" width=\"45\" height=\"45\" />\r\n                                            <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\r\n                                            <div class=\"media-body\">\r\n                                                <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\r\n                                                <span class=\"text-muted\">₹ {{obj?.price |number}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </td>\r\n                                <td>{{getjson(obj.category_id)?.label }}</td>\r\n                                <td>{{getjson(obj.brand_id)?.label}}</td>\r\n                                <!-- <td>\r\n                                    {{obj.category_id}}\r\n                                </td>\r\n                                <td>\r\n                                    {{obj.brand_id}}\r\n                                </td> -->\r\n                                <td class=\"table-field-status\">\r\n                                    <span *ngIf=\"obj?.is_active\" class=\"badge badge-pill badge-info\r\n                                    \">Active</span>\r\n                                    <span *ngIf=\"!obj?.is_active\" class=\"badge badge-pill badge-danger\r\n                                    \">De-active</span>\r\n                                </td>\r\n                                <td class=\"table-field-actions text-center\">\r\n                                    <div class=\"action-drop dropdown\">\r\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\"\r\n                                            title=\"\">\r\n                                            <i class=\"fas fa-ellipsis-h\"></i>\r\n                                        </a>\r\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\r\n                                            <a [routerLink]=\"['view', obj.id]\" class=\"dropdown-item\"><i\r\n                                                    class=\"fa fa-eye fa-fw text-primary\">\r\n                                                </i> view</a>\r\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\r\n                                                    class=\"fa fa-edit fa-fw text-primary\">\r\n                                                </i> Edit</a>\r\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\r\n                                                    class=\"fa fa-trash fa-fw text-primary\">\r\n                                                </i> Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"objectArray.length==0\">\r\n                                <td colspan=\"5\">No Record Found</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n                </pagination>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/drop-down.service */ "./src/app/service/drop-down.service.ts");








let ProductListComponent = class ProductListComponent {
    constructor(router, productService, dataService, dropdownService, paginationService) {
        this.router = router;
        this.productService = productService;
        this.dataService = dataService;
        this.dropdownService = dropdownService;
        this.paginationService = paginationService;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.category_id = null;
        this.brandList = [];
        this.brand_id = null;
    }
    ngOnInit() {
        this.subscription = this.dataService.searchTextSubject.subscribe((v) => {
            this.searchText = v;
            this.getCategoryList();
            this.getObjects();
        });
    }
    getCategoryList() {
        this.dropdownService.getCategoryDrp().subscribe((res) => {
            if (res.success) {
                this.categoryList = res.data ? res.data : [];
            }
        });
    }
    getBrandList() {
        const params = {};
        if (this.category_id) {
            params.category_id = this.category_id;
        }
        this.dropdownService.getBrandDrp(params).subscribe((res) => {
            if (res.success) {
                this.brandList = res.data ? res.data : [];
            }
        });
    }
    onCategoryChange() {
        this.getBrandList();
        this.getObjects();
    }
    getjson(data) {
        if (data)
            return JSON.parse(data);
    }
    getObjects() {
        this.loadingState = true;
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        if (this.category_id) {
            params.category_id = this.category_id;
        }
        if (this.brand_id) {
            params.brand_id = this.brand_id;
        }
        this.productService.getProductList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.data;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        }, (error) => {
            this.loadingState = false;
            this.objectArray = [];
            this.pagination = null;
            // console.log(error);
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.getObjects();
    }
    deleteObject(object) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.productService.deleteProduct(object.id).subscribe((response) => {
                    if (response.success) {
                        this.getObjects();
                    }
                });
            }
        }).catch(swal.noop);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_7__["DropDownService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list/product-list.component.html")).default
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/product/product-list/product-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product/product-list/product-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










const routes = [
    {
        path: '',
        component: _product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | product-add-product-add-module */[__webpack_require__.e("default~product-add-product-add-module~product-view-product-view-module"), __webpack_require__.e("common"), __webpack_require__.e("product-add-product-add-module")]).then(__webpack_require__.bind(null, /*! ../product-add/product-add.module */ "./src/app/product/product-add/product-add.module.ts")).then(m => m.ProductAddModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | product-add-product-add-module */[__webpack_require__.e("default~product-add-product-add-module~product-view-product-view-module"), __webpack_require__.e("common"), __webpack_require__.e("product-add-product-add-module")]).then(__webpack_require__.bind(null, /*! ../product-add/product-add.module */ "./src/app/product/product-add/product-add.module.ts")).then(m => m.ProductAddModule),
    },
    {
        path: 'view/:id',
        loadChildren: () => Promise.all(/*! import() | product-view-product-view-module */[__webpack_require__.e("default~product-add-product-add-module~product-view-product-view-module"), __webpack_require__.e("product-view-product-view-module")]).then(__webpack_require__.bind(null, /*! ../product-view/product-view.module */ "./src/app/product/product-view/product-view.module.ts")).then(m => m.ProductViewModule),
    },
];
let ProductListModule = class ProductListModule {
};
ProductListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__["LoderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        providers: [
            src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        ]
    })
], ProductListModule);



/***/ })

}]);
//# sourceMappingURL=product-product-list-product-list-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-offer-product-list-offer-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/offer-product-list/offer-product-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/offer-product-list/offer-product-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\"> Offer Product</h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\"> Offer Product List</li>\n                    </ol>\n                </nav>\n                <div class=\"form-group ml-3\">\n                    <ng-select [(ngModel)]=\"category_id\" [items]=\"categoryList\" bindLabel=\"label\" bindValue=\"value\" (change)=\"onCategoryChange()\" placeholder=\" Select a Category \"></ng-select>\n                </div>\n                <div class=\"form-group ml-3\">\n                    <ng-select [(ngModel)]=\"brand_id\" [items]=\"brandList\" bindLabel=\"label\" bindValue=\"value\" (change)=\"getObjects()\" placeholder=\" Select a Brand \"></ng-select>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['add']\" class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add  Offer Product</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                \n                                <th>Name</th>\n                                <th>Category</th>\n                                <th>Brand</th>\n                                <th>Offer</th>\n\n                                <th class=\"table-field-status\">Status</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img [src]=\"obj?.image ? obj?.image : 'assets/images/demo.png'\" alt=\"Brand logo\" class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"card-subtitle\">₹ {{obj?.price |number}}</span>\n                                            <span class=\"text-success\">₹ {{obj?.price |number}}</span>\n                        \n                                        </div>\n                                    </div>\n                                </td>\n                                <td>{{getjson(obj.category_id)?.label }}</td>\n                                <td>{{getjson(obj.brand_id)?.label}}</td>\n                                \n                                <td class=\"table-field-status\"><span class=\"badge badge-pill badge-info\">Active</span>\n                                </td>\n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\" title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a  class=\"dropdown-item\"><i\n                                                    class=\"fa fa-edit fa-fw text-primary\">\n                                                </i> Edit</a>\n                                            <a  class=\"dropdown-item\"><i\n                                                    class=\"fa fa-trash fa-fw text-primary\">\n                                                </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"6\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "./src/app/product/offer-product-list/offer-product-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/product/offer-product-list/offer-product-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: OfferProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductListComponent", function() { return OfferProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/drop-down.service */ "./src/app/service/drop-down.service.ts");








let OfferProductListComponent = class OfferProductListComponent {
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
        this.productService.getOfferProductList(params).subscribe((response) => {
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
                this.productService.deleteOfferProduct(object.id).subscribe((response) => {
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
OfferProductListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_7__["DropDownService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
OfferProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offer-product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/offer-product-list/offer-product-list.component.html")).default
    })
], OfferProductListComponent);



/***/ }),

/***/ "./src/app/product/offer-product-list/offer-product-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/product/offer-product-list/offer-product-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: OfferProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductListModule", function() { return OfferProductListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offer_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offer-product-list.component */ "./src/app/product/offer-product-list/offer-product-list.component.ts");
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










const routes = [
    {
        path: '',
        component: _offer_product_list_component__WEBPACK_IMPORTED_MODULE_4__["OfferProductListComponent"],
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | offer-product-add-offer-product-add-module */[__webpack_require__.e("common"), __webpack_require__.e("offer-product-add-offer-product-add-module")]).then(__webpack_require__.bind(null, /*! ../offer-product-add/offer-product-add.module */ "./src/app/product/offer-product-add/offer-product-add.module.ts")).then(m => m.OfferProductAddModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | offer-product-add-offer-product-add-module */[__webpack_require__.e("common"), __webpack_require__.e("offer-product-add-offer-product-add-module")]).then(__webpack_require__.bind(null, /*! ../offer-product-add/offer-product-add.module */ "./src/app/product/offer-product-add/offer-product-add.module.ts")).then(m => m.OfferProductAddModule),
    },
];
let OfferProductListModule = class OfferProductListModule {
};
OfferProductListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _offer_product_list_component__WEBPACK_IMPORTED_MODULE_4__["OfferProductListComponent"]
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
], OfferProductListModule);



/***/ })

}]);
//# sourceMappingURL=product-offer-product-list-offer-product-list-module-es2015.js.map
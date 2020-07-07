(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list/category-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list/category-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\r\n<div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-7 align-self-center\">\r\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Category</h4>\r\n            <div class=\"d-flex align-items-center\">\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb m-0 p-0\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\r\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Category List</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-5 align-self-center\">\r\n            <div class=\"customize-input float-right\">\r\n                <button type=\"button\" [routerLink]=\"['/category/add']\" class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Category</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"content\">\r\n    <section class=\"page-content container-fluid\">\r\n        <div class=\"card strache-card\">\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover m-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <!-- <th style=\"width:50px;\">Emp. ID</th> -->\r\n                                <th>Name</th>\r\n                                <th class=\"table-field-status\">Status</th>\r\n                                <th class=\"table-field-actions text-center\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let obj of objectArray\">\r\n                                <td>\r\n                                    <div class=\"media d-user\">\r\n                                        <img src=\"assets/images/users/widget-table-pic3.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"45\" height=\"45\" />\r\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\r\n                                        <div class=\"media-body\">\r\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\r\n                                            <span class=\"text-muted\">{{obj?.brand_sub_text}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n\r\n                                <td class=\"table-field-status\"><span class=\"badge badge-pill badge-info\">Active</span>\r\n                                </td>\r\n                                <td class=\"table-field-actions text-center\">\r\n                                    <div class=\"action-drop dropdown\">\r\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\" title=\"\">\r\n                                            <i class=\"fas fa-ellipsis-h\"></i>\r\n                                        </a>\r\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\r\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\r\n                                                    class=\"fa fa-edit fa-fw text-primary\">\r\n                                                </i> Edit</a>\r\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\r\n                                                    class=\"fa fa-trash fa-fw text-primary\">\r\n                                                </i> Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"objectArray.length==0\">\r\n                                <td colspan=\"3\">No Record Found</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n                </pagination>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./src/app/category/category-list/category-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");







let CategoryListComponent = class CategoryListComponent {
    constructor(router, dataService, categoryService, paginationService) {
        this.router = router;
        this.dataService = dataService;
        this.categoryService = categoryService;
        this.paginationService = paginationService;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.subscription = this.dataService.searchTextSubject.subscribe((v) => {
            this.searchText = v;
            this.getObjects();
        });
    }
    getObjects() {
        this.loadingState = true;
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.categoryService.getCategoryList(params).subscribe((response) => {
            // console.log(response);
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
                this.categoryService.deleteCategory(object.id).subscribe((response) => {
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
CategoryListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: src_app_service_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
CategoryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list/category-list.component.html")).default
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/category/category-list/category-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/category/category-list/category-list.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListModule", function() { return CategoryListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-list.component */ "./src/app/category/category-list/category-list.component.ts");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");








const routes = [
    {
        path: '',
        component: _category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"],
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | category-add-category-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("category-add-category-add-module")]).then(__webpack_require__.bind(null, /*! ../category-add/category-add.module */ "./src/app/category/category-add/category-add.module.ts")).then(m => m.CategoryAddModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | category-add-category-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("category-add-category-add-module")]).then(__webpack_require__.bind(null, /*! ../category-add/category-add.module */ "./src/app/category/category-add/category-add.module.ts")).then(m => m.CategoryAddModule),
    },
];
let CategoryListModule = class CategoryListModule {
};
CategoryListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_6__["LoderModule"],
            src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
        ]
    })
], CategoryListModule);



/***/ }),

/***/ "./src/app/service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getCategoryList(param) {
        return this.http.get(`${this.API_URL}/category`, { params: param });
    }
    addCategory(data) {
        return this.http.post(`${this.API_URL}/category`, data);
    }
    editCategory(id, data) {
        return this.http.put(`${this.API_URL}/category/${id}`, data);
    }
    deleteCategory(id) {
        return this.http.delete(`${this.API_URL}/category/${id}`);
    }
    getCategoryById(id, param = null) {
        return this.http.get(`${this.API_URL}/category/${id}`, { params: param });
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=category-category-list-category-list-module-es2015.js.map
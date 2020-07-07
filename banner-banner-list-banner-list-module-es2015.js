(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner-banner-list-banner-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner-list/banner-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner-list/banner-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Banner</h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\"\n                                routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Banner List</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['add']\"\n                    class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Banner</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <!-- <th style=\"width:50px;\">Emp. ID</th> -->\n                                <th>user</th>\n                                <th>Banner</th>\n\n                                <th class=\"table-field-status\">Status</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic3.jpg\" alt=\"user\"\n                                            class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.user_type}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic2.jpg\" alt=\"user\"\n                                            class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.title}}</h5>\n                                            <span class=\"text-muted\">{{obj?.url}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n\n                                <td class=\"table-field-status\">\n                                    <span *ngIf=\"obj?.is_active\" class=\"badge badge-pill badge-info\n                                    \">Active</span>\n                                    <span *ngIf=\"!obj?.is_active\" class=\"badge badge-pill badge-danger\n                                    \">De-active</span>\n                                </td>\n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\"\n                                            title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-edit fa-fw text-primary\">\n                                                </i> Edit</a>\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-trash fa-fw text-primary\">\n                                                </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"3\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "./src/app/banner/banner-list/banner-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/banner/banner-list/banner-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_banner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/banner.service */ "./src/app/service/banner.service.ts");







let BannerListComponent = class BannerListComponent {
    constructor(router, dataService, bannerservice, paginationService) {
        this.router = router;
        this.dataService = dataService;
        this.bannerservice = bannerservice;
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
        this.bannerservice.getBannerList(params).subscribe((response) => {
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
                this.bannerservice.deleteBanner(object.id).subscribe((response) => {
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
BannerListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_service_banner_service__WEBPACK_IMPORTED_MODULE_6__["BannerService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"] }
];
BannerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/banner/banner-list/banner-list.component.html")).default,
    })
], BannerListComponent);



/***/ }),

/***/ "./src/app/banner/banner-list/banner-list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/banner/banner-list/banner-list.module.ts ***!
  \**********************************************************/
/*! exports provided: BannerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListModule", function() { return BannerListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _banner_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-list.component */ "./src/app/banner/banner-list/banner-list.component.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var src_app_service_banner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/banner.service */ "./src/app/service/banner.service.ts");








const routes = [
    {
        path: '',
        component: _banner_list_component__WEBPACK_IMPORTED_MODULE_4__["BannerListComponent"],
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | banner-add-banner-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("banner-add-banner-add-module")]).then(__webpack_require__.bind(null, /*! ../banner-add/banner-add.module */ "./src/app/banner/banner-add/banner-add.module.ts")).then(m => m.BannerAddModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | banner-add-banner-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("banner-add-banner-add-module")]).then(__webpack_require__.bind(null, /*! ../banner-add/banner-add.module */ "./src/app/banner/banner-add/banner-add.module.ts")).then(m => m.BannerAddModule),
    },
];
let BannerListModule = class BannerListModule {
};
BannerListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _banner_list_component__WEBPACK_IMPORTED_MODULE_4__["BannerListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__["LoderModule"],
            src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_banner_service__WEBPACK_IMPORTED_MODULE_7__["BannerService"]
        ]
    })
], BannerListModule);



/***/ }),

/***/ "./src/app/service/banner.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/banner.service.ts ***!
  \*******************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BannerService = class BannerService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getBannerList(param) {
        return this.http.get(`${this.API_URL}/banner`, { params: param });
    }
    addBanner(data) {
        return this.http.post(`${this.API_URL}/banner`, data);
    }
    editBanner(id, data) {
        return this.http.put(`${this.API_URL}/banner/${id}`, data);
    }
    deleteBanner(id) {
        return this.http.delete(`${this.API_URL}/banner/${id}`);
    }
    getBannerById(id, param = null) {
        return this.http.get(`${this.API_URL}/banner/${id}`, { params: param });
    }
};
BannerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BannerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BannerService);



/***/ })

}]);
//# sourceMappingURL=banner-banner-list-banner-list-module-es2015.js.map
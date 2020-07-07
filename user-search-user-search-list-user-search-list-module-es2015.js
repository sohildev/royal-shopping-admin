(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-search-user-search-list-user-search-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-search/user-search-list/user-search-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-search/user-search-list/user-search-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Search </h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Search List</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['add']\" class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Search</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <th>User Name</th>\n                                <th class=\"table-field-status\">Search Text</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic3.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.email}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n\n                                <td class=\"table-field-status\">{{obj?.search_text}}\n                                </td>\n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\" title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-edit fa-fw text-primary\">\n                                                </i> Edit</a>\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-trash fa-fw text-primary\">\n                                                </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"3\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "./src/app/service/user-search.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/user-search.service.ts ***!
  \************************************************/
/*! exports provided: UserSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchService", function() { return UserSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserSearchService = class UserSearchService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getUserSearchList(param) {
        return this.http.get(`${this.API_URL}/user-search`, { params: param });
    }
    addUserSearch(data) {
        return this.http.post(`${this.API_URL}/user-search`, data);
    }
    editUserSearch(id, data) {
        return this.http.put(`${this.API_URL}/user-search/${id}`, data);
    }
    deleteUserSearch(id) {
        return this.http.delete(`${this.API_URL}/user-search/${id}`);
    }
    getUserSearchById(id, param = null) {
        return this.http.get(`${this.API_URL}/user-search/${id}`, { params: param });
    }
};
UserSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserSearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserSearchService);



/***/ }),

/***/ "./src/app/user-search/user-search-list/user-search-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-search/user-search-list/user-search-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserSearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchListComponent", function() { return UserSearchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user-search.service */ "./src/app/service/user-search.service.ts");






let UserSearchListComponent = class UserSearchListComponent {
    constructor(dataService, userSearchService, paginationService) {
        this.dataService = dataService;
        this.userSearchService = userSearchService;
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
        this.userSearchService.getUserSearchList(params).subscribe((response) => {
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
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.userSearchService.deleteUserSearch(object.id).subscribe((response) => {
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
UserSearchListComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_service_user_search_service__WEBPACK_IMPORTED_MODULE_5__["UserSearchService"] },
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] }
];
UserSearchListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-search-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-search-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-search/user-search-list/user-search-list.component.html")).default,
    })
], UserSearchListComponent);



/***/ }),

/***/ "./src/app/user-search/user-search-list/user-search-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user-search/user-search-list/user-search-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserSearchListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchListModule", function() { return UserSearchListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_search_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-search-list.component */ "./src/app/user-search/user-search-list/user-search-list.component.ts");
/* harmony import */ var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/loder/loder.module */ "./src/app/common/loder/loder.module.ts");
/* harmony import */ var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var src_app_service_user_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user-search.service */ "./src/app/service/user-search.service.ts");








const routes = [
    {
        path: '',
        component: _user_search_list_component__WEBPACK_IMPORTED_MODULE_4__["UserSearchListComponent"],
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | user-search-add-user-search-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("user-search-add-user-search-add-module")]).then(__webpack_require__.bind(null, /*! ../user-search-add/user-search-add.module */ "./src/app/user-search/user-search-add/user-search-add.module.ts")).then(m => m.UserSearchAddModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | user-search-add-user-search-add-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("user-search-add-user-search-add-module")]).then(__webpack_require__.bind(null, /*! ../user-search-add/user-search-add.module */ "./src/app/user-search/user-search-add/user-search-add.module.ts")).then(m => m.UserSearchAddModule),
    },
];
let UserSearchListModule = class UserSearchListModule {
};
UserSearchListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_search_list_component__WEBPACK_IMPORTED_MODULE_4__["UserSearchListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__["LoderModule"],
            src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_user_search_service__WEBPACK_IMPORTED_MODULE_7__["UserSearchService"]
        ]
    })
], UserSearchListModule);



/***/ })

}]);
//# sourceMappingURL=user-search-user-search-list-user-search-list-module-es2015.js.map
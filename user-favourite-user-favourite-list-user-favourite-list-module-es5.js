function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-favourite-user-favourite-list-user-favourite-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-list/user-favourite-list.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-list/user-favourite-list.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFavouriteUserFavouriteListUserFavouriteListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Favourite\n            </h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\"\n                                routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Favourite\n                            List</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['add']\"\n                    class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Favourite</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <th>User</th>\n                                <th>Product</th>\n                                <th class=\"table-field-status\">Status</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic3.jpg\" alt=\"user\"\n                                            class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.email}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic4.jpg\" alt=\"user\"\n                                            class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.email}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n\n                                <td class=\"table-field-status\">\n                                \n                                    <span *ngIf=\"obj?.is_favourite\" class=\"badge badge-pill badge-info\n                                    \">Active</span>\n                                    <span *ngIf=\"!obj?.is_favourite\" class=\"badge badge-pill badge-danger\n                                    \">De-active</span>\n                                </td>\n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\"\n                                            title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-edit fa-fw text-primary\">\n                                                </i> Edit</a>\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-trash fa-fw text-primary\">\n                                                </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"4\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/service/user-favourite.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/user-favourite.service.ts ***!
    \***************************************************/

  /*! exports provided: UserFavouriteService */

  /***/
  function srcAppServiceUserFavouriteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFavouriteService", function () {
      return UserFavouriteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserFavouriteService = /*#__PURE__*/function () {
      function UserFavouriteService(http) {
        _classCallCheck(this, UserFavouriteService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(UserFavouriteService, [{
        key: "getUserFavouriteList",
        value: function getUserFavouriteList(param) {
          return this.http.get("".concat(this.API_URL, "/user-favourite"), {
            params: param
          });
        }
      }, {
        key: "addUserFavourite",
        value: function addUserFavourite(data) {
          return this.http.post("".concat(this.API_URL, "/user-favourite"), data);
        }
      }, {
        key: "editUserFavourite",
        value: function editUserFavourite(id, data) {
          return this.http.put("".concat(this.API_URL, "/user-favourite/").concat(id), data);
        }
      }, {
        key: "deleteUserFavourite",
        value: function deleteUserFavourite(id) {
          return this.http["delete"]("".concat(this.API_URL, "/user-favourite/").concat(id));
        }
      }, {
        key: "getUserFavouriteById",
        value: function getUserFavouriteById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/user-favourite/").concat(id), {
            params: param
          });
        }
      }]);

      return UserFavouriteService;
    }();

    UserFavouriteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserFavouriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], UserFavouriteService);
    /***/
  },

  /***/
  "./src/app/user-favourite/user-favourite-list/user-favourite-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/user-favourite/user-favourite-list/user-favourite-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: UserFavouriteListComponent */

  /***/
  function srcAppUserFavouriteUserFavouriteListUserFavouriteListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFavouriteListComponent", function () {
      return UserFavouriteListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/user-favourite.service */
    "./src/app/service/user-favourite.service.ts");

    var UserFavouriteListComponent = /*#__PURE__*/function () {
      function UserFavouriteListComponent(router, dataService, userfavouriteservice, paginationService) {
        _classCallCheck(this, UserFavouriteListComponent);

        this.router = router;
        this.dataService = dataService;
        this.userfavouriteservice = userfavouriteservice;
        this.paginationService = paginationService;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
      }

      _createClass(UserFavouriteListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.dataService.searchTextSubject.subscribe(function (v) {
            _this.searchText = v;

            _this.getObjects();
          });
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this2 = this;

          this.loadingState = true;
          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.userfavouriteservice.getUserFavouriteList(params).subscribe(function (response) {
            // console.log(response);
            _this2.loadingState = false;

            if (response.success) {
              _this2.objectArray = response.data.data;
              _this2.pagination = _this2.paginationService.getPager(response.data.pagination['total_page'], _this2.currentPage);
            } else {
              _this2.objectArray = [];
              _this2.pagination = null;
            }
          }, function (error) {
            _this2.loadingState = false;
            _this2.objectArray = [];
            _this2.pagination = null; // console.log(error);
          });
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.getObjects();
        }
      }, {
        key: "searchObject",
        value: function searchObject(text) {
          this.searchText = text;
          this.getObjects();
        }
      }, {
        key: "deleteObject",
        value: function deleteObject(object) {
          var _this3 = this;

          swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              _this3.userfavouriteservice.deleteUserFavourite(object.id).subscribe(function (response) {
                if (response.success) {
                  _this3.getObjects();
                }
              });
            }
          })["catch"](swal.noop);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return UserFavouriteListComponent;
    }();

    UserFavouriteListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_6__["UserFavouriteService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]
      }];
    };

    UserFavouriteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-favourite-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-favourite-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-favourite/user-favourite-list/user-favourite-list.component.html"))["default"]
    })], UserFavouriteListComponent);
    /***/
  },

  /***/
  "./src/app/user-favourite/user-favourite-list/user-favourite-list.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/user-favourite/user-favourite-list/user-favourite-list.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserFavouriteListModule */

  /***/
  function srcAppUserFavouriteUserFavouriteListUserFavouriteListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFavouriteListModule", function () {
      return UserFavouriteListModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_favourite_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-favourite-list.component */
    "./src/app/user-favourite/user-favourite-list/user-favourite-list.component.ts");
    /* harmony import */


    var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/pagination/pagination.module */
    "./src/app/common/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/user-favourite.service */
    "./src/app/service/user-favourite.service.ts");

    var routes = [{
      path: '',
      component: _user_favourite_list_component__WEBPACK_IMPORTED_MODULE_4__["UserFavouriteListComponent"]
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | user-favourite-add-user-favourite-add-module */
        [__webpack_require__.e("common"), __webpack_require__.e("user-favourite-add-user-favourite-add-module")]).then(__webpack_require__.bind(null,
        /*! ../user-favourite-add/user-favourite-add.module */
        "./src/app/user-favourite/user-favourite-add/user-favourite-add.module.ts")).then(function (m) {
          return m.UserFavouriteAddModule;
        });
      }
    }, {
      path: 'edit/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | user-favourite-add-user-favourite-add-module */
        [__webpack_require__.e("common"), __webpack_require__.e("user-favourite-add-user-favourite-add-module")]).then(__webpack_require__.bind(null,
        /*! ../user-favourite-add/user-favourite-add.module */
        "./src/app/user-favourite/user-favourite-add/user-favourite-add.module.ts")).then(function (m) {
          return m.UserFavouriteAddModule;
        });
      }
    }];

    var UserFavouriteListModule = function UserFavouriteListModule() {
      _classCallCheck(this, UserFavouriteListModule);
    };

    UserFavouriteListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_favourite_list_component__WEBPACK_IMPORTED_MODULE_4__["UserFavouriteListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_6__["LoderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      providers: [src_app_service_user_favourite_service__WEBPACK_IMPORTED_MODULE_9__["UserFavouriteService"]]
    })], UserFavouriteListModule);
    /***/
  }
}]);
//# sourceMappingURL=user-favourite-user-favourite-list-user-favourite-list-module-es5.js.map
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-list-brand-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-list/brand-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-list/brand-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrandBrandListBrandListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Brand</h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Brand List</li>\n                    </ol>\n                </nav>\n                <div class=\"form-group ml-3\">\n                    <ng-select [(ngModel)]=\"category_id\" [items]=\"categoryList\" bindLabel=\"label\" bindValue=\"value\" (change)=\"getObjects()\" placeholder=\" Select a Category \"></ng-select>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['/brand/add']\" class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Brand</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <!-- <th style=\"width:50px;\">Emp. ID</th> -->\n                                <th>Name</th>\n                                <th>Category</th>\n                                <th>Brand Url</th>\n                                <th class=\"table-field-status\">Status</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n\n                                    <div class=\"media d-user\">\n                                        <img [src]=\"obj?.image ? obj?.image : 'assets/images/demo.png'\" alt=\"Brand logo\" class=\"rounded-circle\" width=\"45\" height=\"45\" />\n\n\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.brand_sub_text}}</span>\n                                        </div>\n                                    </div>\n\n                                </td>\n                                <td>{{getjson(obj.category_id)?.label }}</td>\n                                <td>{{obj?.brand_url}}</td>\n                                <td class=\"table-field-status\"><span class=\"badge badge-pill badge-info\">Active</span></td>\n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\" title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i class=\"fa fa-edit fa-fw text-primary\">\n                        </i> Edit</a>\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i class=\"fa fa-trash fa-fw text-primary\">\n                        </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"5\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/brand/brand-list/brand-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/brand/brand-list/brand-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: BrandListComponent */

  /***/
  function srcAppBrandBrandListBrandListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandListComponent", function () {
      return BrandListComponent;
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


    var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/brand.service */
    "./src/app/service/brand.service.ts");
    /* harmony import */


    var src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/drop-down.service */
    "./src/app/service/drop-down.service.ts");

    var BrandListComponent = /*#__PURE__*/function () {
      function BrandListComponent(BrandService, dataService, dropdownService, paginationService) {
        _classCallCheck(this, BrandListComponent);

        this.BrandService = BrandService;
        this.dataService = dataService;
        this.dropdownService = dropdownService;
        this.paginationService = paginationService;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.category_id = null;
        this.categoryList = [];
      }

      _createClass(BrandListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.dataService.searchTextSubject.subscribe(function (v) {
            _this.searchText = v;

            _this.getObjects();

            _this.getCategoryList();
          });
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this2 = this;

          this.dropdownService.getCategoryDrp().subscribe(function (res) {
            if (res.success) {
              _this2.categoryList = res.data ? res.data : [];
            }
          });
        }
      }, {
        key: "getObjects",
        value: function getObjects() {
          var _this3 = this;

          this.loadingState = true;
          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          if (this.category_id) {
            params.category_id = this.category_id;
          }

          this.BrandService.getBrandList(params).subscribe(function (response) {
            // console.log(response);
            _this3.loadingState = false;

            if (response.success) {
              _this3.objectArray = response.data.data;
              _this3.pagination = _this3.paginationService.getPager(response.data.pagination['total_page'], _this3.currentPage);
            } else {
              _this3.objectArray = [];
              _this3.pagination = null;
            }
          }, function (error) {
            _this3.loadingState = false;
            _this3.objectArray = [];
            _this3.pagination = null; // console.log(error);
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
          var _this4 = this;

          swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              _this4.BrandService.deleteBrand(object.id).subscribe(function (response) {
                if (response.success) {
                  _this4.getObjects();
                }
              });
            }
          })["catch"](swal.noop);
        }
      }, {
        key: "getjson",
        value: function getjson(data) {
          if (data) return JSON.parse(data);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return BrandListComponent;
    }();

    BrandListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_6__["DropDownService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]
      }];
    };

    BrandListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brand-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./brand-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-list/brand-list.component.html"))["default"]
    })], BrandListComponent);
    /***/
  },

  /***/
  "./src/app/brand/brand-list/brand-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/brand/brand-list/brand-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: BrandListModule */

  /***/
  function srcAppBrandBrandListBrandListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandListModule", function () {
      return BrandListModule;
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


    var _brand_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./brand-list.component */
    "./src/app/brand/brand-list/brand-list.component.ts");
    /* harmony import */


    var src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/brand.service */
    "./src/app/service/brand.service.ts");
    /* harmony import */


    var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/pagination/pagination.module */
    "./src/app/common/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var routes = [{
      path: '',
      component: _brand_list_component__WEBPACK_IMPORTED_MODULE_4__["BrandListComponent"]
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | brand-add-brand-add-module */
        [__webpack_require__.e("common"), __webpack_require__.e("brand-add-brand-add-module")]).then(__webpack_require__.bind(null,
        /*! ../brand-add/brand-add.module */
        "./src/app/brand/brand-add/brand-add.module.ts")).then(function (m) {
          return m.BrandAddModule;
        });
      }
    }, {
      path: 'edit/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | brand-add-brand-add-module */
        [__webpack_require__.e("common"), __webpack_require__.e("brand-add-brand-add-module")]).then(__webpack_require__.bind(null,
        /*! ../brand-add/brand-add.module */
        "./src/app/brand/brand-add/brand-add.module.ts")).then(function (m) {
          return m.BrandAddModule;
        });
      }
    }];

    var BrandListModule = function BrandListModule() {
      _classCallCheck(this, BrandListModule);
    };

    BrandListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_brand_list_component__WEBPACK_IMPORTED_MODULE_4__["BrandListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__["LoderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      providers: [src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"]]
    })], BrandListModule);
    /***/
  },

  /***/
  "./src/app/service/brand.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/brand.service.ts ***!
    \******************************************/

  /*! exports provided: BrandService */

  /***/
  function srcAppServiceBrandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandService", function () {
      return BrandService;
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

    var BrandService = /*#__PURE__*/function () {
      function BrandService(http) {
        _classCallCheck(this, BrandService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(BrandService, [{
        key: "getBrandList",
        value: function getBrandList(param) {
          return this.http.get("".concat(this.API_URL, "/brand"), {
            params: param
          });
        }
      }, {
        key: "addBrand",
        value: function addBrand(data) {
          return this.http.post("".concat(this.API_URL, "/brand"), data);
        }
      }, {
        key: "editBrand",
        value: function editBrand(id, data) {
          return this.http.put("".concat(this.API_URL, "/brand/").concat(id), data);
        }
      }, {
        key: "deleteBrand",
        value: function deleteBrand(id) {
          return this.http["delete"]("".concat(this.API_URL, "/brand/").concat(id));
        }
      }, {
        key: "getBrandById",
        value: function getBrandById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/brand/").concat(id), {
            params: param
          });
        }
      }]);

      return BrandService;
    }();

    BrandService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    BrandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], BrandService);
    /***/
  }
}]);
//# sourceMappingURL=brand-brand-list-brand-list-module-es5.js.map
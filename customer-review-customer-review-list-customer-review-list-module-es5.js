function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-review-customer-review-list-customer-review-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-list/customer-review-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-list/customer-review-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerReviewCustomerReviewListCustomerReviewListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Customer Review </h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\"\n                                routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">review List</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" [routerLink]=\"['add']\"\n                    class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add review</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <th>User</th>\n                                <th class=\"table-field-status\">Rate </th>\n                                <th>Subject</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let obj of objectArray\">\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <img src=\"assets/images/users/widget-table-pic1.jpg\" alt=\"user\"\n                                            class=\"rounded-circle\" width=\"45\" height=\"45\" />\n                                        <i class=\"fa fa-building-o align-self-center fa-lg mr-3 text-muted\"></i>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.name}}</h5>\n                                            <span class=\"text-muted\">{{obj?.email}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"media d-user\">\n                                        <div class=\"media-body\">\n\n                                            <!-- <star-rating value=\"5\" totalstars=\"5\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\n\n                                            <star-rating value=\"5\" totalstars=\"5\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\n\n                                            <star-rating value=\"5\" totalstars=\"5\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\n  -->\n                                            <h5 class=\"mt-1 mb-0 \">{{obj.quality_rate}}</h5>\n                                            <span class=\"text-muted\">{{obj?.price_rate}}</span>\n                                            <span class=\"text-muted\">{{obj?.value_rate}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>{{obj?.subject}}</td>\n                                \n                                <td class=\"table-field-actions text-center\">\n                                    <div class=\"action-drop dropdown\">\n                                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm btn-icon-only\"\n                                            title=\"\">\n                                            <i class=\"fas fa-ellipsis-h\"></i>\n                                        </a>\n                                        <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                            <a [routerLink]=\"['edit', obj.id]\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-edit fa-fw text-primary\">\n                                                </i> Edit</a>\n                                            <a (click)=\"deleteObject(obj)\" class=\"dropdown-item\"><i\n                                                    class=\"fa fa-trash fa-fw text-primary\">\n                                                </i> Delete</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"objectArray.length==0\">\n                                <td colspan=\"5\">No Record Found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/customer-review/customer-review-list/customer-review-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/customer-review/customer-review-list/customer-review-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CustomerReviewListComponent */

  /***/
  function srcAppCustomerReviewCustomerReviewListCustomerReviewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerReviewListComponent", function () {
      return CustomerReviewListComponent;
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


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/customer-review.service */
    "./src/app/service/customer-review.service.ts"); // import { StarRatingComponent } from 'ng-starrating';


    var CustomerReviewListComponent = /*#__PURE__*/function () {
      function CustomerReviewListComponent(dataService, customerreviewService, paginationService) {
        _classCallCheck(this, CustomerReviewListComponent);

        this.dataService = dataService;
        this.customerreviewService = customerreviewService;
        this.paginationService = paginationService;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
      }

      _createClass(CustomerReviewListComponent, [{
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

          this.customerreviewService.getCustomerReviewList(params).subscribe(function (response) {
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
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              _this3.customerreviewService.deleteCustomerReview(object.id).subscribe(function (response) {
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

      return CustomerReviewListComponent;
    }();

    CustomerReviewListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_5__["CustomerReviewService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]
      }];
    };

    CustomerReviewListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-review-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-review-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-list/customer-review-list.component.html"))["default"]
    })], CustomerReviewListComponent);
    /***/
  },

  /***/
  "./src/app/customer-review/customer-review-list/customer-review-list.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/customer-review/customer-review-list/customer-review-list.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: CustomerReviewListModule */

  /***/
  function srcAppCustomerReviewCustomerReviewListCustomerReviewListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerReviewListModule", function () {
      return CustomerReviewListModule;
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


    var _customer_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer-review-list.component */
    "./src/app/customer-review/customer-review-list/customer-review-list.component.ts");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts");
    /* harmony import */


    var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/pagination/pagination.module */
    "./src/app/common/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/customer-review.service */
    "./src/app/service/customer-review.service.ts"); // import { RatingModule } from 'ng-starrating';


    var routes = [{
      path: '',
      component: _customer_review_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerReviewListComponent"]
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | customer-review-add-customer-review-add-module */
        [__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("customer-review-add-customer-review-add-module")]).then(__webpack_require__.bind(null,
        /*! ../customer-review-add/customer-review-add.module */
        "./src/app/customer-review/customer-review-add/customer-review-add.module.ts")).then(function (m) {
          return m.CustomerReviewAddModule;
        });
      }
    }, {
      path: 'edit/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | customer-review-add-customer-review-add-module */
        [__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("customer-review-add-customer-review-add-module")]).then(__webpack_require__.bind(null,
        /*! ../customer-review-add/customer-review-add.module */
        "./src/app/customer-review/customer-review-add/customer-review-add.module.ts")).then(function (m) {
          return m.CustomerReviewAddModule;
        });
      }
    }];

    var CustomerReviewListModule = function CustomerReviewListModule() {
      _classCallCheck(this, CustomerReviewListModule);
    };

    CustomerReviewListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_customer_review_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerReviewListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__["LoderModule"], src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"], // RatingModule ,
      _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      providers: [src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_7__["CustomerReviewService"]]
    })], CustomerReviewListModule);
    /***/
  },

  /***/
  "./src/app/service/customer-review.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/customer-review.service.ts ***!
    \****************************************************/

  /*! exports provided: CustomerReviewService */

  /***/
  function srcAppServiceCustomerReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerReviewService", function () {
      return CustomerReviewService;
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

    var CustomerReviewService = /*#__PURE__*/function () {
      function CustomerReviewService(http) {
        _classCallCheck(this, CustomerReviewService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(CustomerReviewService, [{
        key: "getCustomerReviewList",
        value: function getCustomerReviewList(param) {
          return this.http.get("".concat(this.API_URL, "/customer-review"), {
            params: param
          });
        }
      }, {
        key: "addCustomerReview",
        value: function addCustomerReview(data) {
          return this.http.post("".concat(this.API_URL, "/customer-review"), data);
        }
      }, {
        key: "editCustomerReview",
        value: function editCustomerReview(id, data) {
          return this.http.put("".concat(this.API_URL, "/customer-review/").concat(id), data);
        }
      }, {
        key: "deleteCustomerReview",
        value: function deleteCustomerReview(id) {
          return this.http["delete"]("".concat(this.API_URL, "/customer-review/").concat(id));
        }
      }, {
        key: "getCustomerReviewById",
        value: function getCustomerReviewById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/customer-review/").concat(id), {
            params: param
          });
        }
      }]);

      return CustomerReviewService;
    }();

    CustomerReviewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CustomerReviewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomerReviewService);
    /***/
  }
}]);
//# sourceMappingURL=customer-review-customer-review-list-customer-review-list-module-es5.js.map
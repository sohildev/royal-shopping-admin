function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-subscribe-list-subscribe-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe-list/subscribe-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe-list/subscribe-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubscribeSubscribeListSubscribeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n<div class=\"page-breadcrumb\">\n    <div class=\"row\">\n        <div class=\"col-7 align-self-center\">\n            <h4 class=\"page-title text-truncate text-dark font-weight-medium mb-1\">Subscribe</h4>\n            <div class=\"d-flex align-items-center\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb m-0 p-0\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\"\n                                routerLinkActive=\"router-link-active\" class=\"text-muted\">Apps</a></li>\n                        <li class=\"breadcrumb-item text-muted active\" aria-current=\"page\">Subscribe List</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n\n        <div class=\"col-5 align-self-center\">\n            <div class=\"customize-input float-right\">\n                <button type=\"button\" (click)=\"showForm()\"\n                    class=\"btn btn-outline-info  border-0 custom-shadow custom-radius\">Add Subscribe</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <section class=\"page-content container-fluid\">\n        <div class=\"card strache-card\">\n            <div class=\"card-body p-0\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover m-0\">\n                        <thead>\n                            <tr>\n                                <th>Email</th>\n                                <th class=\"table-field-actions text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngIf=\"showAddForm && !isEditing\">\n                                <td colspan=\"2\">\n                                    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm()\">\n                                        <div class=\"d-flex \">\n                                            <div class=\"form-group mb-0 flex-grow-1 pr-2\">\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email...\"\n                                                    [formControl]=\"addForm.controls['email']\">\n                                            </div>\n\n                                            <div>\n                                                <button type=\"submit\" [disabled]=\"showLoader\"\n                                                    class=\"btn btn-outline-success btn-rounded btn-circle mr-2\">\n                                                    <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\n                                                    <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\n                                                </button>\n\n                                                <button type=\"button\" (click)=\"resetForm()\"\n                                                    class=\"btn btn-outline-secondary  btn-rounded btn-circle mr-2\"><i\n                                                        class=\"fas fa-times\"></i> </button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </td>\n                            </tr>\n                            <tr *ngFor=\"let item of objectArray; let i=index\">\n                                <ng-container *ngIf=\"editId != item?.id\">\n                                    <td>{{item?.email}}</td>\n\n                                    <td class=\"table-field-actions text-center\">\n                                        <div class=\"action-drop dropdown\">                                          \n                                            <button role=\"button\" type=\"button\"\n                                                class=\"btn btn-link text-primary p-0 px-2  btn-sm btn-icon-only\" data-toggle=\"dropdown\">\n                                                <i class=\"fa fa-ellipsis-h\"></i>\n                                            </button>\n                                            <div class=\"dropdown-menu dropdown-icon-menu dropdown-menu-right\">\n                                                <a (click)=\"editObject(item, i)\" class=\"dropdown-item\"><i\n                                                        class=\"fa fa-edit fa-fw text-primary\">\n                                                    </i> Edit</a>\n                                                <a  (click)=\"deleteObject(item)\" class=\"dropdown-item\"><i\n                                                        class=\"fa fa-trash fa-fw text-primary\">\n                                                    </i> Delete</a>\n                                            </div>\n                                        </div>\n                                    </td>\n\n                                 \n\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"isEditing && editId == item?.id && i == editIndex\">\n                           \n                                <td colspan=\"2\">\n                                    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm()\">\n                                        <div class=\"d-flex\">\n                                            <div class=\"form-group mb-0 flex-grow-1 pr-2\">\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email...\"\n                                                    [formControl]=\"addForm.controls['email']\">\n                                            </div>\n\n\n                                            <div>\n                                                <button type=\"submit\" [disabled]=\"showLoader\"\n                                                    class=\"btn btn-outline-success btn-rounded btn-circle mr-2\">\n                                                    <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\n                                                    <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\n                                                </button>\n\n                                                <button type=\"button\" (click)=\"resetForm()\"\n                                                    class=\"btn btn-outline-secondary  btn-rounded btn-circle mr-2\"><i\n                                                        class=\"fas fa-times\"></i> </button>\n                                            </div>\n                                            \n                                        </div>\n                                    </form>\n                                </td>\n                            \n                            </ng-container>\n                            </tr>\n\n                            <tr *ngIf=\"objectArray.length === 0 && !showAddForm\">\n                                <td colspan=\"2\"> No records found</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\n                </pagination>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/service/subscribe.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/subscribe.service.ts ***!
    \**********************************************/

  /*! exports provided: SubscribeService */

  /***/
  function srcAppServiceSubscribeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeService", function () {
      return SubscribeService;
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

    var SubscribeService = /*#__PURE__*/function () {
      function SubscribeService(http) {
        _classCallCheck(this, SubscribeService);

        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
      }

      _createClass(SubscribeService, [{
        key: "getSubscribeList",
        value: function getSubscribeList(param) {
          return this.http.get("".concat(this.API_URL, "/subscribe"), {
            params: param
          });
        }
      }, {
        key: "addSubscribe",
        value: function addSubscribe(data) {
          return this.http.post("".concat(this.API_URL, "/subscribe"), data);
        }
      }, {
        key: "editSubscribe",
        value: function editSubscribe(id, data) {
          return this.http.put("".concat(this.API_URL, "/subscribe/").concat(id), data);
        }
      }, {
        key: "deleteSubscribe",
        value: function deleteSubscribe(id) {
          return this.http["delete"]("".concat(this.API_URL, "/subscribe/").concat(id));
        }
      }, {
        key: "getSubscribeById",
        value: function getSubscribeById(id) {
          var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this.http.get("".concat(this.API_URL, "/subscribe/").concat(id), {
            params: param
          });
        }
      }]);

      return SubscribeService;
    }();

    SubscribeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    SubscribeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], SubscribeService);
    /***/
  },

  /***/
  "./src/app/subscribe/subscribe-list/subscribe-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/subscribe/subscribe-list/subscribe-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SubscribeListComponent */

  /***/
  function srcAppSubscribeSubscribeListSubscribeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeListComponent", function () {
      return SubscribeListComponent;
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


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var src_app_service_subscribe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/subscribe.service */
    "./src/app/service/subscribe.service.ts");

    var SubscribeListComponent = /*#__PURE__*/function () {
      function SubscribeListComponent(router, paginationService, subscribeservice, dataService, fBuilder) {
        _classCallCheck(this, SubscribeListComponent);

        this.router = router;
        this.paginationService = paginationService;
        this.subscribeservice = subscribeservice;
        this.dataService = dataService;
        this.fBuilder = fBuilder; // listing

        this.loadingState = true;
        this.objectArray = [];
        this.questionArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.formErrors = {
          apierror: null
        };
        this.showLoader = false;
        this.showAddForm = false; // add

        this.isEditing = false; // edit

        this.editId = null; // edit

        this.editIndex = null; // edit

        this.loadform = false;
        this.permissionObject = null;
        this.addForm = this.fBuilder.group({
          'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])]
        });
      }

      _createClass(SubscribeListComponent, [{
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

          var params = {
            page: this.currentPage
          };

          if (this.searchText) {
            params.search = this.searchText;
          }

          this.subscribeservice.getSubscribeList(params).subscribe(function (response) {
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
            _this2.pagination = null;
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
          this.currentPage = 1;
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
              _this3.subscribeservice.deleteSubscribe(object.id).subscribe(function (response) {
                if (response.success) {
                  _this3.getObjects();
                }
              });
            }
          })["catch"](swal.noop);
        }
      }, {
        key: "editObject",
        value: function editObject(object, index) {
          this.resetForm();
          this.editIndex = index;
          this.isEditing = true;
          this.editId = object.id;
          this.addForm.patchValue({
            'email': object.email
          });
        }
      }, {
        key: "showForm",
        value: function showForm() {
          this.resetForm();
          this.showAddForm = true;
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.showAddForm = false;
          this.isEditing = false;
          this.editId = null;
          src_app_common__WEBPACK_IMPORTED_MODULE_7__["CommonFunction"].resetForm(this.addForm, this.formErrors);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;

          if (this.addForm.valid) {
            this.showLoader = true;
            var formData = {
              'email': this.addForm.value.email
            };

            if (this.isEditing) {
              this.subscribeservice.editSubscribe(this.editId, formData).subscribe(function (response) {
                _this4.showLoader = false;

                if (response.success) {
                  _this4.getObjects();

                  _this4.resetForm();
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('email')) {
                      _this4.formErrors['email'] = obj['email'];
                    } else {
                      _this4.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                console.log('In error', error);
                _this4.formErrors['apierror'] = "* ".concat(error.error);
                _this4.showLoader = false;
              });
            } else {
              this.subscribeservice.addSubscribe(formData).subscribe(function (response) {
                // console.log('In success', response);
                _this4.showLoader = false;

                if (response.success) {
                  _this4.resetForm();

                  _this4.getObjects();
                } else {
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('email')) {
                      _this4.formErrors['email'] = obj['email'];
                    } else {
                      _this4.formErrors['apierror'] = "* ".concat(response.error);
                    }
                  });
                }
              }, function (error) {
                console.log('In error', error);
                _this4.formErrors['apierror'] = "* ".concat(error.error);
                _this4.showLoader = false;
              });
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return SubscribeListComponent;
    }();

    SubscribeListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"]
      }, {
        type: src_app_service_subscribe_service__WEBPACK_IMPORTED_MODULE_8__["SubscribeService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    SubscribeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscribe-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./subscribe-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe-list/subscribe-list.component.html"))["default"]
    })], SubscribeListComponent);
    /***/
  },

  /***/
  "./src/app/subscribe/subscribe-list/subscribe-list.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/subscribe/subscribe-list/subscribe-list.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SubscribeListModule */

  /***/
  function srcAppSubscribeSubscribeListSubscribeListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeListModule", function () {
      return SubscribeListModule;
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


    var _subscribe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./subscribe-list.component */
    "./src/app/subscribe/subscribe-list/subscribe-list.component.ts");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts");
    /* harmony import */


    var src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/pagination/pagination.module */
    "./src/app/common/pagination/pagination.module.ts");
    /* harmony import */


    var src_app_service_subscribe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/subscribe.service */
    "./src/app/service/subscribe.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var routes = [{
      path: '',
      component: _subscribe_list_component__WEBPACK_IMPORTED_MODULE_4__["SubscribeListComponent"]
    }];

    var SubscribeListModule = function SubscribeListModule() {
      _classCallCheck(this, SubscribeListModule);
    };

    SubscribeListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_subscribe_list_component__WEBPACK_IMPORTED_MODULE_4__["SubscribeListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_5__["LoderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_app_common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      providers: [src_app_service_subscribe_service__WEBPACK_IMPORTED_MODULE_7__["SubscribeService"]]
    })], SubscribeListModule);
    /***/
  }
}]);
//# sourceMappingURL=subscribe-subscribe-list-subscribe-list-module-es5.js.map
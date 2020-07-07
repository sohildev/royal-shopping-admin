function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-review-add-customer-review-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-add/customer-review-add.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-add/customer-review-add.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerReviewCustomerReviewAddCustomerReviewAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n\n<div class=\"content\">\n    <header class=\"page-header\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto p-3\">\n                <h1>{{ isEditing ? 'Update' : 'Create' }} customer Review</h1>\n            </div>\n        </div>\n    </header>\n    <section class=\"page-content container-fluid\">\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\n            <div class=\"loader\"></div>\n        </div>\n        <div class=\"card card-tabs strache-card\">\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\n                <div class=\"card-body p-25 p-l-30 p-r-30\">\n                    <div class=\"d-flex\">\n                        <div class=\"row flex\">\n                            <div class=\"col-xl-12 mr-2 ml-2\">\n                                <div class=\"form-row \">\n                                    <div class=\"col-sm-6 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\"> Name</label>\n                                            <input type=\"text\" class=\"form-control\"\n                                                [formControl]=\"addForm.controls['name']\">\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"col-sm-6 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Email </label>\n                                            <input type=\"text\" class=\"form-control\"\n                                                [formControl]=\"addForm.controls['email']\">\n                                        </div>\n                                    </div>\n\n                                    <!-- <div class=\"col-sm-4 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Quality Rate</label>\n                                            <star-rating value=\"4\" totalstars=\"5\" checkedcolor=\"orange\"\n                                                uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\"></star-rating>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Price Rate</label>\n                                            <star-rating value=\"4\" totalstars=\"5\" checkedcolor=\"orange\"\n                                                uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\"></star-rating>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Product Rate</label>\n                                            <star-rating value=\"4\" totalstars=\"5\" checkedcolor=\"orange\"\n                                                uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\"></star-rating>\n                                        </div>\n                                    </div> -->\n\n                                    <div class=\"col-sm-6 p-2\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">subject\n                                            </label>\n                                            <input type=\"text\" class=\"form-control\"\n                                                [formControl]=\"addForm.controls['subject']\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row \">\n                                    <div class=\"col-sm-12\">\n                                        <label class=\"control-label\">Massage</label>\n                                        <textarea [formControl]=\"addForm.controls['massage']\" placeholder=\"address\"\n                                            class=\"form-control\" rows=\"3\"></textarea>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer text-right\">\n                    <div class=\"btn-list\">\n                        <button type=\"button\" [routerLink]=\"['/customer-review']\"\n                            class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\n                            <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i>\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\n                            Success</button>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/customer-review/customer-review-add/customer-review-add.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/customer-review/customer-review-add/customer-review-add.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CustomerReviewAddComponent */

  /***/
  function srcAppCustomerReviewCustomerReviewAddCustomerReviewAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerReviewAddComponent", function () {
      return CustomerReviewAddComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/customer-review.service */
    "./src/app/service/customer-review.service.ts");

    var CustomerReviewAddComponent = /*#__PURE__*/function () {
      function CustomerReviewAddComponent(router, activatedRoute, fb, customerreviewService) {
        _classCallCheck(this, CustomerReviewAddComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.customerreviewService = customerreviewService;
        this.loadingState = false;
        this.editImageUrl = null;
        this.paymentTypeList = [];
        this.showLoader = false;
        this.formErrors = {
          name: null,
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
          this.editObject();
        }

        this.addForm = fb.group({
          payment_type: [1],
          name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
          subject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          quality_rate: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          price_rate: [3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          value_rate: [4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          massage: ['']
        });
      }

      _createClass(CustomerReviewAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editObject",
        value: function editObject() {
          var _this = this;

          this.loadingState = true;
          this.customerreviewService.getCustomerReviewById(this.editId).subscribe(function (response) {
            _this.loadingState = false;

            if (response.data) {
              _this.editImageUrl = response.data.image, _this.addForm.patchValue({
                payment_type: response.data.payment_type,
                name: response.data.name,
                email: response.data.email,
                subject: response.data.subject,
                quality_rate: response.data.quality_rate,
                price_rate: response.data.price_rate,
                massage: response.data.massage
              });
            }
          }, function (error) {
            _this.loadingState = false;

            _this.router.navigateByUrl('/customer-review');
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          var reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;

          if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
          } else {
            this.removeFile();
            this.selectedFile = fileInput.target.files[0];
          }
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          this.selectedFile = null;
        }
      }, {
        key: "submitForm",
        value: function submitForm(formdata) {
          var _this2 = this;

          if (this.addForm.valid) {
            this.showLoader = true;

            if (this.isEditing) {
              this.customerreviewService.editCustomerReview(this.editId, formdata.value).subscribe(function (response) {
                _this2.showLoader = false;

                if (response.success) {
                  _this2.router.navigateByUrl('/customer-review');
                } else {
                  _this2.showLoader = false;
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('name')) {
                      _this2.formErrors.name = obj.name;
                    }
                  });
                }
              });
            } else {
              this.customerreviewService.addCustomerReview(formdata.value).subscribe(function (response) {
                _this2.showLoader = false;

                if (response.success) {
                  _this2.router.navigateByUrl('/customer-review');
                } else {
                  _this2.showLoader = false;
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('name')) {
                      _this2.formErrors.name = obj.name;
                    }
                  });
                }
              });
            }
          }
        }
      }]);

      return CustomerReviewAddComponent;
    }();

    CustomerReviewAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_customer_review_service__WEBPACK_IMPORTED_MODULE_4__["CustomerReviewService"]
      }];
    };

    CustomerReviewAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-review-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-review-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-review/customer-review-add/customer-review-add.component.html"))["default"]
    })], CustomerReviewAddComponent);
    /***/
  },

  /***/
  "./src/app/customer-review/customer-review-add/customer-review-add.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/customer-review/customer-review-add/customer-review-add.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: CustomerReviewAddModule */

  /***/
  function srcAppCustomerReviewCustomerReviewAddCustomerReviewAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerReviewAddModule", function () {
      return CustomerReviewAddModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts");
    /* harmony import */


    var _customer_review_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customer-review-add.component */
    "./src/app/customer-review/customer-review-add/customer-review-add.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js"); // import { RatingModule } from 'ng-starrating';


    var routes = [{
      path: '',
      component: _customer_review_add_component__WEBPACK_IMPORTED_MODULE_8__["CustomerReviewAddComponent"]
    }];

    var CustomerReviewAddModule = function CustomerReviewAddModule() {
      _classCallCheck(this, CustomerReviewAddModule);
    };

    CustomerReviewAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_customer_review_add_component__WEBPACK_IMPORTED_MODULE_8__["CustomerReviewAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_5__["FormValidationModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_7__["LoderModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], // RatingModule,
      _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]]
    })], CustomerReviewAddModule);
    /***/
  },

  /***/
  "./src/app/shared/directive/number.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/directive/number.directive.ts ***!
    \******************************************************/

  /*! exports provided: NumberDirective, FloatNumberDirective */

  /***/
  function srcAppSharedDirectiveNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function () {
      return FloatNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberDirective = /*#__PURE__*/function () {
      function NumberDirective(_el) {
        _classCallCheck(this, NumberDirective);

        this._el = _el;
      }

      _createClass(NumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode === 110 || e.keyCode === 190)) {
            e.preventDefault();
          }
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], NumberDirective.prototype, "onKeyDown", null);
    NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[number]'
    })], NumberDirective);

    var FloatNumberDirective = /*#__PURE__*/function () {
      function FloatNumberDirective(_el) {
        _classCallCheck(this, FloatNumberDirective);

        this._el = _el;
      }

      _createClass(FloatNumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
          }
        }
      }]);

      return FloatNumberDirective;
    }();

    FloatNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], FloatNumberDirective.prototype, "onKeyDown", null);
    FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[floatNumber]'
    })], FloatNumberDirective);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/number.directive */
    "./src/app/shared/directive/number.directive.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=customer-review-add-customer-review-add-module-es5.js.map
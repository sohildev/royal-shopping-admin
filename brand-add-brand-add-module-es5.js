function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-add-brand-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-add/brand-add.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-add/brand-add.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrandBrandAddBrandAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<loder [show]=\"loadingState\"></loder>\n\n<div class=\"content\">\n    <header class=\"page-header\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto p-3\">\n                <h1>{{ isEditing ? 'Update' : 'Create' }} Brand</h1>\n            </div>\n        </div>\n    </header>\n    <section class=\"page-content container-fluid\">\n        <div class=\"lorder-wrap\" *ngIf=\"loadingState\">\n            <div class=\"loader\"></div>\n        </div>\n        <div class=\"card card-tabs strache-card\">\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\n                <div class=\"card-body p-25 p-l-30 p-r-30\">\n                    <div class=\"d-flex\">\n                        <div class=\"left-form-content m-l-20 m-r-40\">\n                            <div class=\"clearfix\">\n                                <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                                    <div class=\"btn-file mt-3\">\n                                        <div class=\"thumbnail fileinput-new  rounded-circle\" style=\"width: 150px; height: 150px;\">\n                                            <img [src]=\"editImageUrl ? editImageUrl : 'assets/images/demo.png'\" alt=\"\">\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                        <button class=\"fileinput-new btn btn-secondary btn-sm btn-file mt-3\"> Browse Image </button>\n                                        <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\" file-model=\"myFile\">\n                                        <div class=\"fileinput-preview fileinput-exists thumbnail  rounded-circle\" style=\"width: 150px; height: 150px;\"></div>\n                                    </div>\n                                    <div class=\"text-center\">\n                                        <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\" data-dismiss=\"fileinput\">Remove</a>\n                                    </div>\n                                    <div class=\"clearfix mt-3\">\n                                        <p class=\"upload-img-label text-muted font-size-12\">*Recommended Size:<br>Minimum 250 * 250</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row flex\">\n                            <div class=\"col-xl-12 \" style=\"margin-left:25px ;\">\n                                <div class=\"form-row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Name</label>\n                                            <input type=\"text\" class=\"form-control\" [formControl]=\"addForm.controls['name']\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Category</label>\n                                            <ng-select [formControl]=\"addForm.controls['category_id']\" [items]=\"categoryList\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"-- Select a Category --\"></ng-select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Brand Url</label>\n                                            <input type=\"text\" class=\"form-control\" [formControl]=\"addForm.controls['brand_url']\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">Brand Text</label>\n                                            <div class=\"input-group\">\n                                                <textarea class=\"form-control\" [formControl]=\"addForm.controls['brand_sub_text']\" rows=\"2\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer text-right\">\n                    <div class=\"btn-list\">\n                        <button type=\"button\" [routerLink]=\"['/brand']\" class=\"btn btn-outline-secondary  btn-rounded\"><i class=\"fas fa-times\"></i> Cancel</button>\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-outline-success btn-rounded\">\n                            <i *ngIf=\"!showLoader\"class=\"fas fa-check\"></i>\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\n                            Success</button>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./src/app/brand/brand-add/brand-add.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/brand/brand-add/brand-add.component.ts ***!
    \********************************************************/

  /*! exports provided: BrandAddComponent */

  /***/
  function srcAppBrandBrandAddBrandAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandAddComponent", function () {
      return BrandAddComponent;
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


    var src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/brand.service */
    "./src/app/service/brand.service.ts");
    /* harmony import */


    var src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/drop-down.service */
    "./src/app/service/drop-down.service.ts");

    var BrandAddComponent = /*#__PURE__*/function () {
      function BrandAddComponent(router, activatedRoute, fb, companyService, dropdownService) {
        _classCallCheck(this, BrandAddComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.companyService = companyService;
        this.dropdownService = dropdownService;
        this.loadingState = false;
        this.editImageUrl = null;
        this.showLoader = false;
        this.formErrors = {
          email: null,
          name: null,
          image: null,
          phone_number: null,
          apierror: null
        };
        this.isEditing = false;
        this.editId = null;
        this.categoryList = [];

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
          this.editObject();
        }

        this.addForm = fb.group({
          name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          category_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          brand_url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          brand_sub_text: ['']
        });
      }

      _createClass(BrandAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategoryList();
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this = this;

          this.dropdownService.getCategoryDrp().subscribe(function (res) {
            if (res.success) {
              _this.categoryList = res.data ? res.data : [];
            }
          });
        }
      }, {
        key: "editObject",
        value: function editObject() {
          var _this2 = this;

          this.loadingState = true;
          this.companyService.getBrandById(this.editId).subscribe(function (response) {
            _this2.loadingState = false;

            if (response.data) {
              _this2.editImageUrl = response.data.image, _this2.addForm.patchValue({
                name: response.data.name,
                category_id: response.data.category_id,
                brand_url: response.data.brand_url,
                brand_sub_text: response.data.brand_sub_text
              });
            }
          }, function (error) {
            _this2.loadingState = false;

            _this2.router.navigateByUrl('/brand');
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
          var _this3 = this;

          if (this.addForm.valid) {
            this.showLoader = true;
            var formData = new FormData();
            formData.append('brand_url', formdata.value.brand_url);
            formData.append('name', formdata.value.name);
            formData.append('category_id', formdata.value.category_id);
            formData.append('brand_sub_text', formdata.value.brand_sub_text);

            if (this.selectedFile) {
              formData.append('file', this.selectedFile);
            }

            if (this.isEditing) {
              this.companyService.editBrand(this.editId, formData).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/brand');
                } else {
                  _this3.showLoader = false;
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('name')) {
                      _this3.formErrors.name = obj.name;
                    }
                  });
                }
              });
            } else {
              this.companyService.addBrand(formData).subscribe(function (response) {
                _this3.showLoader = false;

                if (response.success) {
                  _this3.router.navigateByUrl('/brand');
                } else {
                  _this3.showLoader = false;
                  response.error.map(function (obj) {
                    if (obj.hasOwnProperty('name')) {
                      _this3.formErrors.name = obj.name;
                    }
                  });
                }
              });
            }
          }
        }
      }]);

      return BrandAddComponent;
    }();

    BrandAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_4__["BrandService"]
      }, {
        type: src_app_service_drop_down_service__WEBPACK_IMPORTED_MODULE_5__["DropDownService"]
      }];
    };

    BrandAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brand-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./brand-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand-add/brand-add.component.html"))["default"]
    })], BrandAddComponent);
    /***/
  },

  /***/
  "./src/app/brand/brand-add/brand-add.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/brand/brand-add/brand-add.module.ts ***!
    \*****************************************************/

  /*! exports provided: BrandAddModule */

  /***/
  function srcAppBrandBrandAddBrandAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandAddModule", function () {
      return BrandAddModule;
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


    var _brand_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./brand-add.component */
    "./src/app/brand/brand-add/brand-add.component.ts");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/common/loder/loder.module */
    "./src/app/common/loder/loder.module.ts"); // import { Ng2FlatpickrModule } from 'ng2-flatpickr';
    // import { NgSelectModule } from '@ng-select/ng-select';


    var routes = [{
      path: '',
      component: _brand_add_component__WEBPACK_IMPORTED_MODULE_5__["BrandAddComponent"]
    }];

    var BrandAddModule = function BrandAddModule() {
      _classCallCheck(this, BrandAddModule);
    };

    BrandAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_brand_add_component__WEBPACK_IMPORTED_MODULE_5__["BrandAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_common_loder_loder_module__WEBPACK_IMPORTED_MODULE_9__["LoderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]]
    })], BrandAddModule);
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
//# sourceMappingURL=brand-add-brand-add-module-es5.js.map
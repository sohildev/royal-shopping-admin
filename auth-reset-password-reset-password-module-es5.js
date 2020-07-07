function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reset-password-reset-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <form class=\"sign-in-form\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"submitForm()\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"brand text-center d-block m-b-30 m-t-20\">\r\n          <!-- <img src=\"assets/logo-login.svg\" alt=\"DigiPayWallet Logo\" style=\"width: 150px\"> -->\r\n        </div>\r\n        <h1 class=\"sign-in-heading text-center\">Forgotten Password?</h1>\r\n        <p class=\"text-center m-b-20 text-muted\">Enter your email address below, and we'll email instructions for\r\n          setting a new one.</p>\r\n        <div *ngIf=\"formErrors.error\" class=\"alert alert-danger alert-dismissible\">\r\n          <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n          <span [innerHTML]=\"formErrors.error\"> </span>\r\n        </div>\r\n        <div *ngIf=\"formErrors.success\" class=\"alert alert-success alert-dismissible\">\r\n          <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n          <span [innerHTML]=\"formErrors.success\"> </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputPassword\" class=\"sr-only\">New Password</label>\r\n          <input type=\"password\" [formControl]=\"resetPasswordForm.controls['password']\" class=\"form-control input-lg\" placeholder=\"New password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputconfirmpassword\" class=\"sr-only\">Password</label>\r\n          <input type=\"password\" [formControl]=\"resetPasswordForm.controls['confirm_password']\" class=\"form-control input-lg\" placeholder=\"Confirm password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block m-top-24\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n          [disabled]=\"showLoader\">\r\n          Reset Password\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppAuthResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/config.service */
    "./src/app/service/config.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(config, router, activatedRoute, authService, fBuilder) {
        _classCallCheck(this, ResetPasswordComponent);

        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.fBuilder = fBuilder;
        this.formErrors = {
          error: null,
          success: null
        };
        this.showLoader = false;
        this.token = null;
        this.config.config = {
          showHeader: false
        };
        this.token = this.activatedRoute.snapshot.paramMap.get('token');
        this.resetPasswordForm = this.fBuilder.group({
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        }, {
          validator: src_app_common__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].passwordValidation()
        });
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.checkResetPasswordToken(this.token).subscribe(function (response) {
            if (response.success) {} else {
              _this.router.navigateByUrl('/link-expired');
            }
          }, function (error) {
            _this.router.navigateByUrl('/link-expired');
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this2 = this;

          if (this.resetPasswordForm.valid) {
            this.showLoader = true;
            var formData = {
              password: this.resetPasswordForm.value.password,
              confirm_password: this.resetPasswordForm.value.confirm_password
            };
            this.authService.resetPassword(this.token, formData).subscribe(function (response) {
              // console.log('In success', response);
              _this2.showLoader = false;

              if (response.success) {
                _this2.formErrors.success = "* ".concat(response.message);
                src_app_common__WEBPACK_IMPORTED_MODULE_6__["CommonFunction"].resetForm(_this2.resetPasswordForm);
                setTimeout(function () {
                  _this2.router.navigateByUrl('/login');
                }, 3000);
              } else {
                _this2.formErrors.error = "* ".concat(response.error);
              }
            }, function (error) {
              // console.log('In error', error);
              _this2.formErrors.error = "* ".concat(error.error);
              _this2.showLoader = false;
            });
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html"))["default"]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/auth/reset-password/reset-password.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/auth/reset-password/reset-password.module.ts ***!
    \**************************************************************/

  /*! exports provided: ResetPasswordModule */

  /***/
  function srcAppAuthResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
      return ResetPasswordModule;
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


    var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-password.component */
    "./src/app/auth/reset-password/reset-password.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/auth.service */
    "./src/app/service/auth.service.ts");

    var routes = [{
      path: '',
      component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"],
      data: {
        title: 'reset_password'
      }
    }];

    var ResetPasswordModule = function ResetPasswordModule() {
      _classCallCheck(this, ResetPasswordModule);
    };

    ResetPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      providers: [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]]
    })], ResetPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=auth-reset-password-reset-password-module-es5.js.map
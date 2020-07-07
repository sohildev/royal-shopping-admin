function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n    @font-face {\r\n        font-display: block;\r\n        font-family: Roboto;\r\n        src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format(\"woff2\"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format(\"woff\")\r\n    }\r\n\r\n    @font-face {\r\n        font-display: fallback;\r\n        font-family: Roboto;\r\n        font-weight: 600;\r\n        src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format(\"woff2\"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format(\"woff\")\r\n    }\r\n\r\n    @font-face {\r\n        font-display: fallback;\r\n        font-family: Roboto;\r\n        font-weight: 700;\r\n        src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format(\"woff2\"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format(\"woff\")\r\n    }\r\n\r\n    #sib-container input:-ms-input-placeholder {\r\n        text-align: left;\r\n        font-family: \"Helvetica\", sans-serif;\r\n        color: #c0ccda;\r\n        border-width: px;\r\n    }\r\n\r\n    #sib-container input::placeholder {\r\n        text-align: left;\r\n        font-family: \"Helvetica\", sans-serif;\r\n        color: #c0ccda;\r\n        border-width: px;\r\n    }\r\n\r\n    #progressbar {\r\n        margin-bottom: 30px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    #progressbar li {\r\n        list-style-type: none;\r\n        color: #ee0979;\r\n        text-transform: uppercase;\r\n        font-size: 9px;\r\n        width: 33.33%;\r\n        float: left;\r\n        position: relative;\r\n        letter-spacing: 1px;\r\n    }\r\n\r\n    #progressbar li:before {\r\n        content: '';\r\n        width: 24px;\r\n        height: 24px;\r\n        line-height: 26px;\r\n        display: block;\r\n        font-size: 12px;\r\n        color: orange;\r\n        background: pink;\r\n        border-radius: 25px;\r\n        margin: 0 auto 10px auto;\r\n    }\r\n\r\n    #progressbar li:after {\r\n        content: '';\r\n        width: 100%;\r\n        height: 2px;\r\n        background: #ee0979;\r\n        position: absolute;\r\n        left: -50%;\r\n        top: 9px;\r\n    }\r\n\r\n    #progressbar li:first-child:after {\r\n        content: none;\r\n    }\r\n\r\n    #progressbar li.active:before,\r\n    #progressbar li.active:after {\r\n        background: #ee0979;\r\n        color: #ee0979;\r\n    }\r\n</style>\r\n\r\n\r\n<!-- ============================================================== -->\r\n<!-- Main wrapper -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" class=\"landingpage-fonts bg-white\">\r\n    <!-- ============================================================== -->\r\n    <!-- Header part -->\r\n    <!-- ============================================================== -->\r\n    <header class=\"topbar-v2 bg-white\">\r\n        <div class=\"container bg-banner\">\r\n            <!-- Start Header -->\r\n            <div class=\"header\">\r\n                <nav class=\"navbar navbar-expand-md navbar-light px-lg-0\">\r\n                    <a class=\"navbar-brand pr-0 pr-md-3 mr-0\" href=\"#\">\r\n                        <img src=\"assets/images/landingpage/logo.png\" class=\"brand-img\" alt=\"logo\">\r\n                    </a>\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item border-left mt-1\">\r\n                            <a class=\"nav-link py-0 d-flex align-items-center\" routerLink=\"/dashboard\">\r\n                                <i data-feather=\"file-text\" class=\"data-icon mr-2 ml-2 ml-md-0\"></i>\r\n                                <span class=\"font-tofino-medium font-16\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <div class=\"row header-banner align-items-start\">\r\n                    <div class=\"col-lg-5 mt-5 pt-0 pt-lg-5\">\r\n                        <h2 class=\"font-gilmer-heavy feature-title\">Build Web Application or Dashboard Faster with\r\n                            AdminMart</h2>\r\n                        <h4 class=\"text-muted font-tofino-book mt-4 custom-lh\">Free Bootstrap4 Admin theme built with\r\n                            html/css, ready to use for your next project.</h4>\r\n                        <div class=\"pt-4 pb-4\">\r\n\r\n                            <a (click)=\"showRegistr()\"\r\n                                class=\"btn btn-custom btn-info btn-shadow-v1 downloadcount123 font-tofino-medium\"\r\n                                data-toggle=\"modal\" data-target=\"#download-modal\">\r\n                                <i data-feather=\"download\" class=\"data-icon mr-2 mb-1\"></i> Register Now</a>\r\n                            <a target=\"_blank\"\r\n                                class=\"text-decoration-none font-17 text-dark ml-4 font-tofino-medium border-bottom border-dark\">Live\r\n                                Preview</a>\r\n                        </div>\r\n\r\n                        <div class=\"d-flex align-items-center mt-4 justify-content-center justify-content-lg-start\">\r\n                            <img src=\"assets/images/landingpage/brand-logos.png\" alt=\"logos\" />\r\n                        </div>\r\n                        <div class=\"mt-4 pt-2\">Total Downloads : <span class=\"badge badge-pill bg-light\"><i\r\n                                    class=\"fa fa-download p-1\"></i> <span id=\"counter\">786</span></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-7\">\r\n                        <img class=\"banner-img mt-md-4 mt-lg-0\" src=\"assets/images/landingpage/banne-img.png\" alt=\"db\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- End Header -->\r\n        </div>\r\n    </header>\r\n    <!-- ============================================================== -->\r\n    <!-- Header part -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper part -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Listing part -->\r\n        <!-- ============================================================== -->\r\n\r\n        <section>\r\n            <div class=\"container bg-section py-5 my-0 my-lg-4\">\r\n                <div class=\"row mt-0 mt-md-5\">\r\n                    <div class=\"col-lg-8\">\r\n                        <img src=\"assets/images/landingpage/section-img.png\" class=\"img-fluid pr-4 mr-2\">\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                        <h2 class=\"font-gilmer-heavy mt-4 mt-lg-0 feature-title\">Clean and Modern User Interface with\r\n                            Easy to Use Code</h2>\r\n                        <h4 class=\"text-muted font-tofino-book mt-4 custom-lh\">Free Bootstrap4 Admin theme built with\r\n                            html/css, ready to use for your next project.</h4>\r\n                        <ul class=\"list-unstyled my-4 feature-list\">\r\n                            <li class=\"font-tofino-regular font-15 my-1\"><i data-feather=\"check-circle\"\r\n                                    class=\"stroke-primary list-icon mr-2\"></i> Minimal base Design\r\n                            </li>\r\n                            <li class=\"font-tofino-regular font-15 my-1\"><i data-feather=\"check-circle\"\r\n                                    class=\"stroke-primary list-icon mr-2\"></i> Latest Bootstrap Version\r\n                            </li>\r\n                            <li class=\"font-tofino-regular font-15 my-1\"><i data-feather=\"check-circle\"\r\n                                    class=\"stroke-primary list-icon mr-2\"></i> 25+ Page Templates</li>\r\n                            <li class=\"font-tofino-regular font-15 my-1\"><i data-feather=\"check-circle\"\r\n                                    class=\"stroke-primary list-icon mr-2\"></i> 5+ Table & Form Explamples</li>\r\n                            <li class=\"font-tofino-regular font-15 my-1\"><i data-feather=\"check-circle\"\r\n                                    class=\"stroke-primary list-icon mr-2\"></i> 5+ Chart Examples & Lots more...</li>\r\n                        </ul>\r\n                        <div class=\"pt-3 pb-4\">\r\n                            <a (click)=\"showLogin()\"\r\n                                class=\"btn downloadcount123 btn-custom btn-info btn-shadow-v1 font-tofino-medium\"\r\n                                data-toggle=\"modal\" data-target=\"#download-modal\">\r\n                                <i data-feather=\"download\" class=\"data-icon mr-2 mb-1\"></i> SignIn</a>\r\n                            <a target=\"_blank\"\r\n                                class=\"text-decoration-none text-dark font-17 ml-4 font-tofino-medium border-bottom border-dark\">Live\r\n                                Preview</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- ============================================================== -->\r\n        <!-- why project section part -->\r\n        <!-- ============================================================== -->\r\n        <section class=\"py-5 my-0 my-lg-4 position-relative\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\">\r\n                        <h1 class=\"font-gilmer-heavy\">Why choose AdminMart for your Project?</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row mt-5 bg-section-v2\">\r\n                    <div class=\"col-lg-5\">\r\n                        <div class=\"\">\r\n                            <div class=\"card card-custom-shadow\">\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"d-flex p-3\">\r\n                                        <div class=\"pr-4\"><span class=\"icon2 feature-icon feature-icon1\"></span></div>\r\n                                        <div class=\"\">\r\n                                            <h6 class=\"font-18\">Free for Commercial Projects</h6>\r\n                                            <p class=\"font-tofino-regular mt-4 mb-0\">The design effort we put & the team\r\n                                                we world class. Our all template.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card card-custom-shadow\">\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"d-flex p-3\">\r\n                                        <div class=\"pr-4\"><span class=\"icon2 feature-icon feature-icon4\"></span></div>\r\n                                        <div class=\"\">\r\n                                            <h6 class=\"font-18\">Lifetime Free Updates</h6>\r\n                                            <p class=\"font-tofino-regular mt-4 mb-0\">The design effort we put & the team\r\n                                                we world class. Our all template.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card card-custom-shadow\">\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"d-flex p-3\">\r\n                                        <div class=\"pr-4\"><span class=\"icon2 feature-icon feature-icon2\"></span></div>\r\n                                        <div class=\"\">\r\n                                            <h6 class=\"font-18\">Ready to Use Elements</h6>\r\n                                            <p class=\"font-tofino-regular mt-4 mb-0\">The design effort we put & the team\r\n                                                we world class. Our all template.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-7 pl-4\">\r\n                        <img src=\"assets/images/landingpage/right-img.png\" class=\"feature-img ml-3 pl-1\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- ============================================================== -->\r\n        <!-- updation part -->\r\n        <!-- ============================================================== -->\r\n        <section class=\"py-4 border-top border-bottom\">\r\n            <div class=\"container\">\r\n                <div class=\"d-block d-lg-flex justify-content-between align-items-center\">\r\n                    <div class=\"text-center py-3 py-lg-0\">\r\n                        <span class=\"font-tofino-regular\">Released 15th June, 2019</span>\r\n                    </div>\r\n                    <div class=\"text-center py-3 py-lg-0\">\r\n                        <span class=\"font-tofino-regular\">Updated 15th June, 2019</span>\r\n                    </div>\r\n                    <div class=\"text-center py-3 py-lg-0\">\r\n                        <span class=\"font-tofino-regular\">Bootstrap Version 4.3.1</span>\r\n                    </div>\r\n                    <div class=\"text-center py-3 py-lg-0\">\r\n                        <span class=\"font-tofino-regular\">License <a href=\"#\"\r\n                                class=\"text-decoration-none border-bottom border-info ml-2\">MIT License</a></span>\r\n                    </div>\r\n                    <div class=\"text-center py-3 py-lg-0\">\r\n                        <span class=\"font-tofino-regular\"><a href=\"#\"\r\n                                class=\"text-decoration-none border-bottom border-info ml-2\">View Change Log</a></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- ============================================================== -->\r\n        <!-- Link section -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"my-5 text-center\">\r\n            <a (click)=\"showRegistr()\" class=\"btn btn-custom btn-info downloadcount123 btn-shadow-v1 font-tofino-medium\"\r\n                data-toggle=\"modal\" data-target=\"#download-modal\">\r\n                <i data-feather=\"download\" class=\"data-icon mr-2 mb-1\"></i> Register Now</a>\r\n            <a target=\"_blank\"\r\n                class=\"text-decoration-none text-dark font-17 ml-4 font-tofino-medium border-bottom border-dark\">Live\r\n                Preview</a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- para section -->\r\n        <!-- ============================================================== -->\r\n        <section class=\"py-5\">\r\n            <div class=\"container text-center\">\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-md-11\">\r\n                        <p class=\"font-tofino-regular font-18\">Are you looking for the best premium or <a href=\"#\"\r\n                                class=\"text-dark font-tofino-medium\">free Bootstrap Admin Templates</a>, UI Kits or\r\n                            Angular Dashboards for your projects? You are in the right place, as <a\r\n                                href=\"https://www.wrappixel.com/\" class=\"text-dark font-tofino-medium\">WrapPixel is here\r\n                                to offer you all of that and so much more</a>. You can find a variety of templates,\r\n                            bundles and a great number of features. In addition, you can get free as well as paid\r\n                            templates very fast.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <!-- Footer section -->\r\n        <footer class=\"py-4\">\r\n            <p class=\"mb-0 text-center\">\r\n                copyright 2019. All rights reserved by AdminMart.\r\n            </p>\r\n        </footer>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End page wrapperHeader part -->\r\n    <!-- ============================================================== -->\r\n</div>\r\n\r\n\r\n\r\n<!-- SignIn modal content -->\r\n<div id=\"login-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"text-center mt-2 mb-4\">\r\n                    <a href=\"index.html\" class=\"text-success\">\r\n                        <span><img class=\"mr-2\" src=\"../assets/images/logo-icon.png\" alt=\"\" height=\"18\"><img\r\n                                src=\"../assets/images/logo-text.png\" alt=\"\" height=\"18\"></span>\r\n                    </a>\r\n                </div>\r\n\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" action=\"#\" class=\"pl-3 pr-3\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"emailaddress1\">Email address</label>\r\n                        <input [formControl]=\"loginForm.controls['email']\" class=\"form-control\" type=\"email\"\r\n                            id=\"emailaddress1\" required=\"\" placeholder=\"john@deo.com\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password1\">Password</label>\r\n                        <input [formControl]=\"loginForm.controls['password']\" class=\"form-control\" type=\"password\"\r\n                            required=\"\" id=\"password1\" placeholder=\"Enter your password\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck2\">Remember me</label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group text-center\">\r\n                        <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-rounded btn-primary\">\r\n                            <!-- <i *ngIf=\"!showLoader\" class=\"fas fa-check\"></i> -->\r\n                            <i *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\"></i>\r\n                            Sign\r\n                            In</button>\r\n                        <br><a data-dismiss=\"modal\" aria-hidden=\"true\">forgot-password</a>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n\r\n\r\n<!-- Signup modal content -->\r\n<div id=\"signup-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"text-center mt-2 mb-4\">\r\n                    <a href=\"index.html\" class=\"text-success\">\r\n                        <span><img class=\"mr-2\" src=\"../assets/images/logo-icon.png\" alt=\"\" height=\"18\"><img\r\n                                src=\"../assets/images/logo-text.png\" alt=\"\" height=\"18\"></span>\r\n                    </a>\r\n                </div>\r\n\r\n                <form class=\"pl-3 pr-3\" action=\"#\">\r\n                    <!-- progressbar -->\r\n                    <ul id=\"progressbar\">\r\n                        <li class=\"active\">Personal Details</li>\r\n                        <li class=\"active\">Social Profiles</li>\r\n                        <li>Account Setup</li>\r\n                    </ul>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">Name</label>\r\n                        <input class=\"form-control\" type=\"email\" id=\"username\" required=\"\" placeholder=\"Michael Zenaty\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"emailaddress\">Email address</label>\r\n                        <input class=\"form-control\" type=\"email\" id=\"emailaddress\" required=\"\"\r\n                            placeholder=\"john@deo.com\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input class=\"form-control\" type=\"password\" required=\"\" id=\"password\"\r\n                            placeholder=\"Enter your password\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">I\r\n                                accept <a href=\"#\">Terms and Conditions</a></label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Sign Up\r\n                            Free</button>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n<!-- Full width modal content -->\r\n<div id=\"full-width-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fullWidthModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-full-width\">\r\n        <div class=\"modal-content\">\r\n            <form>\r\n                <div class=\"modal-header\">\r\n                    <div class=\"text-center mt-2 \">\r\n                        <a href=\"index.html\" class=\"text-success\">\r\n                            <span><img class=\"mr-2\" src=\"../assets/images/logo-icon.png\" alt=\"\" height=\"18\"><img\r\n                                    src=\"../assets/images/logo-text.png\" alt=\"\" height=\"18\"></span>\r\n                        </a>\r\n                    </div>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n\r\n                </div>\r\n                <!-- <div class=\"modal-body\"> -->\r\n\r\n                <ul id=\"progressbar\">\r\n                    <li class=\"active\">Personal Details</li>\r\n                    <li class=\"active\">Social Profiles</li>\r\n                    <li>Account Setup</li>\r\n\r\n                </ul>\r\n\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputEmail4\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputPassword4\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputAddress\">Address</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputAddress2\">Address 2</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\"\r\n                        placeholder=\"Apartment, studio, or floor\">\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputCity\">City</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputCity\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"inputState\">State</label>\r\n                        <select id=\"inputState\" class=\"form-control\">\r\n                            <option selected>Choose...</option>\r\n                            <option>...</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col-md-2\">\r\n                        <label for=\"inputZip\">Zip</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputZip\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-check\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\r\n                        <label class=\"form-check-label\" for=\"gridCheck\">\r\n                            Check me out\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!-- </div> -->\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(config, router, activatedRoute, authService, commonService, fBuilder, dataService) {
        _classCallCheck(this, LoginComponent);

        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.commonService = commonService;
        this.fBuilder = fBuilder;
        this.dataService = dataService;
        this.formErrors = {
          apierror: null
        };
        this.showLoader = false;
        this.currentCompany = null;
        this.config.config = {
          showHeader: false
        };
        this.loginForm = this.fBuilder.group({
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_common__WEBPACK_IMPORTED_MODULE_6__["validateEmailFormControl"]])],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        }); // this.dataService.currentCompany.subscribe(response => {
        //   // console.log(response);
        //   this.currentCompany = response;
        // });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.commonService.checkDomain(window.location.hostname).subscribe((response: any) => {
          //   if (response.success) {
          //     this.currentCompany = response.data;
          //   }
          // });
        }
      }, {
        key: "showLogin",
        value: function showLogin() {
          $('#login-modal').modal('show');
        }
      }, {
        key: "showRegistr",
        value: function showRegistr() {
          // $('#signup-modal').modal('show');
          $('#full-width-modal').modal('show');
        }
      }, {
        key: "showfull",
        value: function showfull() {}
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this = this;

          if (this.loginForm.valid) {
            this.showLoader = true;
            var formData = {
              email: this.loginForm.value.email.toLowerCase(),
              password: this.loginForm.value.password,
              remember_me: this.loginForm.value.remember_me
            };
            this.authService.login(formData).subscribe(function (response) {
              console.log('In success', response);
              $('#login-modal').modal('hide');
              _this.showLoader = false;

              if (response.success) {
                src_app_common__WEBPACK_IMPORTED_MODULE_6__["CommonFunction"].resetForm(_this.loginForm);
                var user = response.data.User;

                _this.dataService.setAuth(response.data);

                if (user.company_id) {
                  _this.getCompany(user.company_id);
                } else {
                  _this.dataService.purgeAuth();

                  _this.router.navigateByUrl('/dashboard');
                }

                _this.config.config = {
                  showHeader: true
                };

                _this.activatedRoute.snapshot.queryParamMap.get('next');

                var nextURL = _this.activatedRoute.snapshot.queryParamMap.get('next') ? _this.activatedRoute.snapshot.queryParamMap.get('next') : '/dashboard';

                _this.router.navigateByUrl(nextURL);

                window.location.reload();
              } else {
                _this.formErrors.apierror = "* ".concat(response.error);
              }
            }, function (error) {
              // console.log('In error', error);
              _this.formErrors.apierror = "* ".concat(error.error);
              _this.showLoader = false;
            });
          }
        }
      }, {
        key: "getCompany",
        value: function getCompany(id) {
          var _this2 = this;

          this.commonService.selectCompany(id).subscribe(function (response) {
            if (response.success) {
              _this2.dataService.updateCompany(response.data.company);
            }
          }, function (error) {
            _this2.dataService.purgeAuth();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/login/login.module.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/login/login.module.ts ***!
    \********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      data: {
        title: 'login'
      }
    }];

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      providers: [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=auth-login-login-module-es5.js.map
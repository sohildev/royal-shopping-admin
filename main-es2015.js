(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"customConfig?.showHeader; else elseTemplate\">\r\n    <div id=\"main-wrapper\" data-theme=\"light\" data-layout=\"vertical\" data-navbarbg=\"skin6\" data-sidebartype=\"full\" data-sidebar-position=\"fixed\" data-header-position=\"fixed\" data-boxed-layout=\"mini-sidebar\" class=\" mini-sidebar\">\r\n        <app-header></app-header>\r\n        <div class=\"page-wrapper\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n    <router-outlet></router-outlet>\r\n</ng-template>\r\n\r\n<!-- data-sidebartype=\"mini-sidebar\"  =>full\r\nclass=\"show-sidebar mini-sidebar\"\r\nti-close ti-menu\r\n\r\n    data-navbarbg=\"skin6\" data-sidebartype=\"full\" \r\ndata-sidebartype=\"mini-sidebar\"\r\n -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ============================================================== -->\r\n<!-- Topbar header - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<header class=\"topbar\" data-navbarbg=\"skin6\">\r\n    <nav class=\"navbar top-navbar navbar-expand-md\">\r\n        <div class=\"navbar-header\" data-logobg=\"skin6\">\r\n            <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n            <a class=\"nav-toggler waves-effect waves-light d-block d-md-none\" href=\"javascript:void(0)\"><i\r\n                    class=\"ti-menu ti-close\"></i></a>\r\n            <!-- ============================================================== -->\r\n            <!-- Logo -->\r\n            <!-- ============================================================== -->\r\n            <div class=\"navbar-brand\">\r\n                <!-- Logo icon -->\r\n                <a href=\"index.html\">\r\n                    <b class=\"logo-icon\">\r\n                        <!-- Dark Logo icon -->\r\n                        <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                        <!-- Light Logo icon -->\r\n                        <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"light-logo\" />\r\n                    </b>\r\n                    <!--End Logo icon -->\r\n                    <!-- Logo text -->\r\n                    <span class=\"logo-text\">\r\n                        <h2 class=\"dark-logo\" style=\"color: black;\"> <strong>{{currentCompanyDetail?.name}}</strong>\r\n                        </h2>\r\n                        <!-- dark Logo text -->\r\n                        <!-- <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" /> -->\r\n                        <!-- Light Logo text -->\r\n                        <!-- <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" /> -->\r\n                    </span>\r\n                </a>\r\n            </div>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <!-- ============================================================== -->\r\n            <!-- Toggle which is visible on mobile only -->\r\n            <!-- ============================================================== -->\r\n            <a class=\"topbartoggler d-block d-md-none waves-effect waves-light\" href=\"javascript:void(0)\"\r\n                data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\"><i class=\"ti-more\"></i></a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Logo -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\">\r\n            <!-- ============================================================== -->\r\n            <!-- toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav float-left mr-auto ml-3 pl-1\">\r\n                <!-- Notification -->\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle pl-md-3 position-relative\" href=\"javascript:void(0)\" id=\"bell\"\r\n                        role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span><i data-feather=\"bell\" class=\"svg-icon\"></i></span>\r\n                        <span class=\"badge badge-primary notify-no rounded-circle\">5</span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-left mailbox animated bounceInDown\">\r\n                        <ul class=\"list-style-none\">\r\n                            <li>\r\n                                <div class=\"message-center notifications position-relative\">\r\n                                    <!-- Message -->\r\n                                    <a href=\"javascript:void(0)\"\r\n                                        class=\"message-item d-flex align-items-center border-bottom px-3 py-2\">\r\n                                        <div class=\"btn btn-danger rounded-circle btn-circle\"><i data-feather=\"airplay\"\r\n                                                class=\"text-white\"></i></div>\r\n                                        <div class=\"w-75 d-inline-block v-middle pl-2\">\r\n                                            <h6 class=\"message-title mb-0 mt-1\">Luanch Admin</h6>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted\">Just see\r\n                                                the my new\r\n                                                admin!</span>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted\">9:30 AM</span>\r\n                                        </div>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"javascript:void(0)\"\r\n                                        class=\"message-item d-flex align-items-center border-bottom px-3 py-2\">\r\n                                        <span class=\"btn btn-success text-white rounded-circle btn-circle\"><i\r\n                                                data-feather=\"calendar\" class=\"text-white\"></i></span>\r\n                                        <div class=\"w-75 d-inline-block v-middle pl-2\">\r\n                                            <h6 class=\"message-title mb-0 mt-1\">Event today</h6>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted text-truncate\">Just\r\n                                                a reminder that you have event</span>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted\">9:10 AM</span>\r\n                                        </div>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"javascript:void(0)\"\r\n                                        class=\"message-item d-flex align-items-center border-bottom px-3 py-2\">\r\n                                        <span class=\"btn btn-info rounded-circle btn-circle\"><i data-feather=\"settings\"\r\n                                                class=\"text-white\"></i></span>\r\n                                        <div class=\"w-75 d-inline-block v-middle pl-2\">\r\n                                            <h6 class=\"message-title mb-0 mt-1\">Settings</h6>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted text-truncate\">You\r\n                                                can customize this template\r\n                                                as you want</span>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted\">9:08 AM</span>\r\n                                        </div>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"javascript:void(0)\"\r\n                                        class=\"message-item d-flex align-items-center border-bottom px-3 py-2\">\r\n                                        <span class=\"btn btn-primary rounded-circle btn-circle\"><i data-feather=\"box\"\r\n                                                class=\"text-white\"></i></span>\r\n                                        <div class=\"w-75 d-inline-block v-middle pl-2\">\r\n                                            <h6 class=\"message-title mb-0 mt-1\">Pavan kumar</h6> <span\r\n                                                class=\"font-12 text-nowrap d-block text-muted\">Just\r\n                                                see the my admin!</span>\r\n                                            <span class=\"font-12 text-nowrap d-block text-muted\">9:02 AM</span>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <a class=\"nav-link pt-3 text-center text-dark\" href=\"javascript:void(0);\">\r\n                                    <strong>Check all notifications</strong>\r\n                                    <i class=\"fa fa-angle-right\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <!-- End Notification -->\r\n                <!-- ============================================================== -->\r\n                <!-- create new -->\r\n                <!-- ============================================================== -->\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i data-feather=\"settings\" class=\"svg-icon\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item d-none d-md-block\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <div class=\"customize-input\">\r\n                            <select class=\"custom-select form-control bg-white custom-radius custom-shadow border-0\">\r\n                                <option selected>EN</option>\r\n                                <option value=\"1\">AB</option>\r\n                                <option value=\"2\">AK</option>\r\n                                <option value=\"3\">BE</option>\r\n                            </select>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- ============================================================== -->\r\n            <!-- Right side toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav float-right\">\r\n                <!-- ============================================================== -->\r\n                <!-- Search -->\r\n                <!-- ============================================================== -->\r\n                <li class=\"nav-item d-none d-md-block\">\r\n                    <a class=\"nav-link\">\r\n\r\n                        <div class=\"customize-input\">\r\n                            <input #search class=\"form-control custom-shadow custom-radius border-0 bg-white\"\r\n                                type=\"search\" placeholder=\"Search\" (change)=\"searchAction(search.value)\"\r\n                                aria-label=\"Search\">\r\n                            <i class=\"form-control-icon\" data-feather=\"search\"></i>\r\n                        </div>\r\n\r\n                    </a>\r\n                </li>\r\n                <!-- ============================================================== -->\r\n                <!-- User profile and search -->\r\n                <!-- ============================================================== -->\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img src=\"assets/images/users/profile-pic.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"40\">\r\n                        <span class=\"ml-2 d-none d-lg-inline-block\"><span>Hello,</span> <span class=\"text-dark\">\r\n                                {{currentUserDetail?.name}}\r\n                            </span>\r\n                            <i data-feather=\"chevron-down\" class=\"svg-icon\"></i></span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right user-dd animated flipInY\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i data-feather=\"user\"\r\n                                class=\"svg-icon mr-2 ml-1\"></i>\r\n                            My Profile</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i data-feather=\"credit-card\"\r\n                                class=\"svg-icon mr-2 ml-1\"></i>\r\n                            My Balance</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i data-feather=\"mail\"\r\n                                class=\"svg-icon mr-2 ml-1\"></i>\r\n                            Inbox</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i data-feather=\"settings\"\r\n                                class=\"svg-icon mr-2 ml-1\"></i>\r\n                            Account Setting</a>\r\n                        <ng-container *ngIf=\"currentUserDetail?.is_superuser && isCompanySelected\">\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" (click)=\"removeCompany()\">\r\n                                <i data-feather=\"power\" class=\"svg-icon mr-2 ml-1\"></i> Go to My Console\r\n                            </a>\r\n                        </ng-container>\r\n\r\n\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <div class=\"pl-4 p-3\">\r\n                            <button class=\"btn text-white btn-sm btn-info\" (click)=\"onLogOut()\">\r\n                                Logout</button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <!-- ============================================================== -->\r\n                <!-- User profile and search -->\r\n                <!-- ============================================================== -->\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<!-- ============================================================== -->\r\n<!-- End Topbar header -->\r\n<!-- ============================================================== -->\r\n<!-- ============================================================== -->\r\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->\r\n<aside class=\"left-sidebar\" data-sidebarbg=\"skin6\">\r\n    <!-- Sidebar scroll-->\r\n    <div class=\"scroll-sidebar\" data-sidebarbg=\"skin6\">\r\n        <!-- Sidebar navigation-->\r\n        <nav class=\"sidebar-nav\">\r\n            <ul *ngIf=\"isCompanySelected\" id=\"sidebarnav\">\r\n\r\n                <li class=\"sidebar-item selected\"> <a class=\"sidebar-link sidebar-link\" routerLink=\"/dashboard\"\r\n                        aria-expanded=\"false\"><i data-feather=\"home\" class=\"feather-icon\"></i><span\r\n                            class=\"hide-menu\">Dashboard</span></a></li>\r\n                <li class=\"list-divider\"></li>\r\n\r\n                <li class=\"nav-small-cap\"><span class=\"hide-menu\">Applications</span></li>\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link\" routerLink=\"/product\" aria-expanded=\"false\"><i\r\n                            data-feather=\"tag\" class=\"feather-icon\"></i><span class=\"hide-menu\">Products\r\n                        </span></a>\r\n                </li>\r\n\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link sidebar-link\" [routerLink]=\"['/app-chat']\"\r\n                        routerLinkActive=\"router-link-active\" aria-expanded=\"false\"><i data-feather=\"message-square\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Chat</span></a></li>\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link sidebar-link\" [routerLink]=\"['/app-calendar']\"\r\n                        routerLinkActive=\"router-link-active\" aria-expanded=\"false\"><i data-feather=\"calendar\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Calendar</span></a></li>\r\n\r\n                <li class=\"list-divider\"></li>\r\n                <li class=\"nav-small-cap\"><span class=\"hide-menu\">Components</span></li>\r\n                <li class=\"sidebar-item\">\r\n                    <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active': formClick}\" (click)=\"clickForm()\"\r\n                        aria-expanded=\"false\">\r\n                        <i data-feather=\"file-text\" class=\"feather-icon\"></i><span class=\"hide-menu\">Catelog\r\n                        </span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse  first-level base-level-line\"\r\n                        [ngClass]=\"{'in': formClick}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/category']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\"> Category\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/product']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Products\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/brand']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Brand\r\n                                </span></a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"sidebar-item\">\r\n                    <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active': tableClick}\" (click)=\"clickTables()\"\r\n                        aria-expanded=\"false\"><i data-feather=\"grid\" class=\"feather-icon\"></i><span\r\n                            class=\"hide-menu\">Sales\r\n                        </span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse  first-level base-level-line\"\r\n                        [ngClass]=\"{'in': tableClick}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/table-basic']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Orders\r\n                                </span></a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active':formCharts}\"\r\n                        (click)=\"clickCharts()\" aria-expanded=\"false\"><i data-feather=\"bar-chart\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Charts </span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse  first-level base-level-line\"\r\n                        [ngClass]=\"{'in':formCharts}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/chart-morris']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Morris Chart\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/chart-chart-js']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    ChartJs\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/chart-knob']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Knob Chart\r\n                                </span></a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active':formUiElemnt}\"\r\n                        (click)=\"clickUielement()\" aria-expanded=\"false\"><i data-feather=\"box\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">\r\n                            UI\r\n                            Elements\r\n                        </span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse  first-level base-level-line\"\r\n                        [ngClass]=\"{'in':formUiElemnt}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/search']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">Search\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/customer-review']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Customer Review\r\n                                </span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/feedback']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\"> Feedback\r\n                                </span></a></li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/wishlist']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Wishlist</span></a></li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/subscribe']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">Subscribe</span></a></li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/favourite']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">Favourite</span></a></li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/ui-notification']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\"><span\r\n                                    class=\"hide-menu\">Notification</span></a></li>\r\n\r\n                    </ul>\r\n                </li>\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link sidebar-link\" [routerLink]=\"['/offer-product']\"\r\n                        routerLinkActive=\"router-link-active\" aria-expanded=\"false\"><i data-feather=\"sidebar\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Offer Product\r\n                        </span></a>\r\n                </li>\r\n                <li class=\"list-divider\"></li>\r\n                <li class=\"nav-small-cap\"><span class=\"hide-menu\">Extra </span></li>\r\n\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active':iconClick}\"\r\n                        (click)=\"clickIcon()\" aria-expanded=\"false\"><i data-feather=\"feather\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Marketing\r\n                        </span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse first-level base-level-line\" [ngClass]=\"{'in':iconClick}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/banner']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Banner </span></a></li>\r\n\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/offer']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">\r\n                                    Offers </span></a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link has-arrow\" [ngClass]=\"{'active':firstLevelClick}\"\r\n                        (click)=\"clickFirstLvel()\" aria-expanded=\"false\"><i data-feather=\"crosshair\"\r\n                            class=\"feather-icon\"></i><span class=\"hide-menu\">Information</span></a>\r\n                    <ul aria-expanded=\"false\" class=\"collapse first-level base-level-line\"\r\n                        [ngClass]=\"{'in':firstLevelClick}\">\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/bankinfo']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">Bank information</span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/cart']\" routerLinkActive=\"router-link-active\"\r\n                                class=\"sidebar-link\"><span class=\"hide-menu\">Cart</span></a>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"> <a class=\"has-arrow sidebar-link\"\r\n                                [ngClass]=\"{'active':secondLevelClick}\" (click)=\"clickSecondLvel()\"\r\n                                aria-expanded=\"false\"><span class=\"hide-menu\">Users</span></a>\r\n                            <ul aria-expanded=\"false\" class=\"collapse second-level base-level-line\"\r\n                                [ngClass]=\"{'in':secondLevelClick}\">\r\n                                <li class=\"sidebar-item\"><a href=\"javascript:void(0)\" class=\"sidebar-link\"><span\r\n                                            class=\"hide-menu\">\r\n                                            Buyyer</span></a></li>\r\n                                <li class=\"sidebar-item\"><a href=\"javascript:void(0)\" class=\"sidebar-link\"><span\r\n                                            class=\"hide-menu\">\r\n                                            Vendor</span></a></li>\r\n                                <li class=\"sidebar-item\"><a href=\"javascript:void(0)\" class=\"sidebar-link\"><span\r\n                                            class=\"hide-menu\">\r\n                                            Shippers</span></a></li>\r\n                                <li class=\"sidebar-item\"><a href=\"javascript:void(0)\" class=\"sidebar-link\"><span\r\n                                            class=\"hide-menu\">\r\n                                            Admin</span></a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"sidebar-item\"><a [routerLink]=\"['/payment-details']\"\r\n                                routerLinkActive=\"router-link-active\" class=\"sidebar-link\">\r\n                                <span class=\"hide-menu\">Payment Details</span></a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"list-divider\"></li>\r\n                <li class=\"nav-small-cap\"><span class=\"hide-menu\">Authentication</span></li>\r\n\r\n                <li class=\"sidebar-item\"> <a class=\"sidebar-link sidebar-link\" (click)=\"onLogOut()\"\r\n                        aria-expanded=\"false\"><i data-feather=\"log-out\" class=\"feather-icon\"></i><span\r\n                            class=\"hide-menu\">Logout</span></a></li>\r\n            </ul>\r\n\r\n            <ul *ngIf=\"currentUserDetail?.is_superuser && !isCompanySelected\" id=\"sidebarnav\">\r\n\r\n                <li class=\"sidebar-item selected\"> <a class=\"sidebar-link sidebar-link\" routerLink=\"/dashboard\"\r\n                        aria-expanded=\"false\"><i data-feather=\"home\" class=\"feather-icon\"></i><span\r\n                            class=\"hide-menu\">Company</span></a></li>\r\n            </ul>\r\n        </nav>\r\n        <!-- End Sidebar navigation -->\r\n    </div>\r\n    <!-- End Sidebar scroll-->\r\n</aside>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/_guards */ "./src/app/service/_guards/index.ts");
/* harmony import */ var _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/_guards/company-selected.service */ "./src/app/service/_guards/company-selected.service.ts");
/* harmony import */ var _service_guards_company_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/_guards/company-redirect.service */ "./src/app/service/_guards/company-redirect.service.ts");






const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | auth-login-login-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("auth-login-login-module")]).then(__webpack_require__.bind(null, /*! ./auth/login/login.module */ "./src/app/auth/login/login.module.ts")).then(m => m.LoginModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | auth-forgot-password-forgot-password-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("auth-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./auth/forgot-password/forgot-password.module */ "./src/app/auth/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'forgot_password' },
    },
    {
        path: 'reset-password/:token',
        loadChildren: () => Promise.all(/*! import() | auth-reset-password-reset-password-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("auth-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ./auth/reset-password/reset-password.module */ "./src/app/auth/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'reset_password' },
    },
    {
        path: 'link-expired',
        loadChildren: () => Promise.all(/*! import() | auth-message-message-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-message-message-module")]).then(__webpack_require__.bind(null, /*! ./auth/message/message.module */ "./src/app/auth/message/message.module.ts")).then(m => m.MessageModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["LoginRedirect"]],
        data: { title: 'link_expired' },
    },
    {
        path: 'company',
        loadChildren: () => Promise.all(/*! import() | company-company-list-company-list-module */[__webpack_require__.e("common"), __webpack_require__.e("company-company-list-company-list-module")]).then(__webpack_require__.bind(null, /*! ./company/company-list/company-list.module */ "./src/app/company/company-list/company-list.module.ts")).then(m => m.CompanyListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_redirect_service__WEBPACK_IMPORTED_MODULE_5__["CompanyRedirectService"]],
        data: { title: 'company_list' },
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashbord-dashbord-module */ "dashbord-dashbord-module").then(__webpack_require__.bind(null, /*! ./dashbord/dashbord.module */ "./src/app/dashbord/dashbord.module.ts")).then(m => m.DashbordModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'brand',
        loadChildren: () => Promise.all(/*! import() | brand-brand-list-brand-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("brand-brand-list-brand-list-module")]).then(__webpack_require__.bind(null, /*! ./brand/brand-list/brand-list.module */ "./src/app/brand/brand-list/brand-list.module.ts")).then(m => m.BrandListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'category',
        loadChildren: () => Promise.all(/*! import() | category-category-list-category-list-module */[__webpack_require__.e("common"), __webpack_require__.e("category-category-list-category-list-module")]).then(__webpack_require__.bind(null, /*! ./category/category-list/category-list.module */ "./src/app/category/category-list/category-list.module.ts")).then(m => m.CategoryListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'product',
        loadChildren: () => Promise.all(/*! import() | product-product-list-product-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("product-product-list-product-list-module")]).then(__webpack_require__.bind(null, /*! ./product/product-list/product-list.module */ "./src/app/product/product-list/product-list.module.ts")).then(m => m.ProductListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() | user-search-user-search-list-user-search-list-module */[__webpack_require__.e("common"), __webpack_require__.e("user-search-user-search-list-user-search-list-module")]).then(__webpack_require__.bind(null, /*! ./user-search/user-search-list/user-search-list.module */ "./src/app/user-search/user-search-list/user-search-list.module.ts")).then(m => m.UserSearchListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'bankinfo',
        loadChildren: () => Promise.all(/*! import() | user-bankinfo-user-bankinfo-list-user-bankinfo-list-module */[__webpack_require__.e("common"), __webpack_require__.e("user-bankinfo-user-bankinfo-list-user-bankinfo-list-module")]).then(__webpack_require__.bind(null, /*! ./user-bankinfo/user-bankinfo-list/user-bankinfo-list.module */ "./src/app/user-bankinfo/user-bankinfo-list/user-bankinfo-list.module.ts")).then(m => m.UserBankinfoListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'banner',
        loadChildren: () => Promise.all(/*! import() | banner-banner-list-banner-list-module */[__webpack_require__.e("common"), __webpack_require__.e("banner-banner-list-banner-list-module")]).then(__webpack_require__.bind(null, /*! ./banner/banner-list/banner-list.module */ "./src/app/banner/banner-list/banner-list.module.ts")).then(m => m.BannerListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | cart-cart-list-cart-list-module */[__webpack_require__.e("common"), __webpack_require__.e("cart-cart-list-cart-list-module")]).then(__webpack_require__.bind(null, /*! ./cart/cart-list/cart-list.module */ "./src/app/cart/cart-list/cart-list.module.ts")).then(m => m.CartListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'customer-review',
        loadChildren: () => Promise.all(/*! import() | customer-review-customer-review-list-customer-review-list-module */[__webpack_require__.e("common"), __webpack_require__.e("customer-review-customer-review-list-customer-review-list-module")]).then(__webpack_require__.bind(null, /*! ./customer-review/customer-review-list/customer-review-list.module */ "./src/app/customer-review/customer-review-list/customer-review-list.module.ts")).then(m => m.CustomerReviewListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'feedback',
        loadChildren: () => Promise.all(/*! import() | feedback-feedback-list-feedback-list-module */[__webpack_require__.e("common"), __webpack_require__.e("feedback-feedback-list-feedback-list-module")]).then(__webpack_require__.bind(null, /*! ./feedback/feedback-list/feedback-list.module */ "./src/app/feedback/feedback-list/feedback-list.module.ts")).then(m => m.FeedbackListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'offer-product',
        loadChildren: () => Promise.all(/*! import() | product-offer-product-list-offer-product-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("product-offer-product-list-offer-product-list-module")]).then(__webpack_require__.bind(null, /*! ./product/offer-product-list/offer-product-list.module */ "./src/app/product/offer-product-list/offer-product-list.module.ts")).then(m => m.OfferProductListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'payment-details',
        loadChildren: () => Promise.all(/*! import() | payment-details-payment-details-list-payment-details-list-module */[__webpack_require__.e("common"), __webpack_require__.e("payment-details-payment-details-list-payment-details-list-module")]).then(__webpack_require__.bind(null, /*! ./payment-details/payment-details-list/payment-details-list.module */ "./src/app/payment-details/payment-details-list/payment-details-list.module.ts")).then(m => m.PaymentDetailsListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'subscribe',
        loadChildren: () => Promise.all(/*! import() | subscribe-subscribe-list-subscribe-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("common"), __webpack_require__.e("subscribe-subscribe-list-subscribe-list-module")]).then(__webpack_require__.bind(null, /*! ./subscribe/subscribe-list/subscribe-list.module */ "./src/app/subscribe/subscribe-list/subscribe-list.module.ts")).then(m => m.SubscribeListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'favourite',
        loadChildren: () => Promise.all(/*! import() | user-favourite-user-favourite-list-user-favourite-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("user-favourite-user-favourite-list-user-favourite-list-module")]).then(__webpack_require__.bind(null, /*! ./user-favourite/user-favourite-list/user-favourite-list.module */ "./src/app/user-favourite/user-favourite-list/user-favourite-list.module.ts")).then(m => m.UserFavouriteListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'wishlist',
        loadChildren: () => Promise.all(/*! import() | user-favourite-wishlist-list-wishlist-list-module */[__webpack_require__.e("default~add-company-add-company-module~auth-forgot-password-forgot-password-module~auth-login-login-~6bb3449d"), __webpack_require__.e("default~banner-add-banner-add-module~brand-brand-list-brand-list-module~cart-add-cart-add-module~cus~68433d59"), __webpack_require__.e("common"), __webpack_require__.e("user-favourite-wishlist-list-wishlist-list-module")]).then(__webpack_require__.bind(null, /*! ./user-favourite/wishlist-list/wishlist-list.module */ "./src/app/user-favourite/wishlist-list/wishlist-list.module.ts")).then(m => m.WishlistListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
    {
        path: 'offer',
        loadChildren: () => Promise.all(/*! import() | offers-offers-list-offers-list-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-offers-list-offers-list-module")]).then(__webpack_require__.bind(null, /*! ./offers/offers-list/offers-list.module */ "./src/app/offers/offers-list/offers-list.module.ts")).then(m => m.OffersListModule),
        canActivate: [_service_guards__WEBPACK_IMPORTED_MODULE_3__["EnsureAuthenticated"], _service_guards_company_selected_service__WEBPACK_IMPORTED_MODULE_4__["IsCompanySelected"]],
        data: { title: 'dashboard' },
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages */ "./src/app/messages.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");














let AppComponent = class AppComponent {
    constructor(renderer, router, activatedRoute, titleService, changeDetectorRef, jwtService, configService, dataService, commonService, swUpdate) {
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.changeDetectorRef = changeDetectorRef;
        this.jwtService = jwtService;
        this.configService = configService;
        this.dataService = dataService;
        this.commonService = commonService;
        this.swUpdate = swUpdate;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (this.previousUrl) {
                    this.renderer.removeClass(document.body, this.previousUrl);
                }
                const currentUrlSlug = event.url.slice(1);
                if (currentUrlSlug) {
                    this.renderer.addClass(document.body, currentUrlSlug);
                }
                this.previousUrl = currentUrlSlug;
            }
        });
        if (this.jwtService.getToken()) {
            this.getProfile();
            this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]).map(() => this.activatedRoute).
                map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }).map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }).
                filter((route) => route.outlet === 'primary').mergeMap((route) => route.data).subscribe((event) => {
                // You only receive NavigationEnd events
                // setting page title
                this.titleService.setTitle(_messages__WEBPACK_IMPORTED_MODULE_11__["pageTitles"][event.title]);
                if (this.isAuthenticated && this.isCompanySelected) {
                    // this.dataService.permission.subscribe((role: any) => {
                    //   if (role && event['module'] && event['action']) {
                    //     const checkPerms = role[event['module']] ? role[event['module']][event['action']] : false;
                    //     if (!checkPerms) {
                    //       this.router.navigateByUrl('/dashboard');
                    //       return;
                    //     }
                    //   }
                    // });
                }
                else {
                    this.dataService.isAuthenticated.subscribe((isLoggedIn) => {
                        this.isAuthenticated = isLoggedIn;
                        // this.dataService.permission.subscribe((role: any) => {
                        //   if (role && event['module'] && event['action']) {
                        //     const checkPerms = role[event['module']] ? role[event['module']][event['action']] : false;
                        //     if (!checkPerms) {
                        //       this.router.navigateByUrl('/dashboard');
                        //       return;
                        //     }
                        //   }
                        // });
                        // this.dataService.isCompanySelected.subscribe((response) => {
                        //   this.isCompanySelected = response;
                        // });
                    });
                }
            });
        }
        else {
            // this.dataService.checkDomain();
            this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]).subscribe((event) => {
                // setting page title
                // this.titleService.setTitle(pageTitles[this.activatedRoute.snapshot.children[0].firstChild.data['title']]);
            });
        }
    }
    getCompany(id) {
        if (id && id != 'undefined' && id != 'null') {
            this.commonService.selectCompany(id).subscribe((response) => {
                if (response.success) {
                    this.dataService.updateCompany(response.data.company);
                }
            }, (error) => {
                this.dataService.purgeAuth();
            });
        }
    }
    getProfile() {
        this.commonService.getProfile().subscribe((response) => {
            if (response.success) {
                this.dataService.updateAuth(response.data.User);
                this.getCompany(response.data.User.company_id);
            }
        }, (error) => {
            this.dataService.purgeAuth();
        });
    }
    ngOnInit() {
        this.reloadCache();
        // Lorder
        // $(function () {
        //   setTimeout(function () {
        //     $(".lorder-full").fadeOut();
        //   }, 1000);
        // });
        // this.configService.config = { showLoader: false };
        // Subscribe to config changes
        this.configService.config.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0)).subscribe((config) => {
            this.customConfig = config;
        });
    }
    reloadCache() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('New version available! would you like to update?')) {
                    window.location.reload();
                }
            });
        }
    }
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        this.changeDetectorRef.detectChanges();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _service_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
    { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _service_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwUpdate"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/_helpers */ "./src/app/service/_helpers/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _layout_header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/header/header.module */ "./src/app/layout/header/header.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _layout_header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _service_helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
            { provide: _service_config_service__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_CONFIG"], useValue: _config__WEBPACK_IMPORTED_MODULE_8__["ROYAL_SHOPPING_CONFIG"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common.ts":
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/*! exports provided: encryptValue, decryptValue, validateEmail, isMobileNumber, setCookie, getCookie, deleteCookie, generateRandomPaymentReferenceNumber, CommonFunction, validateEmailFormControl, PasswordValidation, generateRandomAlphaNumericeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptValue", function() { return encryptValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptValue", function() { return decryptValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileNumber", function() { return isMobileNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPaymentReferenceNumber", function() { return generateRandomPaymentReferenceNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunction", function() { return CommonFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmailFormControl", function() { return validateEmailFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomAlphaNumericeString", function() { return generateRandomAlphaNumericeString; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/*
 * General utils for managing cookies in Typescript.
 */


const rawEncryptionKey = '#572@/.&';
function encryptValue(value) {
    const ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(value, rawEncryptionKey);
    return ciphertext;
}
function decryptValue(value) {
    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(value.toString(), rawEncryptionKey);
    const plaintext = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8);
    return plaintext;
}
function validateEmail(email) {
    const re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return re.test(String(email).toLowerCase());
}
function isMobileNumber(number) {
    const phoneRe = /^[+]*[(]{0,1}[6-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return phoneRe.test(number);
}
function setCookie(name, val, type = null, time = 30) {
    const date = new Date();
    const value = encryptValue(val);
    // Set it expire in 7 days
    if (type === 'mins') {
        date.setTime(date.getTime() + (time * 60 * 1000));
    }
    else if (type === 'hrs') {
        date.setTime(date.getTime() + (time * 60 * 60 * 1000));
    }
    else if (type === 'days') {
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
    }
    // Set it
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}
function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length == 2) {
        return decryptValue(parts.pop().split(';').shift());
    }
}
function deleteCookie(name) {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}
function generateRandomPaymentReferenceNumber() {
    return Math.floor(Math.random() * 1000000000);
}
class CommonFunction {
}
/* This is made for setting errors of invalid form fields dynamically */
CommonFunction._setErrMsgs = (control, errorsObj, field, validationMessages) => {
    if (control && control.invalid) {
        if (validationMessages !== undefined && validationMessages !== null && validationMessages !== '') {
            const messages = validationMessages[field];
            if (messages !== undefined && messages !== null && messages !== '') {
                for (const key in control.errors) {
                    if (control.errors.hasOwnProperty(key)) {
                        errorsObj[field] = messages[key] + '<br>';
                        return;
                    }
                }
            }
        }
        else {
            for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                    errorsObj[field] = true;
                    return;
                }
            }
        }
    }
};
CommonFunction.resetForm = (control, formError = null) => {
    control.reset();
    control.markAsUntouched();
    control.markAsPristine();
    jquery__WEBPACK_IMPORTED_MODULE_1__('form').removeClass('submitted');
    jquery__WEBPACK_IMPORTED_MODULE_1__('.ng2-flatpickr-input').val('');
    if (formError !== null) {
        for (const field in formError) {
            if (formError.hasOwnProperty(field)) {
                formError[field] = '';
            }
        }
    }
};
CommonFunction.formatDateTime = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate;
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return [day, month, year].join('-') + ' ' + hours + ':' + minutes + ' ' + ampm;
};
CommonFunction.changedateFormate = (date) => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let finaldate = dd + '-' + mm + '-' + yyyy;
    return finaldate;
};
CommonFunction.formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [day, month, year].join('-');
};
function validateEmailFormControl(c) {
    // tslint:disable:max-line-length
    // tslint:disable:prefer-const
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (c.value) {
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: false
        };
    }
    return null;
}
class PasswordValidation {
    static passwordValidation() {
        return (AC) => {
            let password = AC.get('password').value;
            let confirmpassword = AC.get('confirm_password').value;
            if (password !== confirmpassword) {
                return AC.get('confirm_password').setErrors({ validatePassword: true });
            }
        };
    }
}
function _getRandomByte() {
    // http://caniuse.com/#feat=getrandomvalues
    let result = null;
    if (window.crypto && window.crypto.getRandomValues) {
        result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
    }
    else {
        return Math.floor(Math.random() * 256);
    }
}
function generateRandomAlphaNumericeString() {
    let result;
    const length = 8;
    const _pattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    const str = Array.apply(null, { 'length': length }).map(function () {
        while (true) {
            result = String.fromCharCode(_getRandomByte());
            if (_pattern.test(result)) {
                return result;
            }
        }
    }, this).join('');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return regex.test(str) ? str : generateRandomAlphaNumericeString();
}


/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: ROYAL_SHOPPING_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROYAL_SHOPPING_CONFIG", function() { return ROYAL_SHOPPING_CONFIG; });
const ROYAL_SHOPPING_CONFIG = {
    showLoader: false,
    showHeader: true
};


/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(router, dataService, commonService) {
        this.router = router;
        this.dataService = dataService;
        this.commonService = commonService;
        this.currentUserDetail = null;
        this.currentCompanyDetail = null;
        // =========================================================================================================
        //                        click
        // =========================================================================================================
        this.formClick = false;
        this.tableClick = false;
        this.formCharts = false;
        this.formUiElemnt = false;
        this.iconClick = false;
        this.dataService.currentUser.subscribe((response) => {
            this.currentUserDetail = response;
        });
        this.dataService.currentCompany.subscribe((response) => {
            this.currentCompanyDetail = response;
        });
        this.dataService.isCompanySelected.subscribe((response) => {
            this.isCompanySelected = response;
        });
    }
    ngOnInit() {
    }
    searchAction(value) {
        // console.log("valuevalue",value);
        this.dataService.changeMessage(value);
        // this.router.navigateByUrl(`${this.router.url}`, { skipLocationChange: true }).then(() => {
        //   this.router.navigate([`${this.router.url}`]);
        // });
        // console.log("this.router.url",this.router.url)
        // this.router.navigateByUrl(this.router.url);
    }
    onLogOut() {
        this.dataService.purgeAuth();
        this.router.navigateByUrl('/home');
        // this.commonService.logout().subscribe(
        //   (response) => {
        //     this.dataService.purgeAuth();
        //     this.router.navigateByUrl('/home');
        //     // window.location.reload();
        //   }, (err) => {
        //     this.dataService.purgeAuth();
        //     this.router.navigateByUrl('/home');
        //   }
        // );
        // setTimeout( () => {
        //   this.router.navigateByUrl('/home');
        // }, 100);
    }
    removeCompany() {
        // this.commonService.unSelectCompany().subscribe((response) => {
        //   if (response.success) {
        //     this.dataService.purgeCompany();
        //     this.dataService.saveToken(response.data.token);
        //     this.router.navigateByUrl('/company');
        //   }
        // }, (err) => {
        //   this.dataService.purgeCompany();
        //   this.router.navigateByUrl('/company');
        // }
        // );
        this.dataService.purgeCompany();
        this.router.navigateByUrl('/company');
    }
    clickForm() {
        this.formClick = !this.formClick;
    }
    clickTables() {
        this.tableClick = !this.tableClick;
    }
    clickCharts() {
        this.formCharts = !this.formCharts;
    }
    clickUielement() {
        this.formUiElemnt = !this.formUiElemnt;
    }
    clickIcon() {
        this.iconClick = !this.iconClick;
    }
    clickFirstLvel() {
        this.firstLevelClick = !this.firstLevelClick;
    }
    clickSecondLvel() {
        this.secondLevelClick = !this.secondLevelClick;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let HeaderModule = class HeaderModule {
};
HeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/messages.ts":
/*!*****************************!*\
  !*** ./src/app/messages.ts ***!
  \*****************************/
/*! exports provided: APP_NAME, DATEFORMAT, TIMEFORMAT, DATE_TIME_FORMAT, DATE_FORMAT, DATERANGE_FORMAT, TIME_FORMAT, pageTitles, errorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATEFORMAT", function() { return DATEFORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEFORMAT", function() { return TIMEFORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TIME_FORMAT", function() { return DATE_TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATERANGE_FORMAT", function() { return DATERANGE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT", function() { return TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTitles", function() { return pageTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
const APP_NAME = window.localStorage['__royal_shopping__cmp_nm'] ? window.localStorage['__royal_shopping__cmp_nm'] : 'Royal Admin';
const DATEFORMAT = 'd-m-Y';
const TIMEFORMAT = 'h:i K';
const DATE_TIME_FORMAT = {
    dateFormat: DATEFORMAT + ' ' + TIMEFORMAT,
    enableTime: true,
};
const DATE_FORMAT = {
    dateFormat: DATEFORMAT,
    enableTime: false,
};
const DATERANGE_FORMAT = {
    dateFormat: DATEFORMAT,
    mode: 'range'
};
const TIME_FORMAT = {
    dateFormat: TIMEFORMAT,
    time_24hr: false,
    enableTime: true,
    noCalendar: true,
    defaultDate: new Date()
};
const pageTitles = {
    login: `Log In | ${APP_NAME}`,
    signup: `Sign Up with ${APP_NAME}`,
    otp: `OTP | ${APP_NAME}`,
    forgot_password: `Forgot Password | ${APP_NAME}`,
    reset_password: `Reset Password | ${APP_NAME}`,
    change_password: `Change Password | ${APP_NAME}`,
    view_profile: `Profile | ${APP_NAME}`,
    edit_profile: `Edit Profile | ${APP_NAME}`,
    home: `${APP_NAME}`,
    dashboard: `${APP_NAME}`,
    company_list: `Company List | ${APP_NAME}`,
    add_company: `Add Company | ${APP_NAME}`,
    edit_company: `Edit Company | ${APP_NAME}`,
    agent_list: `Agent List | ${APP_NAME}`,
    add_agent: `Add Agent | ${APP_NAME}`,
    edit_agent: `Edit Agent | ${APP_NAME}`,
    // agent_documents: `View Agent Documents | ${APP_NAME}`,
    document_type: `Document Type List | ${APP_NAME}`,
    add_document_type: `Add Document Type | ${APP_NAME}`,
    edit_document_type: `Edit Document Type | ${APP_NAME}`,
    charges: `Charges List | ${APP_NAME}`,
    add_charges: `Add Charges | ${APP_NAME}`,
    edit_charges: `Edit Charges | ${APP_NAME}`,
    commission: `Commission List | ${APP_NAME}`,
    add_commission: `Add Commission | ${APP_NAME}`,
    edit_commission: `Edit Commission | ${APP_NAME}`,
    extrafield: `Extrafield List | ${APP_NAME}`,
    add_extrafield: `Add Extrafield | ${APP_NAME}`,
    edit_extrafield: `Edit Extrafield | ${APP_NAME}`,
    customer_list: `Customer List | ${APP_NAME}`,
    add_customer: `Add Customer | ${APP_NAME}`,
    edit_customer: `Edit Customer | ${APP_NAME}`,
    view_customer: `View Customer | ${APP_NAME}`,
    // customer_documents: `View Customer Documents | ${APP_NAME}`,
    merchant_list: `Merchant List | ${APP_NAME}`,
    add_merchant: `Add Merchant | ${APP_NAME}`,
    edit_merchant: `Edit Merchant | ${APP_NAME}`,
    view_merchant: `View Merchant | ${APP_NAME}`,
    // merchant_documents: `View Merchant Documents | ${APP_NAME}`,
    product: `Product List | ${APP_NAME}`,
    add_product: `Add Product | ${APP_NAME}`,
    edit_product: `Edit Product | ${APP_NAME}`,
    productmap: `ProductMap List | ${APP_NAME}`,
    add_productmap: `Add ProductMap | ${APP_NAME}`,
    edit_productmap: `Edit ProductMap | ${APP_NAME}`,
    category: `Category List | ${APP_NAME}`,
    add_category: `Add Category | ${APP_NAME}`,
    edit_category: `Edit Category | ${APP_NAME}`,
    country: `Country List | ${APP_NAME}`,
    add_country: `Add Country | ${APP_NAME}`,
    edit_country: `Edit Country | ${APP_NAME}`,
    state: `State List | ${APP_NAME}`,
    add_state: `Add State | ${APP_NAME}`,
    edit_state: `Edit State | ${APP_NAME}`,
    city: `City List | ${APP_NAME}`,
    add_city: `Add City | ${APP_NAME}`,
    edit_city: `Edit City | ${APP_NAME}`,
    currency: `Currency List | ${APP_NAME}`,
    add_currency: `Add Currency | ${APP_NAME}`,
    edit_currency: `Edit Currency | ${APP_NAME}`,
    password_policy: `Password Policy | ${APP_NAME}`,
    edit_company_config: `Edit Configuration | ${APP_NAME}`,
    view_company_config: `View Configuration | ${APP_NAME}`,
    staff_list: `Staff List | ${APP_NAME}`,
    add_staff: `Add Staff | ${APP_NAME}`,
    edit_staff: `Edit Staff | ${APP_NAME}`,
    tree_level_list: `Tree Level List | ${APP_NAME}`,
    add_tree_level: `Add Tree level | ${APP_NAME}`,
    edit_tree_level: `Edit Tree level | ${APP_NAME}`,
    tree_list: `Tree List | ${APP_NAME}`,
    add_tree: `Add Tree | ${APP_NAME}`,
    edit_tree: `Edit Tree | ${APP_NAME}`,
    vendor_product_list: `Vendor Product List | ${APP_NAME}`,
    add_vendor_product: `Add Vendor Product | ${APP_NAME}`,
    edit_vendor_product: `Edit Vendor Product | ${APP_NAME}`,
    vendorcategory_list: `Vendor Category List | ${APP_NAME}`,
    add_vendorcategory: `Add Vendor Category | ${APP_NAME}`,
    edit_vendorcategory: `Edit Vendor Category | ${APP_NAME}`,
    vendor: `Vendor List | ${APP_NAME}`,
    add_vendor: `Add Vendor | ${APP_NAME}`,
    edit_vendor: `Edit Vendor | ${APP_NAME}`,
    vendor_discount_rules_list: `Vendor Discount Rules List | ${APP_NAME}`,
    add_vendor_discount_rules: `Add Vendor Discount Rules | ${APP_NAME}`,
    edit_vendor_discount_rules: `Edit Vendor Discount Rules | ${APP_NAME}`,
    tree_commission_rules_list: `Tree Commission Rules List | ${APP_NAME}`,
    add_tree_commission_rules: `Add Tree Commission Rules | ${APP_NAME}`,
    edit_tree_commission_rules: `Edit Tree Commission Rules | ${APP_NAME}`,
    threshold: `Threshold | ${APP_NAME}`,
    add_threshold: `Add Threshold | ${APP_NAME}`,
    edit_threshold: `Edit Threshold | ${APP_NAME}`,
    discount: `Discount | ${APP_NAME}`,
    add_discount: `Add Discount | ${APP_NAME}`,
    edit_discount: `Edit Discount | ${APP_NAME}`,
    tax: `Tax | ${APP_NAME}`,
    add_tax: `Add Tax | ${APP_NAME}`,
    edit_tax: `Edit Tax | ${APP_NAME}`,
    user_profile_list: `User Profile List | ${APP_NAME}`,
    add_user_profile: `Add User Profile | ${APP_NAME}`,
    edit_user_profile: `Edit User Profile | ${APP_NAME}`,
    branch: `Branch | ${APP_NAME}`,
    add_branch: `Add Branch | ${APP_NAME}`,
    edit_branch: `Edit Branch | ${APP_NAME}`,
    wallet_list: `Wallet | ${APP_NAME}`,
    role_list: `Roles | ${APP_NAME}`,
    add_role: `Add Role | ${APP_NAME}`,
    edit_role: `Edit Role | ${APP_NAME}`,
    role_update: `Update Roles | ${APP_NAME}`,
    auth_item_list: `Auth Items | ${APP_NAME}`,
    add_auth_item: `Add Auth Items | ${APP_NAME}`,
    edit_auth_item: `Edit Auth Items | ${APP_NAME}`,
};
const errorMessage = {
    delete_dialogue_type: 'error',
    delete_header_text: 'Are you sure you want to delete?',
    delete_confirm_button: 'Yes, Delete it!',
    delete_cancel_button: 'No, Keep it',
    delete_smalll_text: 'You will not be able to recover this!',
    unassign_dialogue_type: 'error',
    unassign_header_text: 'Are you sure want to un-assign?',
    unassign_confirm_button: 'Yes, Un-Assign it!',
    unassign_cancel_button: 'No, Keep it',
    unassign_smalll_text: 'You will not be able to recover this!',
    accept_installment_request_dialogue_type: 'success',
    accept_installment_request_header_text: 'Are you sure want to Accept?',
    accept_installment_request_confirm_button: 'Yes, Accept it!',
    accept_installment_request_cancel_button: 'No, Keep it',
    accept_installment_request_smalll_text: 'You will not be able to recover this!',
    reject_installment_request_dialogue_type: 'success',
    reject_installment_request_header_text: 'Are you sure want to Reject?',
    reject_installment_request_confirm_button: 'Yes, Reject it!',
    reject_installment_request_cancel_button: 'No, Keep it',
    reject_installment_request_smalll_text: 'You will not be able to recover this!',
};


/***/ }),

/***/ "./src/app/service/_guards/company-redirect.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/_guards/company-redirect.service.ts ***!
  \*************************************************************/
/*! exports provided: CompanyRedirectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRedirectService", function() { return CompanyRedirectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CompanyRedirectService = class CompanyRedirectService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('__royal_shopping__cmp')) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        else {
            return true;
        }
    }
};
CompanyRedirectService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompanyRedirectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyRedirectService);



/***/ }),

/***/ "./src/app/service/_guards/company-selected.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/_guards/company-selected.service.ts ***!
  \*************************************************************/
/*! exports provided: IsCompanySelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCompanySelected", function() { return IsCompanySelected; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let IsCompanySelected = class IsCompanySelected {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('__royal_shopping__cmp')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/company');
            return false;
        }
    }
};
IsCompanySelected.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsCompanySelected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IsCompanySelected);



/***/ }),

/***/ "./src/app/service/_guards/ensure-authenticated.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service/_guards/ensure-authenticated.service.ts ***!
  \*****************************************************************/
/*! exports provided: EnsureAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureAuthenticated", function() { return EnsureAuthenticated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let EnsureAuthenticated = class EnsureAuthenticated {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('_auth_royal_shopping')) {
            return true;
        }
        this.router.navigate(['/home'], { queryParams: { next: encodeURI(state.url) } });
        return false;
    }
};
EnsureAuthenticated.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EnsureAuthenticated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnsureAuthenticated);



/***/ }),

/***/ "./src/app/service/_guards/index.ts":
/*!******************************************!*\
  !*** ./src/app/service/_guards/index.ts ***!
  \******************************************/
/*! exports provided: EnsureAuthenticated, LoginRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensure-authenticated.service */ "./src/app/service/_guards/ensure-authenticated.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsureAuthenticated", function() { return _ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_0__["EnsureAuthenticated"]; });

/* harmony import */ var _login_redirect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-redirect.service */ "./src/app/service/_guards/login-redirect.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return _login_redirect_service__WEBPACK_IMPORTED_MODULE_1__["LoginRedirect"]; });





/***/ }),

/***/ "./src/app/service/_guards/login-redirect.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/_guards/login-redirect.service.ts ***!
  \***********************************************************/
/*! exports provided: LoginRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return LoginRedirect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginRedirect = class LoginRedirect {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('_auth_royal_shopping')) {
            return false;
        }
        else {
            return true;
        }
    }
};
LoginRedirect.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginRedirect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginRedirect);



/***/ }),

/***/ "./src/app/service/_helpers/error.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/_helpers/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(dateService, router) {
        this.dateService = dateService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 401) {
                // auto logout if 401 response returned from api
                this.dateService.purgeAuth();
                this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/service/_helpers/index.ts":
/*!*******************************************!*\
  !*** ./src/app/service/_helpers/index.ts ***!
  \*******************************************/
/*! exports provided: JwtInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/service/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/service/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });





/***/ }),

/***/ "./src/app/service/_helpers/jwt.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/_helpers/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        // console.log("request", request)
        // console.log("request URL", request.url)
        //  request.body && request.body
        if (request.body && request.body.open_api && request.body.token) {
            // if (request.body.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${request.body.token}`
                }
            });
            // }
        }
        else {
            // console.log("request URL", request.url)
            const token = this.jwtService.getToken();
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Token ${Object(src_app_common__WEBPACK_IMPORTED_MODULE_3__["decryptValue"])(this.jwtService.getToken())}`,
                    }
                });
            }
            const comapny_id = this.jwtService.getCompanyId();
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Comapny: `${comapny_id}`,
                    }
                });
            }
        }
        // console.log("request Header set", request)
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    commonListApi() {
        return this.http.get(`${this.API_URL}/common-list`);
    }
    getProfile() {
        return this.http.get(`${this.API_URL}/profile`);
    }
    unSelectCompany() {
        return this.http.get(`${this.API_URL}/deselect-company`);
    }
    selectCompany(id) {
        return this.http.get(`${this.API_URL}/select-company/${id}`);
    }
    logout() {
        // console.log("Logging out>>>>>>>>>>>")
        return this.http.get(`${this.API_URL}/logout`);
    }
    getCountryList() {
        return this.http.get(`${this.API_URL}/country-list`);
    }
    checkDomain(domain) {
        return this.http.get(`${this.API_URL}/cmp/${domain}`);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: CUSTOM_CONFIG, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_CONFIG", function() { return CUSTOM_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('customConfig');
let ConfigService = class ConfigService {
    constructor(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    set config(value) {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();
        // Merge the new config
        config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
        // Notify the observers
        this._configSubject.next(config);
    }
    get config() {
        return this._configSubject.asObservable();
    }
    get defaultConfig() {
        return this._defaultConfig;
    }
    _init() {
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ResolveEnd"])).subscribe(() => {
            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this._configSubject.getValue().layout, this._defaultConfig.layout)) {
                // Clone the current config
                const config = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._configSubject.getValue());
                // Reset the layout from the default config
                config.layout = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig.layout);
                // Set the config
                this._configSubject.next(config);
            }
        });
    }
    setConfig(value, opts = { emitEvent: true }) {
        // Get the value from the behavior subject
        let config = this._configSubject.getValue();
        // Merge the new config
        config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
        // If emitEvent option is true...
        if (opts.emitEvent === true) {
            // Notify the observers
            this._configSubject.next(config);
        }
    }
    getConfig() {
        return this._configSubject.asObservable();
    }
    resetToDefaults() {
        // Set the config from the default config
        this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CUSTOM_CONFIG,] }] }
];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(CUSTOM_CONFIG))
], ConfigService);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm2015/add/operator/distinctUntilChanged.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/service/jwt.service.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/app/common.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/app/service/common.service.ts");







let DataService = class DataService {
    constructor(jwtService, commonService) {
        this.jwtService = jwtService;
        this.commonService = commonService;
        // for storing current user details
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        // for checking user is authneticated or not
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        // for storing current company details
        this.currentCompanySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentCompany = this.currentCompanySubject.asObservable().distinctUntilChanged();
        // for checking company is selected or not
        this.isCompanySelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isCompanySelected = this.isCompanySelectedSubject.asObservable().distinctUntilChanged();
        // for storing common lists details
        this.commonListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.commonList = this.commonListSubject.asObservable().distinctUntilChanged();
        // for storing country details
        this.countrySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.country = this.countrySubject.asObservable().distinctUntilChanged();
        // Store Curreent Search Text
        this.searchTextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    changeMessage(message) {
        this.searchTextSubject.next(message);
    }
    saveToken(token) {
        this.jwtService.saveToken(Object(_common__WEBPACK_IMPORTED_MODULE_5__["encryptValue"])(token));
    }
    saveCommonList(data) {
        // console.log(data);
        this.commonListSubject.next(data);
    }
    setAuth(user) {
        // this.saveToken(user.Token['token']);
        this.saveToken(user.Token);
        this.updateAuth(user.User);
        // if (user.Company) {
        //   this.updateCompany(user.Company);
        // }
    }
    updateAuth(data) {
        // console.log('updateAuth', data);
        this.currentUserSubject.next(data);
        this.isAuthenticatedSubject.next(true);
    }
    purgeAuth() {
        this.jwtService.destroyToken();
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        this.currentUserSubject.next(null);
        this.purgeCompany();
    }
    updateCompany(data) {
        // console.log('updateCompany', data);
        this.currentCompanySubject.next(data);
        this.jwtService.saveCompanyId(data.id);
        this.jwtService.saveCompanyName(data.name);
        // this.jwtService.saveValue('timezone', data.timezone);
        this.isCompanySelectedSubject.next(true);
        //  this.isCompanySelected.subscribe((response) => {
        //   console.log("response======>",response);
        //  });
    }
    purgeCompany() {
        // console.log('purgeCompany');
        this.jwtService.destroyCompanyId();
        this.jwtService.destroyCompanyName();
        this.jwtService.destroyValue('timezone');
        this.currentCompanySubject.next(null);
        this.isCompanySelectedSubject.next(false);
        // this.router.navigateByUrl('/company');
    }
    getCompanyInfo() {
        const company_id = this.jwtService.getCompanyId();
    }
    checkDomain() {
        this.commonService.checkDomain(window.location.hostname).subscribe((response) => {
            if (response.success) {
                this.updateCompany(response.data);
                this.jwtService.saveCompanyId(response.data.company_id);
            }
        });
    }
    commonListApi() {
        this.commonService.commonListApi().subscribe((response) => {
            if (response.success) {
                this.saveCommonList(response.data);
            }
        });
    }
};
DataService.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/service/jwt.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/jwt.service.ts ***!
  \****************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let JwtService = class JwtService {
    getToken() {
        return window.localStorage['_auth_royal_shopping'];
    }
    saveToken(token) {
        window.localStorage['_auth_royal_shopping'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('_auth_royal_shopping');
    }
    getCompanyId() {
        return window.localStorage['__royal_shopping__cmp']; // string('4bf735e97269421a80b82359e7dc2288');
    }
    saveCompanyId(id) {
        window.localStorage['__royal_shopping__cmp'] = id;
    }
    destroyCompanyId() {
        window.localStorage.removeItem('__royal_shopping__cmp');
    }
    getCompanyName() {
        return window.localStorage['__royal_shopping__cmp_nm'];
    }
    saveCompanyName(name) {
        window.localStorage['__royal_shopping__cmp_nm'] = name;
    }
    destroyCompanyName() {
        window.localStorage.removeItem('__royal_shopping__cmp_nm');
    }
    getGoogleToken() {
        return String('AIzaSyCGc_953CXwgs8gzIwJsJ4yj7rz-vgl5ww'); // window.localStorage['google_token'];
    }
    saveValue(name, value) {
        window.localStorage[name] = value;
    }
    destroyValue(name) {
        window.localStorage.removeItem(name);
    }
    getValue(name) {
        return window.localStorage[name]; // window.localStorage['google_token'];
    }
};
JwtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    APIEndpoint: 'http://127.0.0.1:4000/api/v1'
    // APIEndpoint:"https://royal-shopping-node.herokuapp.com/api/v1"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * https://royal-shopping-node.herokuapp.com/api/v1/
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\My_Devlopment\Databse\Royal_Shopping\royal-shopping-admin_new\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
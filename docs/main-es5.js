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

/***/ "./node_modules/raw-loader/index.js!./src/app/admindashboard/admindashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admindashboard/admindashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>\n            Card Content Here\n            <button mat-button color=\"primary\">Primary</button>\n            <button mat-button color=\"accent\">Accent</button>\n            <button mat-button color=\"warn\">Warn</button>\n            <button mat-button disabled>Disabled</button>\n            <a mat-button routerLink=\".\">Link</a>\n\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainnav></app-mainnav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\" style=\"background:green; color:#fff;\">\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n            &copy; 2010 Topjal Inc. All rights reserved.\n            </div>\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n                   Developed By Mohammad Rajaul Islam\n                    </div>\n</div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1 class=\"display-3\">Hello, world!</h1>\n          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n          <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n        </div>\n      </div>\n\n<div class=\"container\">\n        \n    \n  <h2 class=\"mat-card-title\">Latest Tutorials</h2>\n            <div class=\"row\">\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n    \n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n            </div>\n\n            <h2 class=\"mat-card-titl\">Latest Projects</h2>\n            <div class=\"row\">\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n    \n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n            </div>\n\n            <h2 class=\"mat-card-title\">Latest Libraries</h2>\n            <div class=\"row\">\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n    \n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n            </div>\n\n\n\n        </div>\n    \n     "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/libraries/libraries.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/libraries/libraries.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>libraries works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainnav/mainnav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainnav/mainnav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"selectedTheme\">\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav   #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : ''\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false && !(isHandset$ | async) === false\">\n    <mat-toolbar>Topjal Inc.</mat-toolbar>\n    <mat-nav-list color=\"accent\">\n        <mat-divider ></mat-divider>\n        <a mat-menu-item routerLink=\"/\"><mat-icon color=\"accent\">dialpad</mat-icon><span>Topjal Inc.</span></a>\n        <mat-divider ></mat-divider>\n        <a mat-menu-item ss routerLink=\"/tutorials\"><mat-icon color=\"accent\">code</mat-icon><span>Tutorials</span></a>\n        <mat-divider ></mat-divider>\n        <a mat-menu-item  routerLink=\"/projects\"><mat-icon color=\"accent\">settings_ethernet</mat-icon><span>Projects</span></a>\n        <mat-divider ></mat-divider>\n         <a mat-menu-item routerLink=\"/libraries\"><mat-icon color=\"accent\">local_library</mat-icon><span>Library</span></a>\n        <mat-divider ></mat-divider>\n        <a mat-menu-item  routerLink=\"/signup\"><mat-icon color=\"accent\">person_add</mat-icon><span>Sign Up</span></a>\n        <mat-divider ></mat-divider>\n        <a mat-menu-item  routerLink=\"/signin\"><mat-icon color=\"accent\">exit_to_app</mat-icon><span>Sign In</span></a>\n     \n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"mainToolbar custom-navbar-header\"> \n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span><a mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/\">Topjal Inc.</a></span>\n     \n      \n      <a  *ngIf=\"(isHandset$ | async) === false\" mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/tutorials\"><mat-icon class=\"cus-mat-menu-item\">code</mat-icon><span>Tutorials</span></a>\n      <a  *ngIf=\"(isHandset$ | async) === false\" mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/projects\"><mat-icon class=\"cus-mat-menu-item\">settings_ethernet</mat-icon><span>Projects</span></a>\n      <a  *ngIf=\"(isHandset$ | async) === false\" mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/libraries\"><mat-icon class=\"cus-mat-menu-item\">local_library</mat-icon><span>Library</span></a>\n      <a  *ngIf=\"(isHandset$ | async) === false\" mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/signup\"><mat-icon class=\"cus-mat-menu-item\">person_add</mat-icon><span>Sign Up</span></a>\n      <a  *ngIf=\"(isHandset$ | async) === false\" mat-menu-item class=\"cus-mat-menu-item\" routerLink=\"/signin\"><mat-icon class=\"cus-mat-menu-item\">exit_to_app</mat-icon><span>Sign In</span></a>\n   \n\n\n\n<span class=\"toolbar-spacer\"></span>\n\n<!--Right Nav Area start-->\n<button mat-icon-button  aria-label=\"Example icon-button with a menu\">\n  <mat-icon>search</mat-icon>\n</button>\n\n<!--special button-->\t\n<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>format_color_fill</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n\n      <div class=\"btn-wrapper\">\n        <button mat-mini-fab class=\"btn btn-default\" (click)=\"selectedTheme='default'\"></button>\n        <button mat-mini-fab class=\"btn btn-purple\" (click)=\"selectedTheme='purple'\"></button>\n      </div>\n\t   <div class=\"btn-wrapper\">\n        <button mat-mini-fab class=\"btn btn-pink\" (click)=\"selectedTheme='pink'\"></button>\n        <button mat-mini-fab class=\"btn btn-deep-orange\" (click)=\"selectedTheme='deep-orange'\"></button>\n      </div>\n \n</mat-menu>\n\n\t<!--special button-->\n\t\n  \n  <button class=\"github mat-button-wrapper\" mat-icon-button>\n      <a href=\"https://github.com/springapidev/\" target=\"_blank\">   <img _ngcontent-lih-c1=\"\" alt=\"angular\" class=\"docs-angular-logo\" \n         src=\"https://material.angular.io/assets/img/homepage/github-circle-white-transparent.svg\">\n          \n       </a>\n       </button>\n       <!-- <button class=\"toolbar-avatar\"  mat-mini-fab  color=\"primary\"> </button>\n        -->\n       <!-- right nav area end  -->\n\n    </mat-toolbar>\n    \n    <!-- Add Content Here -->\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1 class=\"display-3\">Hello, world!</h1>\n          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n          <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n        </div>\n      </div>\n\n<div class=\"container\">\n        \n    \n  <h2 class=\"mat-card-title\">Latest Tutorials</h2>\n            <div class=\"row\">\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n    \n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                    <mat-card class=\"example-card\">\n                        <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n                            <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                        </mat-card-header>\n                        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                            alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                            <p>\n                                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                                Japan.\n                                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                                originally\n                                bred for hunting.\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button mat-button>LIKE</button>\n                            <button mat-button>SHARE</button>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n            </div>\n\n            \n\n        </div>\n    \n     \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n                <div class=\"col-offset-3 col-6\">\n<mat-card class=\"example-card\">\n    <mat-card-title>Login Here</mat-card-title>\n    <mat-card-content>\n      \n    </mat-card-content>\n</mat-card> \n                    </div>\n            </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tutorials/tutorials.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tutorials/tutorials.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n            Hire Me\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\n            Hire Me\n        </div>\n\n\n\n        <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n\n    <hr />\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\">\n                    <mat-card-content>\n                        <p>\n                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n                            Japan.\n                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n                            originally\n                            bred for hunting.\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button>LIKE</button>\n                        <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/admindashboard/admindashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admindashboard/admindashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5c2FkbWluL0Rlc2t0b3AvdG9wamFsL3NyYy9hcHAvYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/admindashboard/admindashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admindashboard/admindashboard.component.ts ***!
  \************************************************************/
/*! exports provided: AdmindashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function() { return AdmindashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var AdmindashboardComponent = /** @class */ (function () {
    function AdmindashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    AdmindashboardComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
    ]; };
    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admindashboard',
            template: __webpack_require__(/*! raw-loader!./admindashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admindashboard/admindashboard.component.html"),
            styles: [__webpack_require__(/*! ./admindashboard.component.scss */ "./src/app/admindashboard/admindashboard.component.scss")]
        })
    ], AdmindashboardComponent);
    return AdmindashboardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admindashboard/admindashboard.component */ "./src/app/admindashboard/admindashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _libraries_libraries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libraries/libraries.component */ "./src/app/libraries/libraries.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'tutorials', component: _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_8__["TutorialsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'libraries', component: _libraries_libraries_component__WEBPACK_IMPORTED_MODULE_6__["LibrariesComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"] },
    { path: 'adb', component: _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'topjal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainnav/mainnav.component */ "./src/app/mainnav/mainnav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admindashboard/admindashboard.component */ "./src/app/admindashboard/admindashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tutorials/tutorials.component */ "./src/app/tutorials/tutorials.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _libraries_libraries_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./libraries/libraries.component */ "./src/app/libraries/libraries.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








//import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_6__["MainnavComponent"],
                _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_8__["AdmindashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"],
                _tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_14__["TutorialsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                _libraries_libraries_component__WEBPACK_IMPORTED_MODULE_16__["LibrariesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 100%;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5c2FkbWluL0Rlc2t0b3AvdG9wamFsL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/libraries/libraries.component.scss":
/*!****************************************************!*\
  !*** ./src/app/libraries/libraries.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 100%;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5c2FkbWluL0Rlc2t0b3AvdG9wamFsL3NyYy9hcHAvbGlicmFyaWVzL2xpYnJhcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlicmFyaWVzL2xpYnJhcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFRTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcmllcy9saWJyYXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/libraries/libraries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/libraries/libraries.component.ts ***!
  \**************************************************/
/*! exports provided: LibrariesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesComponent", function() { return LibrariesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibrariesComponent = /** @class */ (function () {
    function LibrariesComponent() {
    }
    LibrariesComponent.prototype.ngOnInit = function () {
    };
    LibrariesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-libraries',
            template: __webpack_require__(/*! raw-loader!./libraries.component.html */ "./node_modules/raw-loader/index.js!./src/app/libraries/libraries.component.html"),
            styles: [__webpack_require__(/*! ./libraries.component.scss */ "./src/app/libraries/libraries.component.scss")]
        })
    ], LibrariesComponent);
    return LibrariesComponent;
}());



/***/ }),

/***/ "./src/app/mainnav/mainnav.component.scss":
/*!************************************************!*\
  !*** ./src/app/mainnav/mainnav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.github {\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 55px !important;\n}\n\n.cus-mat-menu-item {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5c2FkbWluL0Rlc2t0b3AvdG9wamFsL3NyYy9hcHAvbWFpbm5hdi9tYWlubmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWlubmF2L21haW5uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FER0E7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FDREE7O0FEVUE7RUFDRSx1QkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvbWFpbm5hdi9tYWlubmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4vLy8vLy8vLy8vZ2l0IGljb24uLi4uLi4uLi5cbi5naXRodWJ7XG4gXG5tYXJnaW46IDAgNHB4IDNweCAwO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLy8vLy8vLy8vdG9wIG5hdiBiZWF0aWZ5XG4uY3VzdG9tLW5hdmJhci1oZWFkZXJ7XG4gXG59XG5cbi8vLy8vLy8vb3ZlcnJpZGUgaGVhZGVyIHRvb2xiYXIgaGVpZ2h0XG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNTVweCFpbXBvcnRhbnQ7XG59XG5cbi5jdXMtbWF0LW1lbnUtaXRlbXtcbiAgY29sb3I6d2hpdGU7XG5cbn0iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5naXRodWIge1xuICBtYXJnaW46IDAgNHB4IDNweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzLW1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/mainnav/mainnav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mainnav/mainnav.component.ts ***!
  \**********************************************/
/*! exports provided: MainnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainnavComponent", function() { return MainnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MainnavComponent = /** @class */ (function () {
    function MainnavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainnavComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    MainnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainnav',
            template: __webpack_require__(/*! raw-loader!./mainnav.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainnav/mainnav.component.html"),
            styles: [__webpack_require__(/*! ./mainnav.component.scss */ "./src/app/mainnav/mainnav.component.scss")]
        })
    ], MainnavComponent);
    return MainnavComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")]
        })
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tutorials/tutorials.component.scss":
/*!****************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 100%;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5c2FkbWluL0Rlc2t0b3AvdG9wamFsL3NyYy9hcHAvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFRTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFscy90dXRvcmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tutorials/tutorials.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tutorials/tutorials.component.ts ***!
  \**************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorials',
            template: __webpack_require__(/*! raw-loader!./tutorials.component.html */ "./node_modules/raw-loader/index.js!./src/app/tutorials/tutorials.component.html"),
            styles: [__webpack_require__(/*! ./tutorials.component.scss */ "./src/app/tutorials/tutorials.component.scss")]
        })
    ], TutorialsComponent);
    return TutorialsComponent;
}());



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
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sysadmin/Desktop/topjal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
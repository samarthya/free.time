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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>About Us</h1>\r\n  <hr/>\r\n  <p>{{ descriptionStr }}</p>\r\n\r\n  <div class=\"card-deck\">\r\n    <!-- NGFOR Structure directive.-->\r\n      <ft-person [profile]=ele *ngFor=\"let ele of profiles\"></ft-person>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<ft-navbar></ft-navbar>\r\n<div class=\"container topMargin\">\r\n  <!--\r\n    The RouterOutlet is a directive from the router library that is used like a component.\r\n    More information at: https://angular.io/guide/router#router-outlet\r\n  -->\r\n  <router-outlet></router-outlet>\r\n  <ft-footer></ft-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n  <form (ngSubmit)=\"onSubmission()\" [formGroup]=\"contactForm\"  aria-autocomplete=\"none\">\r\n    <div class=\"card justify-content-center\" style=\"width: 35rem;\">\r\n      <img class=\"card-img-top\" src=\"../../assets/images/contactus.png\" alt=\"Card image cap\" width=\"305\" height=\"180\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Contact Form</h5>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\r\n          content.\r\n        </p>\r\n      </div>\r\n      <!--\r\n      Reactive form - Code driven instead of template driven.\r\n      From the documentation\r\n      Each change to the form state returns a new state, which maintains the integrity of the model between changes.\r\n      Reactive forms are built around observable streams, where form inputs and values are provided as streams of\r\n      input values, which can be accessed synchronously.\r\n      Use form control to set values in the coponent programmatically.\r\n    -->\r\n\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <input type=\"text\" name=\"name\" #name formControlName=\"name\" placeholder=\"Name\" required\r\n            aria-describedby=\"nameHelp\" [ngClass]=\"{ 'errorInput': isNameValid()} \" />\r\n          <small id=\"nameHelp\" class=\"form-text text-muted\">What you would like us to address you as?</small>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <input type=\"email\" #email name=\"email\" formControlName=\"email\" placeholder=\"Email\"\r\n            aria-describedby=\"emailHelp\" required [ngClass]=\"{ 'errorInput': isEmailValid()}\" />\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </li>\r\n\r\n        <li class=\"list-group-item\">\r\n          <textarea name=\"comment\" #comment id=\"taComments\" formControlName=\"comment\" placeholder=\"Comments\" rows=\"10\"\r\n            class=\"form-control\" required></textarea>\r\n        </li>\r\n      </ul>\r\n      <div class=\"card-body\">\r\n        <a href=\"#\" class=\"card-link\">\r\n          <input type=\"submit\" value=\"Submit\" [disabled]=\"!contactForm.valid\" class=\"btn btn-primary\">\r\n        </a>\r\n        <a href=\"#\" class=\"card-link\">\r\n          <input type=\"button\" value=\"Reset\" class=\"btn btn-secondary\" (click)=\"onReset()\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col text-center\">\r\n      <span id=\"copyright\">All rights reserved. Copyright @ 2019</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <a class=\"col-1 col-lg-2 col-sm-1\" href=\"\">\r\n      <fa-icon [icon]=\"['fab', 'blogger']\" class=\"border-bottom\" [spin]=\"true\"></fa-icon>\r\n    </a>\r\n    <a class=\"col-1 col-lg-2 col-sm-1\" href=\"\">\r\n      <fa-icon [icon]=\"['fab', 'twitter']\" class=\"border-bottom\" [spin]=\"true\"></fa-icon>\r\n    </a>\r\n    <a class=\"col-1 col-lg-2 col-sm-1\" href=\"\">\r\n      <fa-icon [icon]=\"['fab', 'linkedin']\" [pulse]=\"true\" class=\"border-bottom\"></fa-icon>\r\n    </a>\r\n    <a class=\"col-1 col-lg-2 col-sm-1\" href=\"\">\r\n      <fa-icon [icon]=\"['fab', 'git']\" [spin]=\"true\" class=\"border-bottom\"></fa-icon>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\">\r\n  <div class=\"card bg-light text-black border-dark\">\r\n    <img\r\n      class=\"card-img card-img-bottom size-check\"\r\n      src=\"../../assets/images/Free.Time.png\"\r\n      alt=\"Card image\"\r\n      width=\"1280\"\r\n      height=\"640\"\r\n    />\r\n    <div class=\"card-img-overlay card-body dimCheck\">\r\n      <h1 class=\"card-header\">Free.Time</h1>\r\n      <p class=\"card-text\">\r\n        Some crave for the latest technologies, some crave for the knowledge -\r\n        free of syntax, some crave for a healthy mix of hands-on and wealthy\r\n        experience. In some way or the other, we all are handled by the inner\r\n        cravings and to decide what works for an individual, it is usually a\r\n        crowd copy that is employed. My friend just tried this, my friend just\r\n        tried that. It might work for some, but for manjority it is a futile\r\n        exercise. In one such new and spiritied efforts, we are trying to\r\n        collate our collective energies to learn and build a platform to share,\r\n        highlight, and advertise the knowledge we have accumulated, and to\r\n        wisely build upon our professional social presence.\r\n      </p>\r\n      <hr />\r\n      <p class=\"card-text\">@Free.Time</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/errorpage/errorpage.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/errorpage/errorpage.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n    <div class=\"container\">\r\n      <div class=\"alert alert-success\">\r\n        <p>ERROR:403 Page requested cannot be found.</p>\r\n        <hr/>\r\n        <p>Please consult our help for more information.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-dark text-white\">\r\n  <img class=\"card-img\" src=\"./assets/images/learn_together.jpeg\" alt=\"Card image\">\r\n  <div class=\"card-img-overlay mx-auto\" >\r\n     <div class=\"card border-secondary d-flex mx-md-auto ml-sm-0 boxSize\" style=\"width: 25rem; margin-top: 140px\" >\r\n      <div class=\"card-body cardLogin\" style=\"color:red\" >\r\n        <div>\r\n          <span class=\"mx-auto\" style=\"color:black\" >Sign In With</span>\r\n         \r\n          <a href=\"#\" class=\"btn\">\r\n              <i class=\"fa fa-facebook-official\" style=\"font-size:30px;color:blue; margin-left: 20px\" ></i>\r\n           <!--- <fa-icon [icon]=\"['fa', 'fa-facebook']\" size=\"2x\"></fa-icon> -->\r\n          </a>\r\n          <a href=\"#\" class=\"btn\">\r\n              <i class=\"fa fa-google-plus-official\" style=\"font-size:35px;color:red; margin-left: 20px\" ></i>\r\n           <!---- <fa-icon [icon]=\"['fab', 'google']\" size=\"2x\"></fa-icon>  -->\r\n          </a>\r\n        </div>\r\n        <hr />\r\n        <form (ngSubmit)=\"onSignin()\" [formGroup]=\"loginForm\"  aria-autocomplete=\"none\">\r\n          <div class=\"card-text\">\r\n            <div class=\"form-group d-block d-sm-inline\">\r\n              <input type=\"text\" class=\"form-control\" id=\"username\" aria-describedby=\"usernameHelp\"\r\n                placeholder=\"Username\" [ngClass]=\"{ 'errorInput': isUsernameValid()} \" />\r\n              <small id=\"usernameHelp\" class=\"form-text text-muted d-none d-md-block\">The unique username provided to\r\n                you.</small>\r\n            </div>\r\n            <div class=\"form-group d-block d-sm-inline\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\"\r\n                aria-describedby=\"passwordHelp\" [ngClass]=\"{ 'errorInput': isPasswordValid()} \" />\r\n              <small id=\"passwordHelp\" class=\"form-text text-muted d-none d-md-block\">Your secure password.</small>\r\n            </div>\r\n          </div>\r\n\r\n            <div class=\"inlineD\">\r\n              <a id=\"exampleCheck1\" href=\"\"><small>Forgot password?</small></a>\r\n            </div>\r\n            <div class=\"inlineD dx-sm-auto\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">SIGN IN</button>\r\n            </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/register/register.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Deliberately no user identifiable information has been put. -->\r\n<div class=\"\">\r\n  <img id=\"profilePic\" src=\"https://via.placeholder.com/80\" class=\"img-thumbnail d-none d-md-block imgSize mb-2\">\r\n  <div class=\"d-flex bd-highlight\">\r\n    <form #registerUser=\"ngForm\" action=\"\" class=\"form-group\">\r\n      <!-- First Name & Last Name -->\r\n      <div class=\"input-group d-flex flex-row\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"\">First and last name</span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"user.name\" name=\"name\" required>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\" id=\"surname\">\r\n      </div>\r\n\r\n      <!-- Email Address -->\r\n      <div class=\"form-group pt-2\">\r\n        <label for=\"inputEmail\">Email address</label>\r\n        <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail\" aria-describedby=\"emailHelp\" id=\"email\"\r\n          [(ngModel)]=\"user.email\"\r\n          placeholder=\"Enter email\"\r\n          required>\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n      </div>\r\n\r\n      <!-- Password and confirm password -->\r\n      <div class=\"form-group pt-2\">\r\n        <label for=\"inputPassword\" class=\"pt-2\">Password</label>\r\n        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword1\" [(ngModel)]=\"user.password\" placeholder=\"Password\">\r\n        <label for=\"inputPassword\" class=\"pt-2\">Confirm</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\r\n      </div>\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"form-group\">\r\n        <label for=\"imageFile\">Please select a profile pic</label>\r\n        <input type=\"file\" class=\"form-control-file\" id=\"imageFile\" name=\"imageUrl\" [(ngModel)]=\"user.imageUrl\">\r\n      </div>\r\n\r\n      <!-- Subscribe to the EMAIL list.-->\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text\">\r\n            <input type=\"checkbox\" aria-label=\"Checkbox for following text input\" value=\"false\" name=\"subscription\" [(ngModel)]=\"user.subscribeToEmail\">\r\n          </div>\r\n        </div>\r\n        <input readonly type=\"text\" class=\"form-control\" aria-label=\"Text input with checkbox\"\r\n          value=\"Do you wish to subscribe to our newsletter?\" id=\"newsLetter\" name=\"labelSubscription\">\r\n      </div>\r\n\r\n\r\n\r\n      <!-- About you. -->\r\n      <div class=\"input-group my-2\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Description</span>\r\n        </div>\r\n        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"description\" name=\"description\" [(ngModel)]=\"user.description\"></textarea>\r\n      </div>\r\n\r\n      <!-- Social symbols. -->\r\n      <div class=\"input-group input-group-sm mb-3\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">\r\n              <fa-icon [icon]=\"['fab','git']\"></fa-icon>\r\n            </span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\" id=\"gitUrl\" name=\"gitProfile\" [(ngModel)]=\"user.gitProfile\">\r\n        </div>\r\n        <div class=\"input-group input-group-sm mb-3\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">\r\n              <fa-icon [icon]=\"['fab','google']\"></fa-icon>\r\n            </span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\" id=\"googleUrl\" name=\"googleProfile\" [(ngModel)]=\"user.googleProfile\">\r\n      </div>\r\n\r\n      <!-- Submit -->\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n  </div>\r\n  {{user | json}}\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/thankyou/thankyou.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/thankyou/thankyou.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n  <div class=\"container\">\r\n    <div class=\"alert alert-success\">\r\n      <p>\r\n          <fa-icon [icon]=\"['fas', 'thumbs-up']\" size=\"6x\" class=\"mr-2\"></fa-icon><span>{{ messageString }}</span>\r\n      </p>\r\n      <hr/>\r\n      <p>Thank you!</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/images/brand.png\"></a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">\r\n          Home <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About <span\r\n            class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          P-Holder\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"d-block d-sm-none nav-item\">\r\n        <a class=\"nav-link d-lg-inline\" href=\"#\" tabindex=\"-1\" aria-disabled=\"false\" [routerLink]=\"['/login']\" >Sign In</a>\r\n      </li>\r\n    </ul>\r\n\r\n\r\n    <form class=\"form-inline my-2 my-lg-0 mr-2\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n\r\n    <a class=\"d-lg-inline mr-2 nav-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"false\" [routerLink]=\"['/login']\">\r\n      <fa-icon [icon]=\"['fas', 'sign-in-alt']\" size=\"2x\" class=\"mr-2\" class=\"d-none d-sm-block\" ></fa-icon>\r\n    </a>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/person/person.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/person/person.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <img class=\"card-img-top\" [src]=\"profile.imageUrl\" alt=\"Card image cap\">\r\n    <h5 class=\"card-title\">{{ profile.title }}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{ profile.subTitle }}</h6>\r\n    <p class=\"card-text\">{{ profile.description }}</p>\r\n    <a href=\"#\" class=\"card-link\">\r\n      <fa-icon [icon]=\"['fab', 'linkedin']\" class=\"align-content-start\"></fa-icon>\r\n    </a>\r\n    <a href=\"#\" class=\"card-link\">\r\n      <fa-icon [icon]=\"['fab', 'git']\" class=\"align-content-end\"></fa-icon>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/log.service */ "./src/app/shared/log.service.ts");



/**
 * <h2>About page component</h2>
 * <p>
 * This should display information about the authors and contributors of the SPA.
 * For more clarity, you should be aware about binding and component interaction, to undestand how
 * the information is being
 * <a href="https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding">passed.</a>
 * </p>
 */
var AboutComponent = /** @class */ (function () {
    /**
     * Basic initialization constructor that includes
     * a basic console logging service.
     * @param logger {Logger} Logger service end point.
     */
    function AboutComponent(logger) {
        this.logger = logger;
        /**
         * @ignore
         */
        this.profiles = [
            {
                title: 'Software Engineer',
                subTitle: ' Lead 1',
                description: 'I am Saurabh',
                imageUrl: '../../assets/images/ss.jpg',
                linkedIn: '',
                giturl: ''
            },
            {
                title: 'Software Engineer',
                subTitle: 'Lead 2',
                description: 'I am Bhawna',
                imageUrl: '../../assets/images/bb.jpg',
                linkedIn: '',
                giturl: ''
            },
            {
                title: 'Software Engineer',
                subTitle: 'Lead 3',
                description: 'I am Vasu',
                imageUrl: '../../assets/images/1.png',
                linkedIn: '',
                giturl: ''
            }
        ];
        this.description = 'A short introduction to the about page, which can be moderated later'
            + ' through a service or any other source.';
    }
    Object.defineProperty(AboutComponent.prototype, "descriptionStr", {
        /**
         * Getter method for the static string.
         */
        get: function () {
            return this.description;
        },
        /**
         * Setter method for the {@link AboutComponent #description}
         */
        set: function (value) {
            this.description = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The {OnInit} hook method.
     */
    AboutComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for AboutComponent.');
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _shared_log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topMargin {\r\n  margin-top: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wTWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuIl19 */"

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


/**
 * <h2>The angular-bootstrapped class</h2>
 * <p>Every <b>root component</b> connects Component Hierarchy with Page DOM.</p>
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _shared_person_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/person/person.component */ "./src/app/shared/person/person.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _routes_main_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/main.routes */ "./src/app/routes/main.routes.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/log.service */ "./src/app/shared/log.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/thankyou/thankyou.component */ "./src/app/shared/components/thankyou/thankyou.component.ts");
/* harmony import */ var _shared_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/errorpage/errorpage.component */ "./src/app/shared/components/errorpage/errorpage.component.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/register/register.component */ "./src/app/shared/components/register/register.component.ts");






















// import { RouterModule } from '@angular/router';
/**
 * <p>
 * The root module to be bootstrapped by angular for more information
 * look <a href="https://angular.io/guide/bootstrapping">here</a>
 * </p>
 * <p>
 * NgModules are the compilation context for all the components
 * declared, defined for consumption.
 * </p>
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_14__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faGit"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faBlogger"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faThumbsUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faThumbsDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faAnchor"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSignInAlt"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            /**
             * Components declared in this module.
             * Components should be declared in only one NgModule class.
             */
            declarations: [
                _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _shared_person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _shared_components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_18__["ThankyouComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _shared_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_19__["ErrorpageComponent"],
                _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            ],
            /**
             * For browser specific functionality you need this module.
             */
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                // RouterModule.forRoot(appRoutes, { enableTracing: true })
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes_main_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])
            ],
            providers: [_shared_log_service__WEBPACK_IMPORTED_MODULE_12__["Logger"]],
            /**
             * Root component that is inserted in the index.html.
             * Each component bootstrapped is root of its complete application components.
             */
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.errorInput {\r\n  border-right: 4px solid red;\r\n}\r\n\r\nimg {\r\n  max-width: 305;\r\n  max-height: 180;\r\n  align-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsOEJBQThCLEVBQUUsVUFBVTtBQUM1Qzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4uZXJyb3JJbnB1dCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMzA1O1xyXG4gIG1heC1oZWlnaHQ6IDE4MDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/log.service */ "./src/app/shared/log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






/**
 * <p>
 * Reactive form to allow user to add details to be allowed to contacted.
 * <a href="https://angular.io/guide/reactive-forms">see this link</a>
 * Reactive form is built around observable streams.
 * </p>
 * <img src="https://angular.io/generated/images/guide/forms-overview/key-diff-reactive-forms.png"/>
 */
var ContactComponent = /** @class */ (function () {
    function ContactComponent(logger, route, router) {
        this.logger = logger;
        this.route = route;
        this.router = router;
        /**
         * Name - Input element that will store the name of the commentator.
         * Email - Email identification for the person sending in the contact, only for records.
         * Comments - Actual comment supplied.
         */
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: this.comment
        });
        this.contactForm.addControl('name', this.name);
        this.contactForm.addControl('email', this.email);
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for ContactComponent.');
    };
    /**
     * Function that is called when you submit the form.
     * @param value  string Value of form control elements binded in the form group.
     */
    ContactComponent.prototype.onSubmission = function () {
        var values = this.contactForm.value;
        this.logger.log(' Submit called from contactcomponent.');
        this.logger.log(' Values: ' + JSON.stringify(values));
        this.router.navigate(['/tyu'], {
            queryParams: { message: 'Your message has been sent.' }
        });
    };
    /**
     * Resets the contact form.
     */
    ContactComponent.prototype.onReset = function ($event) {
        this.name.reset();
        this.email.reset();
        this.comment.reset();
        this.contactForm.reset();
        $event.stopImmediatePropagation();
    };
    /**
     * A declarative way of validating the Name is supplied and is correct to apply CSS using
     * ngClass.
     * For more information <a href="https://angular.io/api/common/NgClass#ngclass">see</a>
     */
    ContactComponent.prototype.isNameValid = function () {
        var name = this.contactForm.get('name');
        if (name.touched) {
            return name.invalid;
        }
        else {
            return false;
        }
    };
    /**
     * Function called as part of expression condition for Email input for class application.
     */
    ContactComponent.prototype.isEmailValid = function () {
        var email = this.contactForm.get('email');
        if (email.touched) {
            return email.invalid;
        }
        return false;
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _shared_log_service__WEBPACK_IMPORTED_MODULE_3__["Logger"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span#copyright\r\n{\r\n  font-family: cursive;\r\n  font-variant-caps: all-petite-caps;\r\n  font-size: small;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiNjb3B5cmlnaHRcclxue1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/log.service */ "./src/app/shared/log.service.ts");



/**
 * Footer component shall contain the basic links to the website and with the appropriate
 * brand logos that can help identify the information.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(loggerService) {
        this.loggerService = loggerService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.loggerService.log(' FooterComponent: OnInit called.');
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _shared_log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ft-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 480px) {\r\n  .size-check {\r\n    display: none;\r\n  }\r\n  #intro {\r\n    min-height: 640px;\r\n    width:100%;\r\n  }\r\n}\r\n\r\n.dimCheck {\r\n  min-height: 640px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5zaXplLWNoZWNrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNpbnRybyB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGltQ2hlY2sge1xyXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _shared_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/log.service */ "./src/app/shared/log.service.ts");



/**
 * A basic component that shall have a background image (which we will generalize away from CSS)
 * and have a header and title.
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(logService) {
        this.logService = logService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.logService.log(' Home Component: ' + 'ngOnInit called.');
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HomeComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HomeComponent.prototype, "body", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/main.routes.ts":
/*!***************************************!*\
  !*** ./src/app/routes/main.routes.ts ***!
  \***************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/thankyou/thankyou.component */ "./src/app/shared/components/thankyou/thankyou.component.ts");
/* harmony import */ var _shared_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/errorpage/errorpage.component */ "./src/app/shared/components/errorpage/errorpage.component.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/register/register.component */ "./src/app/shared/components/register/register.component.ts");







/**
 * Defines the routes for the main application.
 * For more information for routing please [see](https://angular.io/start/routing)
 * A routed Angular application has one singleton instance of the Router service.
 * The order of the routes in the configuration matters and this is by design.
 */
var appRoutes = [
    { path: 'tyu', component: _shared_components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_3__["ThankyouComponent"], data: {
            message: 'Thank you for contacting us.'
        } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'login', component: _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _shared_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_4__["ErrorpageComponent"] }
];


/***/ }),

/***/ "./src/app/shared/components/constants/variables.constant.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/constants/variables.constant.ts ***!
  \*******************************************************************/
/*! exports provided: MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE", function() { return MESSAGE; });
var MESSAGE = 'message';


/***/ }),

/***/ "./src/app/shared/components/errorpage/errorpage.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/errorpage/errorpage.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/errorpage/errorpage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/errorpage/errorpage.component.ts ***!
  \********************************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log.service */ "./src/app/shared/components/log.service.ts");



/**
 * Error page component is a view that is meant for displaying error message for any
 * possible scenario that cannot be handled within the parent view.
 */
var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent(logger) {
        this.logger = logger;
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for ErrorpageComponent');
    };
    ErrorpageComponent.ctorParameters = function () { return [
        { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! raw-loader!./errorpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.css */ "./src/app/shared/components/errorpage/errorpage.component.css")]
        })
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/log.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/log.service.ts ***!
  \**************************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * A place holder class to simplify logging to console at the moment.
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.dateInstance = new Date();
        this._debugMode = true;
    }
    /**
     * Simple logging message.
     * @param msg Message to be logged.
     */
    Logger.prototype.log = function (msg) {
        if (this.debugMode === true) {
            console.log(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    /**
     * Error logging capability.
     * @param msg Message to be looged.
     */
    Logger.prototype.error = function (msg) {
        if (this.debugMode === true) {
            console.error(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    Logger.prototype.warn = function (msg) {
        if (this.debugMode === true) {
            console.warn(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    Object.defineProperty(Logger.prototype, "debugMode", {
        get: function () {
            return this._debugMode;
        },
        set: function (value) {
            this._debugMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Logger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 480px) {\r\n\r\n  img {\r\n    background-color: grey;\r\n    min-height: 330px;\r\n  }\r\n\r\n  .inlineD {\r\n    display: inline;\r\n  }\r\n\r\n  button[type=\"submit\"] {\r\n    float: right;\r\n  }\r\n}\r\n\r\nboxSize {\r\n  min-width: 500px;\r\n  min-height: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gIGltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgbWluLWhlaWdodDogMzMwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5saW5lRCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib3hTaXplIHtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log.service */ "./src/app/shared/components/log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





/**
 * Login component
 * Add some more description.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(logger, route, router) {
        this.logger = logger;
        this.route = route;
        this.router = router;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.loginForm.addControl('username', this.username);
        this.loginForm.addControl('password', this.password);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for LoginComponent.');
    };
    LoginComponent.prototype.onSignin = function () {
        var values = this.loginForm.value;
        this.logger.log(' Sign-in called from logincomponent');
        this.logger.log(' Values: ' + JSON.stringify(values));
        this.router.navigate(['/signedin'], {
            queryParams: { message: 'Sign in Attempt.' }
        });
    };
    LoginComponent.prototype.isUsernameValid = function () {
        var username = this.loginForm.get('username');
        if (username.touched) {
            return username.invalid;
        }
        else {
            return false;
        }
    };
    LoginComponent.prototype.isPasswordValid = function () {
        var password = this.loginForm.get('password');
        if (password.touched) {
            return password.invalid;
        }
        else {
            return false;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/register/register.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "imgSize {\r\n  min-width: 80px;\r\n  max-width: 85px;\r\n  min-height: 80px;\r\n  max-height: 85px;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nU2l6ZSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1heC13aWR0aDogODVweDtcclxuICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDg1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * It allows user to be registered for the portal. The basic information expected is
 * <code>
 * {
 *  firstName: "Name",
 *  lastName: "LastName",
 * }
 * </code>
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.userP = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            subscribeToEmail: 0,
            gitProfile: '',
            googleProfile: '',
            imageUrl: '',
            description: ''
        };
    }
    Object.defineProperty(RegisterComponent.prototype, "user", {
        get: function () {
            return this.userP;
        },
        set: function (user) {
            this.userP = user;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/shared/components/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/thankyou/thankyou.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/thankyou/thankyou.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RoYW5reW91L3RoYW5reW91LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/thankyou/thankyou.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/thankyou/thankyou.component.ts ***!
  \******************************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log.service */ "./src/app/shared/components/log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_variables_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/variables.constant */ "./src/app/shared/components/constants/variables.constant.ts");





var ThankyouComponent = /** @class */ (function () {
    // private message$: Observable<string>;
    function ThankyouComponent(logger, route, router) {
        this.logger = logger;
        this.route = route;
        this.router = router;
    }
    ThankyouComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for ThankyouComponent');
        // this.message$ = this.route.queryParamMap.pipe(
        //   map(param => {
        //     return param.get(MESSAGE);
        //   })
        // );
        this.message = this.route.snapshot.queryParams[_constants_variables_constant__WEBPACK_IMPORTED_MODULE_4__["MESSAGE"]];
    };
    Object.defineProperty(ThankyouComponent.prototype, "messageString", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    ThankyouComponent.ctorParameters = function () { return [
        { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ThankyouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./thankyou.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.css */ "./src/app/shared/components/thankyou/thankyou.component.css")]
        })
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/app/shared/log.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/log.service.ts ***!
  \***************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * A place holder class to simplify logging to console at the moment.
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.dateInstance = new Date();
        this._debugMode = true;
    }
    /**
     * Simple logging message.
     * @param msg Message to be logged.
     */
    Logger.prototype.log = function (msg) {
        if (this.debugMode === true) {
            console.log(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    /**
     * Error logging capability.
     * @param msg Message to be looged.
     */
    Logger.prototype.error = function (msg) {
        if (this.debugMode === true) {
            console.error(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    Logger.prototype.warn = function (msg) {
        if (this.debugMode === true) {
            console.warn(this.dateInstance.getDate() + ' : ' + msg);
        }
    };
    Object.defineProperty(Logger.prototype, "debugMode", {
        get: function () {
            return this._debugMode;
        },
        set: function (value) {
            this._debugMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Logger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log.service */ "./src/app/shared/log.service.ts");



/**
 * Navigation component that holds the navigation links,
 * brand icon and other information to guide the navigation.
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(logger) {
        this.logger = logger;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit for NavBarComponent called.');
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ft-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/person/person.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/person/person.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/person/person.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/person/person.component.ts ***!
  \***************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log.service */ "./src/app/shared/log.service.ts");



/**
 * Person component allows a card visualization for the profiles that needs to be shown.
 * It is the smallest component, that only takes input from the component creating this
 * component and visualizes using bootstrap cards.
 */
var PersonComponent = /** @class */ (function () {
    function PersonComponent(logger) {
        this.logger = logger;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.logger.log(' ngOnInit called for PersonComponent');
    };
    PersonComponent.ctorParameters = function () { return [
        { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PersonComponent.prototype, "profile", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ft-person',
            template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/shared/person/person.component.css")]
        })
    ], PersonComponent);
    return PersonComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
/**
 * An Angular platform is the entry point for Angular on a web page. Each page has exactly one platform,
 * and services (such as reflection) which are common to every Angular application running on the page
 * are bound in its scope.
 * [AngularRef] (https://angular.io/api/core/ApplicationRef)
 * Each application is created from the module using bootstrapModule method.
 * Platform -> Instance
 */
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bhabh06\Documents\samarthya\free.time\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
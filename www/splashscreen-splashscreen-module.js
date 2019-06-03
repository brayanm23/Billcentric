(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splashscreen-splashscreen-module"],{

/***/ "./src/app/splashscreen/splashscreen.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.module.ts ***!
  \*****************************************************/
/*! exports provided: SplashscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function() { return SplashscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashscreen.page */ "./src/app/splashscreen/splashscreen.page.ts");







var routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]
    }
];
var SplashscreenPageModule = /** @class */ (function () {
    function SplashscreenPageModule() {
    }
    SplashscreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
        })
    ], SplashscreenPageModule);
    return SplashscreenPageModule;
}());



/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.html":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"transparent-header\">\n  <img class=\"logo\" src=\"assets/img/splashbillcentric.png\" />\n</ion-content>\n"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  padding-top: 45px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYXlhbi9CaWxsY2VudHJpYy9zcmMvYXBwL3NwbGFzaHNjcmVlbi9zcGxhc2hzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaHNjcmVlbi9zcGxhc2hzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.ts":
/*!***************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.ts ***!
  \***************************************************/
/*! exports provided: SplashscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function() { return SplashscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplashscreenPage = /** @class */ (function () {
    function SplashscreenPage() {
    }
    SplashscreenPage.prototype.ngOnInit = function () {
    };
    SplashscreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splashscreen',
            template: __webpack_require__(/*! ./splashscreen.page.html */ "./src/app/splashscreen/splashscreen.page.html"),
            styles: [__webpack_require__(/*! ./splashscreen.page.scss */ "./src/app/splashscreen/splashscreen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplashscreenPage);
    return SplashscreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=splashscreen-splashscreen-module.js.map
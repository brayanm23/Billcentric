(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-service-detail-service-module"],{

/***/ "./src/app/detail-service/detail-service.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detail-service/detail-service.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailServicePageModule", function() { return DetailServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-service.page */ "./src/app/detail-service/detail-service.page.ts");







var routes = [
    {
        path: '',
        component: _detail_service_page__WEBPACK_IMPORTED_MODULE_6__["DetailServicePage"]
    }
];
var DetailServicePageModule = /** @class */ (function () {
    function DetailServicePageModule() {
    }
    DetailServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_service_page__WEBPACK_IMPORTED_MODULE_6__["DetailServicePage"]]
        })
    ], DetailServicePageModule);
    return DetailServicePageModule;
}());



/***/ }),

/***/ "./src/app/detail-service/detail-service.page.html":
/*!*********************************************************!*\
  !*** ./src/app/detail-service/detail-service.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detail-service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail-service/detail-service.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detail-service/detail-service.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1zZXJ2aWNlL2RldGFpbC1zZXJ2aWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detail-service/detail-service.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detail-service/detail-service.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailServicePage", function() { return DetailServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailServicePage = /** @class */ (function () {
    function DetailServicePage() {
    }
    DetailServicePage.prototype.ngOnInit = function () {
    };
    DetailServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-service',
            template: __webpack_require__(/*! ./detail-service.page.html */ "./src/app/detail-service/detail-service.page.html"),
            styles: [__webpack_require__(/*! ./detail-service.page.scss */ "./src/app/detail-service/detail-service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailServicePage);
    return DetailServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-service-detail-service-module.js.map
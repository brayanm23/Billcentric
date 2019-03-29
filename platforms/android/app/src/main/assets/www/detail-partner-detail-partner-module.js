(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-partner-detail-partner-module"],{

/***/ "./src/app/detail-partner/detail-partner.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detail-partner/detail-partner.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailPartnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPartnerPageModule", function() { return DetailPartnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_partner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-partner.page */ "./src/app/detail-partner/detail-partner.page.ts");







var routes = [
    {
        path: '',
        component: _detail_partner_page__WEBPACK_IMPORTED_MODULE_6__["DetailPartnerPage"]
    }
];
var DetailPartnerPageModule = /** @class */ (function () {
    function DetailPartnerPageModule() {
    }
    DetailPartnerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_partner_page__WEBPACK_IMPORTED_MODULE_6__["DetailPartnerPage"]]
        })
    ], DetailPartnerPageModule);
    return DetailPartnerPageModule;
}());



/***/ }),

/***/ "./src/app/detail-partner/detail-partner.page.html":
/*!*********************************************************!*\
  !*** ./src/app/detail-partner/detail-partner.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Detalle del Partner\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ unico.name_partner}}\n      </ion-card-title>\n      <p>Dirección: {{ unico.adress_partner}}</p>\n      <p>Teléfono: {{ unico.phone_partner}}</p>\n      <p>Email: {{ unico.email_partner}}</p>\n      <p>Estatus: {{ unico.nameOf_status}}</p>\n      <p>Porcentaje de Cobro: {{ unico.feeRate_partner}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail-partner/detail-partner.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detail-partner/detail-partner.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1wYXJ0bmVyL2RldGFpbC1wYXJ0bmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detail-partner/detail-partner.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detail-partner/detail-partner.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailPartnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPartnerPage", function() { return DetailPartnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partner_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partner/partner.service */ "./src/app/partner/partner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailPartnerPage = /** @class */ (function () {
    function DetailPartnerPage(partnerS, route, router) {
        this.partnerS = partnerS;
        this.route = route;
        this.router = router;
        this.unico = [];
    }
    DetailPartnerPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        if (!id) {
            console.log('no exite un id');
            return;
        }
        this.partnerS.getPartnerById(id)
            .subscribe(function (param) {
            _this.unico = param,
                console.log(_this.unico);
        }, function (error1) { console.log('no se que es esto'); });
    };
    DetailPartnerPage.prototype.back = function () {
        this.router.navigate(['/partner']);
    };
    DetailPartnerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-partner',
            template: __webpack_require__(/*! ./detail-partner.page.html */ "./src/app/detail-partner/detail-partner.page.html"),
            styles: [__webpack_require__(/*! ./detail-partner.page.scss */ "./src/app/detail-partner/detail-partner.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_partner_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailPartnerPage);
    return DetailPartnerPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-partner-detail-partner-module.js.map
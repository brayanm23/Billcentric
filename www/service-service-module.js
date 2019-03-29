(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module"],{

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service.page */ "./src/app/service/service.page.ts");







var routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_6__["ServicePage"]
    }
];
var ServicePageModule = /** @class */ (function () {
    function ServicePageModule() {
    }
    ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_service_page__WEBPACK_IMPORTED_MODULE_6__["ServicePage"]]
        })
    ], ServicePageModule);
    return ServicePageModule;
}());



/***/ }),

/***/ "./src/app/service/service.page.html":
/*!*******************************************!*\
  !*** ./src/app/service/service.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Servicios\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor=\"let item of servicios\">\n      <ion-item>\n        {{item.name_service}}\n      </ion-item>\n\n      <ion-item-options>\n        <!--button danger (click)=\"removeItem(item)\"><icon trash></icon> Delete</button-->\n        <ion-item-option color=\"danger\"><ion-icon name=\"today\"></ion-icon>Detalle</ion-item-option>\n        <ion-item-option color=\"medium\"><ion-icon name=\"list\"></ion-icon>Planes</ion-item-option>\n\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/service/service.page.scss":
/*!*******************************************!*\
  !*** ./src/app/service/service.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/service/service.page.ts":
/*!*****************************************!*\
  !*** ./src/app/service/service.page.ts ***!
  \*****************************************/
/*! exports provided: ServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePage", function() { return ServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.service */ "./src/app/service/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicePage = /** @class */ (function () {
    function ServicePage(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ServicePage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        if (!id) {
            console.log('no exite un id');
            return;
        }
        this.service.getServiceByPartner(id)
            .subscribe(function (params) {
            _this.servicios = params,
                console.log(params);
        }, function (error) { console.log('error en la lista de servicios'); });
    };
    ServicePage.prototype.back = function () {
        this.router.navigate(['/partner']);
    };
    ServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.page.html */ "./src/app/service/service.page.html"),
            styles: [__webpack_require__(/*! ./service.page.scss */ "./src/app/service/service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicePage);
    return ServicePage;
}());



/***/ }),

/***/ "./src/app/service/services.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/services.service.ts ***!
  \*********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _partner_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partner/partner.service */ "./src/app/partner/partner.service.ts");





var ServicesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServicesService, _super);
    function ServicesService(http, partnerService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.partnerService = partnerService;
        return _this;
    }
    ServicesService_1 = ServicesService;
    ServicesService.prototype.getServiceByPartner = function (id, requestOptions) {
        if (requestOptions === void 0) { requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"](); }
        requestOptions.headers = _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].createAuthorizationHeader();
        return this.http.get(ServicesService_1.BASE_URL + '/partner/' + id, requestOptions)
            .map(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].extractData)
            .catch(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].handleError);
    };
    var ServicesService_1;
    ServicesService.BASE_URL = _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].HOST + '/service';
    ServicesService = ServicesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _partner_partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"]])
    ], ServicesService);
    return ServicesService;
}(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=service-service-module.js.map
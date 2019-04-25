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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/service/:id\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Servicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ servicio?.name_service }}\n      </ion-card-title>\n      <p>Nombre del Partner: {{ partner?.name_partner }}</p>\n      <p>Estatus: {{ servicio?.status_service }}</p>\n    </ion-card-content>\n  </ion-card>\n    <ion-card>\n        <div padding-top=\"10px\">\n            <div *ngIf=\"tableService.filter\" class=\"filter-panel-header fieldset-wrap\">\n                <div class=\"field-row\">\n\n                    <div class=\"field-row-item\" *ngIf=\"tableService.filter.since_date\">\n                        <span class=\"label\">Desde</span>\n                        <span>{{tableService.filter.since_date}}</span>\n                    </div>\n\n                    <div class=\"field-row-item\" *ngIf=\"tableService.filter.until_date\">\n                        <span class=\"label\">Hasta</span>\n                        <span>{{tableService.filter.until_date}}</span>\n                    </div>\n\n                </div>\n            </div>\n\n\n            <form>\n                <fieldset class=\"fieldset\">\n\n                    <div class=\"field-row\">\n                        <div>\n                            <div class=\"field-row-item\">\n                                <label class=\"label\" for=\"name_plan\">Desde</label>\n                                <input type=\"date\" name=\"since_date\" placeholder=\"None\"  [(ngModel)]=\"filter.since_date\">\n                            </div>\n\n                            <div class=\"field-row-item\">\n                                <label class=\"label\" for=\"name_plan\">Hasta</label>\n                                <input type=\"date\" name=\"until_date\" placeholder=\"None\"  [(ngModel)]=\"filter.until_date\">\n                            </div>\n                        </div>\n                    </div>\n\n                </fieldset>\n                <div class=\"options\">\n                    <button class=\"btn-text gray\" type=\"button\" (click)=\"reset()\">\n                        <span >Limpiar</span>\n                    </button>\n                    <button class=\"btn-text blue\" type=\"button\" (click)=\"reportes()\">\n                        <span>Reporte</span>\n                    </button>\n\n                </div>\n            </form>\n        </div>\n        <br>\n        <ion-card-content>\n            <canvas #barCanvas width=\"400\" height=\"400\"></canvas>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/services.service */ "./src/app/service/services.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reports/report.filter */ "./src/app/reports/report.filter.ts");
/* harmony import */ var _reports_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reports/report.service */ "./src/app/reports/report.service.ts");
/* harmony import */ var _providers_utils_pager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/utils/pager */ "./src/app/providers/utils/pager.ts");








var DetailServicePage = /** @class */ (function () {
    function DetailServicePage(route, router, services, tableService, reportService) {
        this.route = route;
        this.router = router;
        this.services = services;
        this.tableService = tableService;
        this.reportService = reportService;
        this.filter = new _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__["ReportFilter"](this.tableService.filter);
        this.filterDateDesde = null;
        this.filterDateHasta = null;
        var id = this.route.snapshot.params['id'];
    }
    DetailServicePage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.services.getById(id)
            .subscribe(function (servicio) {
            _this.servicio = servicio;
            if (_this.servicio.status_service === 1) {
                _this.servicio.status_service = 'Activo';
            }
            if (_this.servicio.status_service === 2) {
                _this.servicio.status_service = 'Inactivo';
            }
            _this.services.findPartner(servicio['partner'])
                .subscribe(function (partner) {
                _this.partner = partner;
            }, function (err) {
                console.log(err);
            });
        });
    };
    DetailServicePage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    DetailServicePage.prototype.reportes = function () {
        var data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    DetailServicePage.prototype.reset = function () {
        this.filter = new _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__["ReportFilter"]();
        this.reportes().destroy();
        // this.dataSource = new MatTableDataSource<any>([]);
        // this.list();
    };
    DetailServicePage.prototype.search = function () {
        this.tableService.pager.pageIndex = 0;
        //  this.tableService.filter = new ReportFilter(this.filter);
        // this.list();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailServicePage.prototype, "barCanvas", void 0);
    DetailServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-service',
            template: __webpack_require__(/*! ./detail-service.page.html */ "./src/app/detail-service/detail-service.page.html"),
            styles: [__webpack_require__(/*! ./detail-service.page.scss */ "./src/app/detail-service/detail-service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"],
            _providers_utils_pager__WEBPACK_IMPORTED_MODULE_7__["TableService"],
            _reports_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], DetailServicePage);
    return DetailServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-service-detail-service-module.js.map
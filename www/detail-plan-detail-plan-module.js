(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-plan-detail-plan-module"],{

/***/ "./src/app/detail-plan/detail-plan.module.ts":
/*!***************************************************!*\
  !*** ./src/app/detail-plan/detail-plan.module.ts ***!
  \***************************************************/
/*! exports provided: DetailPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPlanPageModule", function() { return DetailPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-plan.page */ "./src/app/detail-plan/detail-plan.page.ts");







var routes = [
    {
        path: '',
        component: _detail_plan_page__WEBPACK_IMPORTED_MODULE_6__["DetailPlanPage"]
    }
];
var DetailPlanPageModule = /** @class */ (function () {
    function DetailPlanPageModule() {
    }
    DetailPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_plan_page__WEBPACK_IMPORTED_MODULE_6__["DetailPlanPage"]]
        })
    ], DetailPlanPageModule);
    return DetailPlanPageModule;
}());



/***/ }),

/***/ "./src/app/detail-plan/detail-plan.page.html":
/*!***************************************************!*\
  !*** ./src/app/detail-plan/detail-plan.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/plan/:id\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle del Plan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ plan?.name_plan}}\n      </ion-card-title>\n      <br>\n      <p>Costo: {{ plan?.feeCost_plan }}</p>\n      <p>Costo de Inscripción del Plan: {{ plan?.enrollmentCost_plan }}</p>\n      <p>Costo por Congelamiento Plan: {{ plan?.freezeCostPlan }}</p>\n      <p>Impuesto: {{ plan?.taxRate_plan }}</p>\n      <p>Estatus: {{ plan?.status_plan }}</p>\n      <p>ID Plan Partner: {{ plan?.idPlan_partner }}</p>\n      <p>Compañia: {{ partner?.name_partner }}</p>\n      <p>Servicio: {{ service?.name_service }}</p>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <div padding-top=\"10px\">\n          <div *ngIf=\"tableService.filter\" class=\"filter-panel-header fieldset-wrap\">\n              <div class=\"field-row\">\n\n                  <div class=\"field-row-item\" *ngIf=\"tableService.filter.since_date\">\n                      <span class=\"label\">Desde</span>\n                      <span>{{tableService.filter.since_date}}</span>\n                  </div>\n\n                  <div class=\"field-row-item\" *ngIf=\"tableService.filter.until_date\">\n                      <span class=\"label\">Hasta</span>\n                      <span>{{tableService.filter.until_date}}</span>\n                  </div>\n\n              </div>\n          </div>\n\n\n          <form>\n              <fieldset class=\"fieldset\">\n\n                  <div class=\"field-row\">\n                      <div>\n                          <div class=\"field-row-item\">\n                              <label class=\"label\" for=\"name_plan\">Desde</label>\n                              <input type=\"date\" name=\"since_date\" placeholder=\"None\"  [(ngModel)]=\"filter.since_date\">\n                          </div>\n\n                          <div class=\"field-row-item\">\n                              <label class=\"label\" for=\"name_plan\">Hasta</label>\n                              <input type=\"date\" name=\"until_date\" placeholder=\"None\"  [(ngModel)]=\"filter.until_date\">\n                          </div>\n                      </div>\n                  </div>\n\n              </fieldset>\n              <div class=\"options\">\n                  <button class=\"btn-text gray\" type=\"button\" (click)=\"reset()\">\n                      <span >Limpiar</span>\n                  </button>\n                  <button class=\"btn-text blue\" type=\"button\" (click)=\"reportes()\">\n                      <span>Reporte</span>\n                  </button>\n\n                  <!--button class=\"btn-text blue\" type=\"button\" (click)=\"search()\">\n                      <span>Reporte</span>\n                  </button-->\n              </div>\n          </form>\n      </div>\n      <br>\n      <!--div class=\"field-row\">\n\n          <div class=\"field-row-item\">\n              <label class=\"label\" position=\"floating\" >Desde</label>\n              <input type=\"date\" name=\"since_date\" placeholder=\"None\"  [(ngModel)]=\"filter.since_date\">\n          </div>\n\n          <div class=\"field-row-item\">\n              <label class=\"label\" >Hasta</label>\n              <input type=\"date\" name=\"until_date\" placeholder=\"None\"  [(ngModel)]=\"filter.until_date\">\n          </div>\n\n      </div>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Inicio</ion-label>\n      <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Fin</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\"></ion-datetime>\n    </ion-item-->\n    <!--ion-button (click)=\"reportes()\" shape=\"round\" size=\"small\" color=\"danger\" expand=\"full\">Generar Reporte</ion-button-->\n    <ion-card-content>\n      <canvas #barCanvas width=\"400\" height=\"400\"></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail-plan/detail-plan.page.scss":
/*!***************************************************!*\
  !*** ./src/app/detail-plan/detail-plan.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1wbGFuL2RldGFpbC1wbGFuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detail-plan/detail-plan.page.ts":
/*!*************************************************!*\
  !*** ./src/app/detail-plan/detail-plan.page.ts ***!
  \*************************************************/
/*! exports provided: DetailPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPlanPage", function() { return DetailPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/services.service */ "./src/app/service/services.service.ts");
/* harmony import */ var _plan_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plan/plan.service */ "./src/app/plan/plan.service.ts");
/* harmony import */ var _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reports/report.filter */ "./src/app/reports/report.filter.ts");
/* harmony import */ var _reports_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reports/report.service */ "./src/app/reports/report.service.ts");
/* harmony import */ var _providers_utils_pager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/utils/pager */ "./src/app/providers/utils/pager.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_8__);









var DetailPlanPage = /** @class */ (function () {
    function DetailPlanPage(route, router, services, planService, tableService, reportService) {
        this.route = route;
        this.router = router;
        this.services = services;
        this.planService = planService;
        this.tableService = tableService;
        this.reportService = reportService;
        this.filter = new _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__["ReportFilter"](this.tableService.filter);
        this.filterDateDesde = null;
        this.filterDateHasta = null;
    }
    DetailPlanPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        // buscamos el plan por su ID
        this.planService.getById(id)
            .subscribe(function (plan) {
            _this.plan = plan;
            if (_this.plan.status_plan === 1) {
                _this.plan.status_plan = 'Activo';
            }
            if (_this.plan.status_plan === 2) {
                _this.plan.status_plan = 'Inactivo';
            }
            // buscamos el servicio al que esta asociado el plan
            _this.planService.findService(_this.plan.service_id).subscribe(function (service) {
                _this.service = service;
                // buscamos el partner al que esta asociado tanto el plan como el servicio
                _this.planService.findPartner(service['partner']).subscribe(function (partner) {
                    _this.partner = partner;
                    // buscamos la frecuencia
                    // this.planService.findFrecuency(this.plan.frecuency_id).subscribe(frecuency=>{
                    //   this.frecuency = frecuency;
                    //  });
                }, function (err) {
                    console.log(err + 'esto es en plan mensaje 1');
                });
            }, function (err) {
                console.log(err + 'esto es en plan mensaje 2');
            });
        });
    };
    DetailPlanPage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    DetailPlanPage.prototype.reportes = function () {
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
    DetailPlanPage.prototype.reset = function () {
        this.filter = new _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__["ReportFilter"]();
        this.reportes().destroy();
        // this.dataSource = new MatTableDataSource<any>([]);
        // this.list();
    };
    DetailPlanPage.prototype.search = function () {
        this.tableService.pager.pageIndex = 0;
        //  this.tableService.filter = new ReportFilter(this.filter);
        // this.list();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailPlanPage.prototype, "barCanvas", void 0);
    DetailPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-plan',
            template: __webpack_require__(/*! ./detail-plan.page.html */ "./src/app/detail-plan/detail-plan.page.html"),
            styles: [__webpack_require__(/*! ./detail-plan.page.scss */ "./src/app/detail-plan/detail-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"],
            _plan_plan_service__WEBPACK_IMPORTED_MODULE_4__["PlanService"],
            _providers_utils_pager__WEBPACK_IMPORTED_MODULE_7__["TableService"],
            _reports_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], DetailPlanPage);
    return DetailPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-plan-detail-plan-module.js.map
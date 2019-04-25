(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/reports/report.filter.ts":
/*!******************************************!*\
  !*** ./src/app/reports/report.filter.ts ***!
  \******************************************/
/*! exports provided: ReportFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFilter", function() { return ReportFilter; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var ReportFilter = /** @class */ (function () {
    function ReportFilter(filter) {
        if (filter) {
            this.id = filter.id;
            this.id_partner = filter.id_partner;
            this.id_service = filter.id_service;
            this.id_plan = filter.id_plan;
            this.since_date = filter.since_date;
            this.until_date = filter.until_date;
            this.del = filter.del;
        }
    }
    ReportFilter.prototype.getHttpParams = function (httpParams) {
        if (httpParams === void 0) { httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](); }
        if (this.id_partner) {
            httpParams = httpParams.set('id_partner', this.id_partner.toString());
        }
        if (this.id_service) {
            httpParams = httpParams.set('id_service', this.id_service.toString());
        }
        if (this.id) {
            httpParams = httpParams.set('id', this.id.toString());
        }
        if (this.del) {
            httpParams = httpParams.set('del', this.del.toString());
        }
        if (this.id_plan) {
            httpParams = httpParams.set('id_plan', this.id_plan.toString());
        }
        if (this.until_date) {
            httpParams = httpParams.set('until_date', this.until_date);
        }
        if (this.since_date) {
            httpParams = httpParams.set('since_date', this.since_date);
        }
        return httpParams;
    };
    return ReportFilter;
}());



/***/ }),

/***/ "./src/app/reports/report.service.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/report.service.ts ***!
  \*******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ReportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReportService, _super);
    function ReportService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.BASE_URL = _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].HOST + '/invoice';
        _this.BASE_URL2 = _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"].HOST + '/payment';
        return _this;
    }
    ReportService_1 = ReportService;
    ReportService.prototype.getReportInvoices = function (requestOptions) {
        if (requestOptions === void 0) { requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"](); }
        requestOptions.headers = ReportService_1.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/report', requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(ReportService_1.extractDataFull), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(ReportService_1.handleError));
    };
    ReportService.prototype.getPaymentsByInvoice = function (requestOptions, id_invoice) {
        if (requestOptions === void 0) { requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"](); }
        requestOptions.headers = ReportService_1.createAuthorizationHeader();
        return this.http.get(this.BASE_URL2 + '/list/' + id_invoice.toString(), requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(ReportService_1.extractDataFull), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(ReportService_1.handleError));
    };
    ReportService.prototype.getReportInvoicesCharged = function (requestOptions) {
        if (requestOptions === void 0) { requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"](); }
        requestOptions.headers = ReportService_1.createAuthorizationHeader();
        return this.http.get(this.BASE_URL + '/report/charged', requestOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(ReportService_1.extractDataFull), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(ReportService_1.handleError));
    };
    var ReportService_1;
    ReportService = ReportService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ReportService);
    return ReportService;
}(_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.page */ "./src/app/reports/reports.page.ts");








var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_7__["ReportsPage"]
    }
];
var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_7__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.page.html":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Facturas Cobradas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--mat-accordion>\n        <mat-expansion-panel [expanded]=\"isOpenSearchPanel\" (opened)=\"openSearchPanel(true)\" [hideToggle]=\"true\"-->\n            <!--mat-expansion-panel-header-->\n    <div>\n                <div *ngIf=\"tableService.filter\" class=\"filter-panel-header fieldset-wrap\">\n                    <div class=\"field-row\">\n\n                        <div class=\"field-row-item\" *ngIf=\"tableService.filter.del\">\n                            <span class=\"label\">Del</span>\n                            <span *ngIf=\"tableService.filter.del == 1\"> Dia </span>\n                            <span *ngIf=\"tableService.filter.del == 2\"> Dia Anterior </span>\n                            <span *ngIf=\"tableService.filter.del == 3\"> Mes </span>\n                            <span *ngIf=\"tableService.filter.del == 4\"> Mes Anterior </span>\n                        </div>\n\n                        <div class=\"field-row-item\" *ngIf=\"tableService.filter.since_date\">\n                            <span class=\"label\">Desde</span>\n                            <span>{{tableService.filter.since_date}}</span>\n                        </div>\n\n                        <div class=\"field-row-item\" *ngIf=\"tableService.filter.until_date\">\n                            <span class=\"label\">Hasta</span>\n                            <span>{{tableService.filter.until_date}}</span>\n                        </div>\n\n                    </div>\n                </div>\n                <!--/button title=\"Buscar\" type=\"button\">\n                    <ion-icon name=\"search\"></ion-icon>\n                </button>\n            <mat-expansion-panel-header-->\n\n            <form>\n                <fieldset class=\"fieldset\">\n\n                    <div class=\"field-row\">\n                        <div class=\"field-row-item\">\n                            <label class=\"label\" for=\"name_plan\">Del</label>\n                            <input type=\"radio\" value=\"1\" (change)=\"dropBusqueda()\" name=\"type\">\n                        </div>\n                        <div class=\"field-row-item\">\n                            <label class=\"label\" for=\"name_plan\">Rango fecha</label>\n                            <input type=\"radio\" value=\"2\" (change)=\"rangoBusqueda()\" name=\"type\">\n                        </div>\n                    </div>\n\n                    <div class=\"field-row\" *ngIf=\"del\">\n                        <div class=\"field-row-item\">\n                            <mat-select placeholder=\"Selecciona\" [(value)]=\"filter.del\" [compareWith]=\"compareFn\">\n                                <mat-option *ngFor=\"let opt of types\" [value]=\"opt.value\">{{opt.desc}}</mat-option>\n                            </mat-select>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"rango\">\n\n                        <div class=\"field-row-item\">\n                            <label class=\"label\" for=\"name_plan\">Desde</label>\n                            <input type=\"date\" name=\"since_date\" placeholder=\"None\"  [(ngModel)]=\"filter.since_date\">\n                        </div>\n\n                        <div class=\"field-row-item\">\n                            <label class=\"label\" for=\"name_plan\">Hasta</label>\n                            <input type=\"date\" name=\"until_date\" placeholder=\"None\"  [(ngModel)]=\"filter.until_date\">\n                        </div>\n\n                    </div>\n\n                </fieldset>\n                <div class=\"options\">\n                    <button class=\"btn-text gray\" type=\"button\" (click)=\"reset()\">\n                        <span >Limpiar</span>\n                    </button>\n                    <button class=\"btn-text blue\" type=\"button\" (click)=\"search()\">\n                        <span>Buscar</span>\n                    </button>\n                </div>\n            </form>\n    </div>\n        <!--/mat-expansion-panel>\n    </mat-accordion-->\n\n\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/reports/reports.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-text.gray {\n  background-color: #acacac;\n  border-color: #acacac;\n  color: #fff; }\n\n.btn-text.red {\n  background-color: #fb5f5f;\n  border-color: #fb5f5f;\n  color: #fff; }\n\noption {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYXlhbi9Fc2NyaXRvcmlvL0JpbGxjZW50cmljL3NyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUViO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRleHQuZ3JheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYWNhYztcbiAgYm9yZGVyLWNvbG9yOiAjYWNhY2FjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tdGV4dC5yZWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjVmNWY7XG4gIGJvcmRlci1jb2xvcjogI2ZiNWY1ZjtcbiAgY29sb3I6ICNmZmY7XG59XG5vcHRpb257XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reports/reports.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_utils_pager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/utils/pager */ "./src/app/providers/utils/pager.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _report_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report.filter */ "./src/app/reports/report.filter.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report.service */ "./src/app/reports/report.service.ts");






var ReportsPage = /** @class */ (function () {
    function ReportsPage(tableService, reportService) {
        this.tableService = tableService;
        this.reportService = reportService;
        this.isOpenSearchPanel = false;
        this.filter = new _report_filter__WEBPACK_IMPORTED_MODULE_4__["ReportFilter"](this.tableService.filter);
        this.confirmDelete = true;
        this.items = [];
        this.rango = false;
        this.del = false;
        this.types = [];
    }
    ReportsPage.prototype.ngOnInit = function () {
        this.types = [{ desc: 'Dia', value: 1 }, { desc: 'Dia anterior', value: 2 }, { desc: 'Mes', value: 3 }, { desc: 'Mes Anterior', value: 4 }];
    };
    ReportsPage.prototype.list = function (event) {
        var _this = this;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        httpParams = this.filter.getHttpParams(httpParams);
        if (httpParams['updates'] != null) {
            if (this.filter.since_date != null && this.filter.until_date == null) {
                console.log('Debe ingresar el parametro de fecha : Hasta');
                return;
            }
            if (this.filter.since_date == null && this.filter.until_date != null) {
                console.log('Debe ingresar el parametro de fecha : Desde');
                return;
            }
            this.reportService.getReportInvoicesCharged(this.reportService.buildRequestOptionsFinder(this.tableService.sort, 'm', httpParams['updates'], { pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
                pageSize: event ? event.pageSize : this.tableService.pager.pageSize }))
                .subscribe(function (params) {
                console.log(params['result']);
                _this.items = params['result']; // items que mostrara la tabla
                // this.dataSource = new MatTableDataSource<any>(this.items);
                // this.tableService.pager = params['pager'];
                // this.tableService.selection.clear();
                if (_this.items.length === 0) {
                    console.log('No se encontraron resultados');
                    // this.notificationService.alert('No se encontraron resultados para la busqueda');
                }
            }, function (err) {
                // this.notificationService.error(err);
                console.log(err);
            });
        }
    };
    ReportsPage.prototype.reset = function () {
        this.filter = new _report_filter__WEBPACK_IMPORTED_MODULE_4__["ReportFilter"]();
        this.list();
    };
    ReportsPage.prototype.search = function () {
        this.isOpenSearchPanel = false;
        this.tableService.pager.pageIndex = 0;
        // this.tableService.filter = new ReportFilter(this.filter);
        this.list();
    };
    ReportsPage.prototype.openSearchPanel = function (value) {
        this.isOpenSearchPanel = value;
        this.filter = new _report_filter__WEBPACK_IMPORTED_MODULE_4__["ReportFilter"](this.tableService.filter);
    };
    ReportsPage.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    ReportsPage.prototype.rangoBusqueda = function () {
        delete this.filter.del;
        this.rango = true;
        this.del = false;
    };
    ReportsPage.prototype.dropBusqueda = function () {
        delete this.filter.since_date;
        delete this.filter.until_date;
        this.del = true;
        this.rango = false;
    };
    ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.page.html */ "./src/app/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/reports/reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_utils_pager__WEBPACK_IMPORTED_MODULE_2__["TableService"],
            _report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map
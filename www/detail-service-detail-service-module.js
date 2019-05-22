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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/service/:id\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle Servicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ servicio?.name_service }}\n      </ion-card-title>\n      <p>Nombre del Partner: {{ partner?.name_partner }}</p>\n      <p>Estatus: {{ servicio?.status_service }}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <div padding-top=\"10px\">\n      <!-- <div *ngIf=\"tableService.filter\" class=\"filter-panel-header fieldset-wrap\">\n                <div class=\"field-row\">\n\n                    <div class=\"field-row-item\" *ngIf=\"tableService.filter.since_date\">\n                        <span class=\"label\">Desde</span>\n                        <span>{{tableService.filter.since_date}}</span>\n                    </div>\n            \n                    <div class=\"field-row-item\" *ngIf=\"tableService.filter.until_date\">\n                        <span class=\"label\">Hasta</span>\n                        <span>{{tableService.filter.until_date}}</span>\n                    </div>\n\n                </div>\n            </div> -->\n\n      <form>\n        <fieldset class=\"fieldset\">\n          <div class=\"field-row\">\n            <div>\n              <div class=\"field-row-item\">\n                <label class=\"label\" for=\"name_plan\">Desde</label>\n                <input\n                  type=\"date\"\n                  name=\"since_date\"\n                  placeholder=\"None\"\n                  [(ngModel)]=\"filter.since_date\"\n                />\n              </div>\n\n              <div class=\"field-row-item\">\n                <label class=\"label\" for=\"name_plan\">Hasta</label>\n                <input\n                  type=\"date\"\n                  name=\"until_date\"\n                  placeholder=\"None\"\n                  [(ngModel)]=\"filter.until_date\"\n                />\n              </div>\n            </div>\n          </div>\n        </fieldset>\n        <ion-row>\n          <ion-col width-50 style=\"text-align: right; padding-left: 35px;\">\n            <button class=\"btn-text gray\" type=\"button\" (click)=\"reset()\">\n              <span>Limpiar</span>\n            </button>\n          </ion-col>\n\n          <ion-col width-50 style=\"text-align: left\">\n            <button class=\"btn-text blue\" type=\"button\" (click)=\"reportes()\">\n              <span>Reporte</span>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"options\"></div>\n        <hr />\n      </form>\n    </div>\n    <br />\n    <ion-card-content> </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"activeScroll\">\n    <canvas #barCanvas width=\"350\" height=\"400\"></canvas>\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-label text-wrap>\n        <ion-text>\n          <p><b>Id:</b> {{ item.id }}</p>\n          <p><b>Cliente:</b> {{ item.name_customer }}</p>\n          <p><b>Plan:</b> {{ item.name_plan }}</p>\n          <p><b>Estatus:</b> {{ item.desc_status }}</p>\n          <p><b>Monto:</b> {{ item.total_invoice }}</p>\n          <p><b>Fecha:</b> {{ item.date_created_invoice }}</p>\n\n          <br />\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll\n    *ngIf=\"activeScroll\"\n    threshold=\"100px\"\n    (ionInfinite)=\"loadData($event)\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Cargando...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_utils_alertas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/utils/alertas */ "./src/app/providers/utils/alertas.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");













var DetailServicePage = /** @class */ (function () {
    function DetailServicePage(route, router, services, tableService, reportService, alertas, datePipe, toastController) {
        this.route = route;
        this.router = router;
        this.services = services;
        this.tableService = tableService;
        this.reportService = reportService;
        this.alertas = alertas;
        this.datePipe = datePipe;
        this.toastController = toastController;
        this.filter = new _reports_report_filter__WEBPACK_IMPORTED_MODULE_5__["ReportFilter"](this.tableService.filter);
        this.filterDateDesde = null;
        this.filterDateHasta = null;
        this.index = 1;
        this.items = [];
        this.items1 = []; //items para grafica
        this.activeScroll = false;
        var id = this.route.snapshot.params['id'];
    }
    DetailServicePage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.alertas.showLoader();
        this.services.getById(id)
            .subscribe(function (servicio) {
            _this.servicio = servicio;
            _this.filter.id_service = _this.servicio.id; //la variable filter sirve para colocar por parametros las propiedadesa filtrar
            _this.filter.id_partner = _this.servicio.partner;
            console.log(_this.servicio);
            if (_this.servicio.status_service === 1) {
                _this.servicio.status_service = 'Activo';
            }
            if (_this.servicio.status_service === 2) {
                _this.servicio.status_service = 'Inactivo';
            }
            _this.services.findPartner(servicio['partner'])
                .subscribe(function (partner) {
                _this.partner = partner;
                console.log(partner);
                _this.alertas.dismiss();
            }, function (err) {
                _this.alertas.dismiss();
                console.log(err);
            });
        }, function (err1) {
            _this.alertas.dismiss();
            console.log(err1);
        });
    };
    DetailServicePage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    DetailServicePage.prototype.presentToast = function (text, color) {
        if (color === void 0) { color = 'primary'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 2000,
                            color: color,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailServicePage.prototype.list = function (event) {
        var _this = this;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
        httpParams = this.filter.getHttpParams(httpParams);
        if (httpParams['updates'] != null) {
            console.log("updates http params");
            if ((this.filter.since_date != null && this.filter.since_date != "") && (this.filter.until_date == null || this.filter.until_date == "")) {
                this.presentToast("Debe ingresar el parametro de fecha : Hasta", "primary");
                return;
            }
            if ((this.filter.since_date == null || this.filter.since_date == "") && (this.filter.until_date != null && this.filter.until_date != "")) {
                this.presentToast("Debe ingresar el parametro de fecha : Desde", "primary");
                return;
            }
            if (this.filter.since_date > this.filter.until_date) {
                this.presentToast("Fecha final debe ser mayor a la fecha inicial", "warning");
                return;
            }
            this.alertas.showLoader();
            this.reportService.getReportInvoices(this.reportService.buildRequestOptionsFinder(this.tableService.sort, 'm', httpParams['updates'], {
                pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
                pageSize: event ? event.pageSize : this.tableService.pager.pageSize
            }))
                .subscribe(function (params) {
                console.log(params['result']);
                _this.items = params['result']; // items que mostrara la tabla
                _this.estatus_invoices();
                if (_this.items.length === 0) {
                    _this.alertas.dismiss();
                    _this.activeScroll = false;
                    _this.presentToast('No se encontraron resultados', 'warning');
                }
                else { // si existen items se genera la grafica
                    _this.activeScroll = true;
                    //Peticion de data para reporte grafico===========
                    _this.reportService.getReportInvoicesGrap(_this.reportService.buildRequestOptionsFinder(_this.tableService.sort, 'm', httpParams['updates'], {
                        pageIndex: event ? event.pageIndex : _this.tableService.pager.pageIndex,
                        pageSize: event ? event.pageSize : _this.tableService.pager.pageSize
                    }))
                        .subscribe(function (params) {
                        console.log(params['result']);
                        _this.items1 = params['result'];
                        _this.statusData();
                        var data = [];
                        var labels = [];
                        for (var _i = 0, _a = _this.items1; _i < _a.length; _i++) {
                            var item = _a[_i];
                            data.push(item.porcentaje);
                            labels.push(item.estatus);
                        }
                        console.log(data);
                        console.log(labels);
                        _this.generateGrap(labels, data);
                        _this.alertas.dismiss();
                    }, function (err) {
                        _this.alertas.dismiss();
                        console.log(err);
                    });
                    //====================================================
                }
            }, function (err) {
                _this.alertas.dismiss();
                // this.notificationService.error(err);
                console.log(err);
            });
        }
    };
    DetailServicePage.prototype.reportes = function () {
        this.tableService.pager.pageIndex = 0;
        console.log("reportes");
        this.list();
    };
    DetailServicePage.prototype.generateGrap = function (labels, data1) {
        var data = {
            labels: labels,
            datasets: [{
                    label: '% de Facturas',
                    data: data1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255,99,132,1)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 0.2)'
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
    DetailServicePage.prototype.loadData = function (event1, event) {
        var _this = this;
        this.tableService.pager.pageIndex = this.index;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
        httpParams = this.filter.getHttpParams(httpParams);
        if (httpParams['updates'] != null) {
            console.log("updates http params 1");
            this.reportService.getReportInvoices(this.reportService.buildRequestOptionsFinder(this.tableService.sort, 'm', httpParams['updates'], {
                pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
                pageSize: event ? event.pageSize : this.tableService.pager.pageSize
            }))
                .subscribe(function (params) {
                console.log(params['result']);
                var newItems = params['result']; // items que mostrara la tabla
                for (var _i = 0, newItems_1 = newItems; _i < newItems_1.length; _i++) {
                    var item = newItems_1[_i];
                    _this.items.push(item);
                }
                _this.estatus_invoices();
                event1.target.complete();
                if (_this.items.length === 0) {
                    _this.activeScroll = false;
                    _this.presentToast("No se encontraron mas resultados", "warning");
                    ;
                }
                else
                    _this.activeScroll = true;
                if (_this.items.length == 1000) {
                    event1.target.disabled = true;
                }
            }, function (err) {
                // this.notificationService.error(err);
                console.log(err);
            });
        }
        this.index = this.index + 1;
    };
    DetailServicePage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    DetailServicePage.prototype.reset = function () {
        //this.filter = new ReportFilter(this.tableService.filter);
        this.items = [];
        this.index = 1;
        this.activeScroll = false;
        // this.dataSource = new MatTableDataSource<any>([]);
        // this.list();
    };
    DetailServicePage.prototype.search = function () {
        this.tableService.pager.pageIndex = 0;
        //  this.tableService.filter = new ReportFilter(this.filter);
        // this.list();
    };
    DetailServicePage.prototype.estatus_invoices = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var invoice = _a[_i];
            invoice.date_created_invoice = this.datePipe.transform(invoice.date_created_invoice, "MMMM dd, yyyy");
            invoice.last_updated_invoice = this.datePipe.transform(invoice.last_updated_invoice, "MMMM dd, yyyy");
            /*if (invoice.status_invoice === 0) {
              invoice.status_invoice = "Por procesar(En cola)";
            }*/
            if (invoice.status_invoice === 1) {
                invoice.desc_status = invoice.desc_status + " - " + invoice.description_errorcodebac;
            }
            /*if (invoice.status_invoice === 2) {
              invoice.status_invoice = "No procesadas por Hecticus";
            }
            if (invoice.status_invoice === 3) {
              invoice.status_invoice = "En proceso";
            }
            if (invoice.status_invoice === 4) {
              invoice.status_invoice = "Cancelada";
            }
            if (invoice.status_invoice === 5) {
              invoice.status_invoice = "Rebilling";
            }
            if (invoice.status_invoice === -6) {
              invoice.status_invoice = "Incobrables";
            }*/
        }
    };
    DetailServicePage.prototype.statusData = function () {
        for (var _i = 0, _a = this.items1; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.estatus === 0) {
                item.estatus = 'Por procesar(En cola)';
            }
            if (item.estatus === 1) {
                item.estatus = 'Procesadas';
            }
            if (item.estatus === 2) {
                item.estatus = 'No procesadas por Hecticus';
            }
            if (item.estatus === 3) {
                item.estatus = 'En proceso';
            }
            if (item.estatus === 4) {
                item.estatus = 'Cancelada';
            }
            if (item.estatus === 5) {
                item.estatus = 'Rebilling';
            }
            if (item.estatus === -6) {
                item.estatus = 'Incobrables';
            }
        }
    };
    DetailServicePage.prototype.read = function (item) {
        // hacemos esto para no tener que consultar de nuevo la informacion del invoice en la siguiente pantalla
        localStorage.setItem('invoice', JSON.stringify(item));
        //this.router.navigate(['./' + item.id], {relativeTo: this.activatedRoute});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInfiniteScroll"])
    ], DetailServicePage.prototype, "infiniteScroll", void 0);
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
            _reports_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _providers_utils_alertas__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"]])
    ], DetailServicePage);
    return DetailServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-service-detail-service-module.js.map
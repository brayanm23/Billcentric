import { Partner } from './../models/partner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../models/service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesService} from '../service/services.service';
import { Chart } from 'chart.js';
import { PlanService } from '../plan/plan.service';
import { ReportFilter } from '../reports/report.filter';
import { ReportService } from '../reports/report.service';
import { Pager } from '../providers/utils/pager';
import { TableService } from '../providers/utils/pager';
import { HttpParams } from '@angular/common/http';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { AlertService } from '../providers/utils/alertas';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.page.html',
  styleUrls: ['./detail-service.page.scss'],
})
export class DetailServicePage implements OnInit {

    @ViewChild('barCanvas') barCanvas;
    barChart: any;
    partner: any;
    service: any;
    frecuency: any;
    private plan: any;
    filter = new ReportFilter(this.tableService.filter);
    filterDateDesde = null;
    filterDateHasta = null;
    private servicio: any;
    id: number;
    items: any[] = [];
    constructor(private route: ActivatedRoute,
                private router: Router,
                public services: ServicesService,
                private tableService: TableService<any>,
                private reportService: ReportService,
                public alertas: AlertService) {
        const id = this.route.snapshot.params['id'];
    }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.alertas.showLoader();
      this.services.getById(id)
          .subscribe(
              servicio => {
                  this.servicio = servicio;
                  this.filter.id_service=this.servicio.id; //la variable filter sirve para colocar por parametros las propiedadesa filtrar
                  this.filter.id_partner=this.servicio.partner;
                  
                  console.log(this.servicio);
                  if (this.servicio.status_service === 1) {
                      this.servicio.status_service = 'Activo'; }
                  if (this.servicio.status_service === 2) {
                      this.servicio.status_service = 'Inactivo'; }
                  this.services.findPartner(servicio['partner'])
                      .subscribe(partner => {
                          this.partner = partner;
                          console.log(partner)
                          this.alertas.dismiss()
                      }, (err) => {
                          this.alertas.dismiss()
                          console.log(err);
                      });
              });
  }

    getChart(context, chartType, data, options?) {
        return new Chart (context, {
            data,
            options,
            type: chartType,
        });
    }

 list(event?: PageEvent) {
        let httpParams = new HttpParams()
        httpParams = this.filter.getHttpParams(httpParams);
        if ( httpParams['updates'] != null) {
            console.log("updates http params");
            if (this.filter.since_date != null && this.filter.until_date == null){
                console.log('Debe ingresar el parametro de fecha : Hasta');
                return;
            }
            if (this.filter.since_date == null && this.filter.until_date != null){
                console.log('Debe ingresar el parametro de fecha : Desde');
                return;
            }
            this.reportService.getReportInvoices(this.reportService.buildRequestOptionsFinder(
                this.tableService.sort,
                'm',
                httpParams['updates'],
                {pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
                    pageSize: event ? event.pageSize : this.tableService.pager.pageSize}))
                .subscribe(params => {
                console.log(params['result']);
                this.items = params['result']; // items que mostrara la tabla
                // this.dataSource = new MatTableDataSource<any>(this.items);
                // this.tableService.pager = params['pager'];
                // this.tableService.selection.clear();
                if (this.items.length === 0) {
                  console.log('No se encontraron resultados');
                  // this.notificationService.alert('No se encontraron resultados para la busqueda');
                }
            }, err => {
                // this.notificationService.error(err);
                console.log(err);
            });
        }
    }


    reportes() {
        this.tableService.pager.pageIndex = 0;
        console.log("reportes");
        this.list();
        const data = {
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

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);

    }

    reset() {
        this.filter = new ReportFilter();
        this.reportes().destroy();
        // this.dataSource = new MatTableDataSource<any>([]);
        // this.list();
    }

    search() {
        this.tableService.pager.pageIndex = 0;
        //  this.tableService.filter = new ReportFilter(this.filter);
        // this.list();
    }

}

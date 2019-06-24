import {Storage} from '@ionic/storage';
import { Partner } from './../models/partner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../models/service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { Chart } from 'chart.js';
import { PlanService } from '../plan/plan.service';
import { ReportFilter } from '../reports/report.filter';
import { ReportService } from '../reports/report.service';
import { Pager } from '../providers/utils/pager';
import { TableService } from '../providers/utils/pager';
import { HttpParams } from '@angular/common/http';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { AlertService } from '../providers/utils/alertas';
import { DatePipe } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('barCanvas') barCanvas;
    barChart: any;
    items1: any[] = [];
    constructor(
        private router: Router,
        private reportService: ReportService,
        public storage: Storage 
    ) {
      this.reportes();
     }
    logout() {
        this.router.navigate(['/login']);
        // this.nav.setRoot(LoginPage); // Close this application
        localStorage.removeItem('currentData');
        localStorage.clear();
        sessionStorage.clear();
        this.storage.clear();
    }

    generateGrap(labels, data1){
        const data = {
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

    getChart(context, chartType, data, options?) {
        return new Chart(context, {
          data,
          options,
          type: chartType,
        });
    }

    reportes() {
        //this.tableService.pager.pageIndex = 0;
        console.log("reportes");
        this.list();
        
    
      }

    list(event?: PageEvent) {
        this.reportService.getReportHome()
          .subscribe(params => {

            console.log(params['result']);
            this.items1=params['result'];
            //this.statusData();
            let data=[];
            let labels=[];
            for(let item of this.items1){
                  data.push(item.porcentaje);
                  labels.push(item.description);
                 
            }
           
            console.log(data);
            console.log(labels);
           
            this.generateGrap(labels, data)
            //this.alertas.dismiss();
          }, err => {
            //this.alertas.dismiss();
            console.log(err);
          });
      }

        /*statusData(){
            for (const item of this.items1) {
            
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
          }*/
      
        
}

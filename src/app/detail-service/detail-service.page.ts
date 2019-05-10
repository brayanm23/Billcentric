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
  selector: 'app-detail-service',
  templateUrl: './detail-service.page.html',
  styleUrls: ['./detail-service.page.scss'],
})
export class DetailServicePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
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
  index: number = 1;
  items: any[] = [];
  items1: any[] = [];//items para grafica
  activeScroll: boolean = false;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    public services: ServicesService,
    private tableService: TableService<any>,
    private reportService: ReportService,
    public alertas: AlertService,
    public datePipe: DatePipe,
    public toastController: ToastController
  ) {
    const id = this.route.snapshot.params['id'];

  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.alertas.showLoader();
    this.services.getById(id)
      .subscribe(
        servicio => {
          this.servicio = servicio;
          this.filter.id_service = this.servicio.id; //la variable filter sirve para colocar por parametros las propiedadesa filtrar
          this.filter.id_partner = this.servicio.partner;

          console.log(this.servicio);
          if (this.servicio.status_service === 1) {
            this.servicio.status_service = 'Activo';
          }
          if (this.servicio.status_service === 2) {
            this.servicio.status_service = 'Inactivo';
          }
          this.services.findPartner(servicio['partner'])
            .subscribe(partner => {
              this.partner = partner;
              console.log(partner)
              this.alertas.dismiss()
            }, (err) => {
              this.alertas.dismiss()
              console.log(err);
            });
        }, (err1) => {
          this.alertas.dismiss()
          console.log(err1);
        });
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType,
    });
  }

  async presentToast(text: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: color,

    });
    toast.present();
  }

  list(event?: PageEvent) {
    let httpParams = new HttpParams()
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
      if (this.filter.since_date>this.filter.until_date) {
        this.presentToast("Fecha final debe ser mayor a la fecha inicial", "warning");
        return;
      }
      this.alertas.showLoader();
      this.reportService.getReportInvoices(this.reportService.buildRequestOptionsFinder(
        this.tableService.sort,
        'm',
        httpParams['updates'],
        {
          pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
          pageSize: event ? event.pageSize : this.tableService.pager.pageSize
        }))
        .subscribe(params => {
          console.log(params['result']);
          this.items = params['result']; // items que mostrara la tabla
          this.estatus_invoices();
          if (this.items.length === 0) { 
            this.alertas.dismiss();
            this.activeScroll = false;
            this.presentToast('No se encontraron resultados', 'warning');
          }else{ // si existen items se genera la grafica
           
           this.activeScroll = true;

          //Peticion de data para reporte grafico===========
          
          this.reportService.getReportInvoicesGrap(this.reportService.buildRequestOptionsFinder(
            this.tableService.sort,
            'm',
            httpParams['updates'],
            {
              pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
              pageSize: event ? event.pageSize : this.tableService.pager.pageSize
            }))
            .subscribe(params => {

              console.log(params['result']);
              this.items1=params['result'];
              this.statusData();
              let data=[];
              let labels=[];
              for(let item of this.items1){
                    data.push(item.porcentaje);
                    labels.push(item.estatus);
                   
              }
             
              console.log(data);
              console.log(labels);
             
              this.generateGrap(labels, data)
              this.alertas.dismiss();
            }, err => {
              this.alertas.dismiss();
              console.log(err);
            });
          //====================================================

        }
         
          
         
          
        }, err => {
          this.alertas.dismiss();
          // this.notificationService.error(err);
          console.log(err);
        });
    }
  }


  reportes() {
    this.tableService.pager.pageIndex = 0;
    console.log("reportes");
    this.list();
    

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





  loadData(event1, event?: PageEvent) {
    this.tableService.pager.pageIndex = this.index;

    let httpParams = new HttpParams()
    httpParams = this.filter.getHttpParams(httpParams);
    if (httpParams['updates'] != null) {
      console.log("updates http params 1");
      this.reportService.getReportInvoices(this.reportService.buildRequestOptionsFinder(
        this.tableService.sort,
        'm',
        httpParams['updates'],
        {
          pageIndex: event ? event.pageIndex : this.tableService.pager.pageIndex,
          pageSize: event ? event.pageSize : this.tableService.pager.pageSize
        }))
        .subscribe(params => {
          console.log(params['result']);

          let newItems = params['result']; // items que mostrara la tabla
          for (const item of newItems) {
            this.items.push(item);
          }

          this.estatus_invoices();
          event1.target.complete();
          if (this.items.length === 0) {
            this.activeScroll = false;
            this.presentToast("No se encontraron mas resultados", "warning");;
          }else this.activeScroll = true;

          if (this.items.length == 1000) {
            event1.target.disabled = true;
          }
        }, err => {

          // this.notificationService.error(err);
          console.log(err);
        });
    }
    this.index = this.index + 1;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }



  reset() {
    //this.filter = new ReportFilter(this.tableService.filter);
    this.items = [];
    this.index = 1;
    this.activeScroll=false;
    // this.dataSource = new MatTableDataSource<any>([]);
    // this.list();
  }

  search() {
    this.tableService.pager.pageIndex = 0;
    //  this.tableService.filter = new ReportFilter(this.filter);
    // this.list();
  }

  estatus_invoices() {
    for (const invoice of this.items) {
      invoice.dateCreated_invoice = this.datePipe.transform(invoice.dateCreated_invoice, 'MMMM dd, yyyy');
      invoice.lastUpdated_invoice = this.datePipe.transform(invoice.lastUpdated_invoice, 'MMMM dd, yyyy');
      if (invoice.status_invoice === 0) {
        invoice.status_invoice = 'Creada';
      }
      if (invoice.status_invoice === 1) {
        invoice.status_invoice = 'Lista';
      }
      if (invoice.status_invoice === 2) {
        invoice.status_invoice = 'Procesada y enviada';
      }
      if (invoice.status_invoice === 3) {
        invoice.status_invoice = 'Creada pero no enviada';
      }
      if (invoice.status_invoice === -1) {
        invoice.status_invoice = 'Error Rotundo';
      }
      if (invoice.status_invoice === 5) {
        invoice.status_invoice = 'Para rebilling';
      }
      if (invoice.status_invoice === -6) {
        invoice.status_invoice = 'Incobrable';
      }
    }
  }
  statusData(){
    for (const item of this.items1) {
    
      if (item.estatus === 0) {
        item.estatus = 'Creada';
      }
      if (item.estatus === 1) {
        item.estatus = 'Lista';
      }
      if (item.estatus === 2) {
        item.estatus = 'Procesada y enviada';
      }
      if (item.estatus === 3) {
        item.estatus = 'Creada pero no enviada';
      }
      if (item.estatus === -1) {
        item.estatus = 'Error Rotundo';
      }
      if (item.estatus === 5) {
        item.estatus = 'Para rebilling';
      }
      if (item.estatus === -6) {
        item.estatus = 'Incobrable';
      }

     
    }
   
  }
  read(item: any) {
    // hacemos esto para no tener que consultar de nuevo la informacion del invoice en la siguiente pantalla
    localStorage.setItem('invoice', JSON.stringify(item));
    //this.router.navigate(['./' + item.id], {relativeTo: this.activatedRoute});
  }

}

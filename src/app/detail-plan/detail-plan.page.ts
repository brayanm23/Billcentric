import { Component, OnInit, ViewChild } from "@angular/core";
import { Service } from "../models/service";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicesService } from "../service/services.service";
import { PlanService } from "../plan/plan.service";
import { ReportFilter } from "../reports/report.filter";
import { ReportService } from "../reports/report.service";
import { Pager } from "../providers/utils/pager";
import { TableService } from "../providers/utils/pager";
import { HttpParams } from "@angular/common/http";
import { MatTableDataSource, PageEvent } from "@angular/material";
import { AlertService } from "../providers/utils/alertas";
import { DatePipe } from "@angular/common";
import { IonInfiniteScroll } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Chart } from "chart.js";

@Component({
  selector: "app-detail-plan",
  templateUrl: "./detail-plan.page.html",
  styleUrls: ["./detail-plan.page.scss"]
})
export class DetailPlanPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild("barCanvas") barCanvas;
  barChart: any;
  partner: any;
  service: any;
  frecuency: any;
  private plan: any;
  filter = new ReportFilter(this.tableService.filter);
  filterDateDesde = null;
  filterDateHasta = null;
  id: number;
  index: number = 1;
  items: any[] = [];
  items1: any[] = [];
  activeScroll: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public services: ServicesService,
    public planService: PlanService,
    private tableService: TableService<any>,
    private reportService: ReportService,
    public alertas: AlertService,
    public datePipe: DatePipe,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.alertas.showLoader();
    // buscamos el plan por su ID
    this.planService.getById(id).subscribe(plan => {
      console.log(plan);
      this.plan = plan;
      this.filter.id_plan = this.plan.id;
      this.filter.id_service = this.plan.service_id; //la variable filter sirve para colocar por parametros las propiedadesa filtrar

      if (this.plan.status_plan === 1) {
        this.plan.status_plan = "Activo";
      }
      if (this.plan.status_plan === 2) {
        this.plan.status_plan = "Inactivo";
      }
      // buscamos el servicio al que esta asociado el plan
      this.planService.findService(this.plan.service_id).subscribe(
        service => {
          this.service = service;
          // buscamos el partner al que esta asociado tanto el plan como el servicio
          this.planService.findPartner(service["partner"]).subscribe(
            partner => {
              this.partner = partner;
              this.filter.id_partner = this.partner.id;
              // buscamos la frecuencia
              // this.planService.findFrecuency(this.plan.frecuency_id).subscribe(frecuency=>{
              //   this.frecuency = frecuency;
              //  });
              this.alertas.dismiss();
            },
            err => {
              console.log(err + "esto es en plan mensaje 1");
              this.alertas.dismiss();
            }
          );
        },
        err => {
          this.alertas.dismiss();
          console.log(err + "esto es en plan mensaje 2");
        }
      );
    });
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType
    });
  }

  async presentToast(text: string, color: string = "primary") {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  list(event?: PageEvent) {
    let httpParams = new HttpParams();
    httpParams = this.filter.getHttpParams(httpParams);
    console.log(this.filter);
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
          this.filter.id_service=-1;
          let httpParams1 = new HttpParams();
          httpParams1 = this.filter.getHttpParams(httpParams1);
          this.reportService.getReportInvoicesGrap(this.reportService.buildRequestOptionsFinder(
            this.tableService.sort,
            'm',
            httpParams1['updates'],
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
  loadData(event1, event?: PageEvent) {
    this.tableService.pager.pageIndex = this.index;

    let httpParams = new HttpParams();
    httpParams = this.filter.getHttpParams(httpParams);
    if (httpParams["updates"] != null) {
      console.log("updates http params 1");
      this.reportService
        .getReportInvoices(
          this.reportService.buildRequestOptionsFinder(
            this.tableService.sort,
            "m",
            httpParams["updates"],
            {
              pageIndex: event
                ? event.pageIndex
                : this.tableService.pager.pageIndex,
              pageSize: event
                ? event.pageSize
                : this.tableService.pager.pageSize
            }
          )
        )
        .subscribe(
          params => {
            console.log(params["result"]);

            let newItems = params["result"]; // items que mostrara la tabla
            for (const item of newItems) {
              this.items.push(item);
            }

            this.estatus_invoices();
            event1.target.complete();
            if (this.items.length === 0) {
              this.activeScroll = false;
              this.presentToast("No se encontraron mas resultados", "warning");
             // console.log("No se encontraron resultados");
            }else this.activeScroll = true;

            if (this.items.length == 1000) {
              event1.target.disabled = true;
            }
          },
          err => {
            // this.notificationService.error(err);
            console.log(err);
          }
        );
    }
    this.index = this.index + 1;
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  reset() {
    this.items = [];
    this.index=1;
    this.activeScroll=false;
  }

  search() {
    this.tableService.pager.pageIndex = 0;
    //  this.tableService.filter = new ReportFilter(this.filter);
    // this.list();
  }
  estatus_invoices() {
    for (const invoice of this.items) {
      invoice.date_created_invoice = this.datePipe.transform(
        invoice.date_created_invoice,
        "MMMM dd, yyyy"
      );
      invoice.last_updated_invoice = this.datePipe.transform(
        invoice.last_updated_invoice,
        "MMMM dd, yyyy"
      );
      /*if (invoice.status_invoice === 0) {
        invoice.status_invoice = "Por procesar(En cola)";
      }*/
      if (invoice.status_invoice === 1) {
        invoice.desc_status = invoice.desc_status + " - " + invoice.description_errorcodebac;
        //invoice.status_invoice = "Procesadas";
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
  }


  statusData(){
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
  }

  read(item: any) {
    // hacemos esto para no tener que consultar de nuevo la informacion del invoice en la siguiente pantalla
    localStorage.setItem("invoice", JSON.stringify(item));
    //this.router.navigate(['./' + item.id], {relativeTo: this.activatedRoute});
  }
}

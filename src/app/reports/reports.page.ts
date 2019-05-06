import { Component, OnInit } from '@angular/core';
import { TableService } from '../providers/utils/pager';
import { HttpParams } from '@angular/common/http';
import { ReportFilter } from './report.filter';
import { ReportService } from './report.service';
import { MatTableDataSource, PageEvent } from '@angular/material';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = [ 'compania', 'servicio', 'plan', 'total'];
    isOpenSearchPanel = false;
    filter = new ReportFilter(this.tableService.filter);
    confirmDelete = true;
    items: any[] = [];
    rango = false;
    del = false;
    types: any[] = [];


    constructor(private tableService: TableService<any>,
              private reportService: ReportService) { }

  ngOnInit() {
      this.types = [{desc: 'Dia', value: 1}, {desc: 'Dia anterior', value: 2}, {desc: 'Mes', value: 3}, {desc: 'Mes Anterior', value: 4}];
  }

    list(event?: PageEvent) {
        let httpParams = new HttpParams()
        httpParams = this.filter.getHttpParams(httpParams);
        if ( httpParams['updates'] != null) {
            if (this.filter.since_date != null && this.filter.until_date == null){
                console.log('Debe ingresar el parametro de fecha : Hasta');
                return;
            }
            if (this.filter.since_date == null && this.filter.until_date != null){
                console.log('Debe ingresar el parametro de fecha : Desde');
                return;
            }
            this.reportService.getReportInvoicesCharged(this.reportService.buildRequestOptionsFinder(
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

    reset() {
       this.items=[];
    }

    search() {
        this.isOpenSearchPanel = false;
        this.tableService.pager.pageIndex = 0;
        // this.tableService.filter = new ReportFilter(this.filter);
        this.list();
    }

    openSearchPanel(value: boolean) {
        this.isOpenSearchPanel = value;
        this.filter = new ReportFilter(this.tableService.filter);
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }


    rangoBusqueda() {
        delete this.filter.del;
        this.rango = true;
        this.del = false;
    }

    dropBusqueda() {
        delete this.filter.since_date;
        delete this.filter.until_date;
        this.del = true;
        this.rango = false;
    }

}

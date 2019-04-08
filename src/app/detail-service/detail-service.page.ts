import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../models/service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesService} from '../service/services.service';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.page.html',
  styleUrls: ['./detail-service.page.scss'],
})
export class DetailServicePage implements OnInit {
    @ViewChild('barCanvas') barCanvas;
  item: any = [];
  barChart: any;
  partner: any;
  private servicio: any;
  id: number;

    constructor(private route: ActivatedRoute,
              private router: Router,
              public services: ServicesService) {
        const id = this.route.snapshot.params['id'];

    }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];

      this.services.getById(id)
          .subscribe(
              servicio => {
                  this.servicio = servicio;
                  if (this.servicio.status_service === 1) {
                      this.servicio.status_service = 'Activo'; }
                  if (this.servicio.status_service === 2) {
                      this.servicio.status_service = 'Inactivo'; }
                  this.services.findPartner(servicio['partner'])
                      .subscribe(partner => {
                          this.partner = partner;

                      }, (err) => {
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

    reportes() {
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

}

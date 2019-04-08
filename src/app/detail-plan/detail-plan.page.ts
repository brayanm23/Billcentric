import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../models/service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesService} from '../service/services.service';
import { PlanService } from '../plan/plan.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.page.html',
  styleUrls: ['./detail-plan.page.scss'],
})
export class DetailPlanPage implements OnInit {

    @ViewChild('barCanvas') barCanvas;
    barChart: any;
    partner: any;
    service: any;
    frecuency: any;
    private plan: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                public services: ServicesService,
                public planService: PlanService) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        // buscamos el plan por su ID
        this.planService.getById(id)
            .subscribe(plan => {
                this.plan = plan;
                if (this.plan.status_plan === 1) {
                    this.plan.status_plan = 'Activo'; }
                if (this.plan.status_plan === 2) {
                    this.plan.status_plan = 'Inactivo'; }
                // buscamos el servicio al que esta asociado el plan
                this.planService.findService(this.plan.service_id).subscribe( service => {
                    this.service = service;
                    // buscamos el partner al que esta asociado tanto el plan como el servicio
                    this.planService.findPartner(service['partner']).subscribe(partner => {
                        this.partner = partner;
                        // buscamos la frecuencia
                        // this.planService.findFrecuency(this.plan.frecuency_id).subscribe(frecuency=>{
                        //   this.frecuency = frecuency;
                        //  });
                    }, (err) => {
                        console.log(err + 'esto es en plan mensaje 1');
                    });
                }, (err) => {
                    console.log(err + 'esto es en plan mensaje 2');
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

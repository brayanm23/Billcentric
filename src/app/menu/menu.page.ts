import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    pages = [
        {
            title: 'Inicio',
            url: '/menu/home',
            icon: 'home'
        },
        {
            title: 'Reportes',
            children: [
                {
                    title: 'Compañias',
                    url: '/menu/partner',
                    icon: 'business'
                },
                {
                    title: 'Facturas cobradas',
                    url: '/menu/reports',
                    icon: 'stats'
                },
            ]
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner/partner.service';
import { Partner } from '../models/partner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-partner',
  templateUrl: './detail-partner.page.html',
  styleUrls: ['./detail-partner.page.scss'],
})
export class DetailPartnerPage implements OnInit {
    partner: Partner;
    unico: any = [];

  constructor(public partnerS: PartnerService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        this.partnerS.getPartnerById(id)
            .subscribe(
                param => {
                    this.unico = param;
                    if (this.unico.status_partner === 1) {
                        this.unico.status_partner = 'Activo'; }
                    if (this.unico.status_partner === 2) {
                        this.unico.status_partner = 'Inactivo'; }
                    console.log(this.unico);
                },
        error1 => { console.log('no se que es esto'); });
    }
}


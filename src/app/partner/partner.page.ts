import { Component, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';
import { Router } from '@angular/router';
import { Partner } from '../models/partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {
    queryText: string;
    list: Partner[];

  constructor(public partnerS: PartnerService,
              private router: Router) {
      this.queryText = '';
      this.readListPartner();

  }

  ngOnInit() {
  }

    readListPartner() {
        this.partnerS.getPartnersByUserId()
            .subscribe(
                data => {this.list = data;
                },
                error => { console.log('error en la lista de partner');
                                }
            );
    }

    readListService(item: Partner) {
        this.router.navigate(['/service', item.id]);
        // let link = ['/inventario/detalle',item.id];
    }

    readDetailPartner(item: Partner) {
        this.router.navigate(['/detail-partner', item.id]);
    }
}

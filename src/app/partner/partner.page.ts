import { Component, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';
import { Router } from '@angular/router';
import { Partner } from '../models/partner';
import * as _ from 'lodash';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {
    queryText: string;
    list: any = [];

  constructor(public partnerS: PartnerService,
              private router: Router) {
      this.queryText = '';
      this.readListPartner();
      this.list = this.readListPartner();
  }

  ngOnInit() {
  }

    filterPartner(lis: any) {
        const val = lis.target.value;
        if (val && val.trim() !== '') {
            this.list = _.values(this.list);
            this.list = this.list.filter((item) => {
                return (item.name_partner.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else {
            this.list = this.readListPartner();
        }
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
    }

    readDetailPartner(item: Partner) {
        this.router.navigate(['/detail-partner', item.id]);
    }
}

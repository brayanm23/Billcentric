import { Component, OnInit } from '@angular/core';
import { ServicesService} from './services.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
    servicios: any = [];
    id: number;
    queryText: string;

    constructor(public service: ServicesService,
                private route: ActivatedRoute,
                private router: Router
    ) {     this.id = this.route.snapshot.params['id'];
            this.readListService(this.id);
            this.queryText = '';
            this.servicios = this.readListService(this.id);

    }

    ngOnInit() {
      const id = this.route.snapshot.params['id'];
      if (!id) {
          console.log('no exite un id');
          return;
      }
  }

    filterService(lis: any) {
        const val = lis.target.value;
        if (val && val.trim() !== '') {
            this.servicios = _.values(this.servicios);
            this.servicios = this.servicios.filter((item) => {
                return (item.name_service.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else {
            this.servicios = this.readListService(this.id);
        }
    }

    readListService(id) {
      this.service.getServiceByPartner(id)
          .subscribe(
              params => {
                  this.servicios = params,
                      console.log(params); },

              error => {console.log('error en la lista de servicios'); }
          );
  }

    readListPlans(item) {
            this.router.navigate(['/menu/plan', item.id]);
    }

    readDetailService(item) {
        this.router.navigate(['/menu/detail-service', item.id]);
    }
}

import { Component, OnInit } from '@angular/core';
import { ServicesService} from './services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PartnerService } from '../partner/partner.service';
import { Service} from '../models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
    servicios: any[];
    constructor(public service: ServicesService,
                private route: ActivatedRoute,
                private router: Router
    ) {
    }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      if (!id) {
          console.log('no exite un id');
          return;
      }
      this.service.getServiceByPartner(id)
          .subscribe(
              params => {
                  this.servicios = params,
                      console.log(params); },

              error => {console.log('error en la lista de servicios'); }

          );
  }

    back() {
        this.router.navigate(['/partner']);
    }
}

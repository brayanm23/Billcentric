import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanService} from './plan.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
    plans: any = [];
    id: number;
    queryText: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                public plan: PlanService) {
        this.id = this.route.snapshot.params['id'];
        this.readListPlan(this.id);
        this.queryText = '';
        this.plans = this.readListPlan(this.id);

    }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      if (!id) {
          console.log('no exite un id');
          return;
      }
  }
    filterPlan(lis: any) {
        const val = lis.target.value;
        if (val && val.trim() !== '') {
            this.plans = _.values(this.plans);
            this.plans = this.plans.filter((item) => {
                return (item.name_plan.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else {
            this.plans = this.readListPlan(this.id);
        }
    }

    readListPlan(id) {
        this.plan.getByService(id)
            .subscribe(
                params => {
                    this.plans = params,
                        console.log(params); },
                error => {console.log('error en la lista de planes'); }
            );
    }

    readDetailPlan(item) {
        this.router.navigate(['/menu/detail-plan', item.id]);
    }

}

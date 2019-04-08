import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home',    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login',   loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'partner', loadChildren: './partner/partner.module#PartnerPageModule'
  },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule'
  },
  { path: 'service/:id', loadChildren: './service/service.module#ServicePageModule'
  },
  { path: 'detail-partner', loadChildren: './detail-partner/detail-partner.module#DetailPartnerPageModule'
  },
  { path: 'detail-partner/:id', loadChildren: './detail-partner/detail-partner.module#DetailPartnerPageModule'
  },
  { path: 'detail-service', loadChildren: './detail-service/detail-service.module#DetailServicePageModule'
  },
  { path: 'detail-service/:id', loadChildren: './detail-service/detail-service.module#DetailServicePageModule'
  },
  { path: 'plan', loadChildren: './plan/plan.module#PlanPageModule'
  },
  { path: 'plan/:id', loadChildren: './plan/plan.module#PlanPageModule'
  },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule'
  },
  { path: 'detail-plan', loadChildren: './detail-plan/detail-plan.module#DetailPlanPageModule'
  },
  { path: 'detail-plan/:id', loadChildren: './detail-plan/detail-plan.module#DetailPlanPageModule'
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

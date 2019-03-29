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
  { path: 'list',    loadChildren: './list/list.module#ListPageModule'
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
  { path: 'detail-service', loadChildren: './detail-service/detail-service.module#DetailServicePageModule' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

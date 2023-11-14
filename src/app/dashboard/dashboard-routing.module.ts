import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'listpage',
        loadChildren: () => import ('./../dashboard/listpage/listpage.module').then( m => m.ListpagePageModule)
      },
      {
        path: 'bottommenu',
        loadChildren: () => import ('./../dashboard/bottommenu/bottommenu.module').then( m => m.BottommenuPageModule)
      },
      {
        path: 'productlist',
        loadChildren: () => import ('./../dashboard/productlist/productlist.module').then( m => m.ProductlistPageModule)
      },
      {
        path: 'qrcodepage',
        loadChildren: () => import ('./../dashboard/qrcodepage/qrcodepage.module').then( m => m.QrcodepagePageModule)
      },
      {
      path: '',
      redirectTo: '/dashboard/bottommenu',
      pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

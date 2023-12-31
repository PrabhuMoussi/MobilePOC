import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardPage } from '../dashboard/dashboard.page';

const routes: Routes = [
  {

    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import ('./../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

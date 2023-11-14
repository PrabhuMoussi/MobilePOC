import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottommenuPage } from './bottommenu.page';

const routes: Routes = [
  {
    path: '',
    component: BottommenuPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottommenuPageRoutingModule {}

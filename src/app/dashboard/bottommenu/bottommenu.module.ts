import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottommenuPageRoutingModule } from './bottommenu-routing.module';

import { BottommenuPage } from './bottommenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottommenuPageRoutingModule
  ],
  declarations: [BottommenuPage]
})
export class BottommenuPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodepagePageRoutingModule } from './qrcodepage-routing.module';

import { QrcodepagePage } from './qrcodepage.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodepagePageRoutingModule
  ],
  declarations: [QrcodepagePage]
})
export class QrcodepagePageModule {}

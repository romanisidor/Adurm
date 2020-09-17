import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cdmx2PageRoutingModule } from './cdmx2-routing.module';

import { Cdmx2Page } from './cdmx2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cdmx2PageRoutingModule
  ],
  declarations: [Cdmx2Page]
})
export class Cdmx2PageModule {}

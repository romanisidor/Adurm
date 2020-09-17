import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acapulco2PageRoutingModule } from './acapulco2-routing.module';

import { Acapulco2Page } from './acapulco2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acapulco2PageRoutingModule
  ],
  declarations: [Acapulco2Page]
})
export class Acapulco2PageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acapulco2Page } from './acapulco2.page';

const routes: Routes = [
  {
    path: '',
    component: Acapulco2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acapulco2PageRoutingModule {}

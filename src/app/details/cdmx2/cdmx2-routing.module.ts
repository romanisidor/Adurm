import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cdmx2Page } from './cdmx2.page';

const routes: Routes = [
  {
    path: '',
    component: Cdmx2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cdmx2PageRoutingModule {}

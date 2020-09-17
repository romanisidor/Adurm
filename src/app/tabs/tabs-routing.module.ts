import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import ('../map/map.module').then(m=> m.MapPageModule)
          }
        ]

      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import ('../search/search.module').then(m=> m.SearchPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import ('../profile/profile.module').then(m=> m.ProfilePageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: '/tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

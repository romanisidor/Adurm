import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:'',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
     path: 'register',
     loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
   },
   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
 
  {
    path: 'acapulco2',
    loadChildren: () => import('./details/acapulco2/acapulco2.module').then( m => m.Acapulco2PageModule)
  },
  {
    path: 'cdmx2',
    loadChildren: () => import('./details/cdmx2/cdmx2.module').then( m => m.Cdmx2PageModule)
  },
  {
    path: 'info-modal',
    loadChildren: () => import('./info-modal/info-modal.module').then( m => m.InfoModalPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'testpage',
    loadChildren: () => import('./testpage/testpage.module').then( m => m.TestpagePageModule)
  },
  {
    path: '',
    canActivate: [ AuthenticationGuard ],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

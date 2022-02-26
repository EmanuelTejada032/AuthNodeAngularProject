import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protectedcomponents/protectedcomponents.module').then( module => module.ProtectedcomponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

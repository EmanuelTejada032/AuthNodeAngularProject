import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ValidateTokenGuard } from './guards/validate-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protectedcomponents/protectedcomponents.module').then( module => module.ProtectedcomponentsModule),
    canLoad: [ValidateTokenGuard],
    canActivate: [ValidateTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

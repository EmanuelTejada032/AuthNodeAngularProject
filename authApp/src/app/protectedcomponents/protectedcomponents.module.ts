import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedcomponentsRoutingModule } from './protectedcomponents-routing.module';
import { ProtectedcomponentsComponent } from './protectedcomponents.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProtectedcomponentsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedcomponentsRoutingModule
  ]
})
export class ProtectedcomponentsModule { }

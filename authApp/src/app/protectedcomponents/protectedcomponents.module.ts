import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedcomponentsRoutingModule } from './protectedcomponents-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedcomponentsRoutingModule
  ]
})
export class ProtectedcomponentsModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FechasComponent } from './fechas/fechas.component'

const ROUTES_FECHAS : Routes = [
  { path : '', component : FechasComponent }
];

@NgModule({
  imports : [RouterModule.forChild(ROUTES_FECHAS)],
  exports : [RouterModule]
})

export class RoutingModulePaises {}

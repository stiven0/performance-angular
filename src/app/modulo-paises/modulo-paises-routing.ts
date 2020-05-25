import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PaisesComponent } from './paises/paises.component'

const ROUTES_PAISES : Routes = [
  { path : '', component : PaisesComponent }
];

@NgModule({
  imports : [RouterModule.forChild(ROUTES_PAISES)],
  exports : [RouterModule]
})

export class RoutingModulePaises {}

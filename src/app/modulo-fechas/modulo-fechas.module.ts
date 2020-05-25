import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//
import { AngularMaterialModule } from '../angular-materials/angular-material.module';
import { FechasComponent } from './fechas/fechas.component';
import { RoutingModulePaises } from './modulo-fechas-routing';


@NgModule({
  declarations: [
    FechasComponent
  ],
  imports: [
    CommonModule,
    RoutingModulePaises,
    AngularMaterialModule
  ]
})
export class ModuloFechasModule { }

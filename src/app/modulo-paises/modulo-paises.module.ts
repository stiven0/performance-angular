import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-materials/angular-material.module';
import { PaisesComponent } from './paises/paises.component';
import { RoutingModulePaises } from './modulo-paises-routing';



@NgModule({
  declarations: [
    PaisesComponent
  ],
  imports: [
    CommonModule,
    RoutingModulePaises,
    AngularMaterialModule
  ]
})
export class ModuloPaisesModule { }

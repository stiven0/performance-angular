import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos externos
import { AngularMaterialModule } from '../angular-materials/angular-material.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { RoutingModuleUsuarios } from './module-usuarios-routing';

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RoutingModuleUsuarios,
    AngularMaterialModule
  ]
})
export class ModuloUsuariosModule { }

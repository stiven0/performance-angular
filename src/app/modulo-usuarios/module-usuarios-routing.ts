
  import { Routes, RouterModule } from '@angular/router';
  import { NgModule } from '@angular/core';


  import { UsuariosComponent } from './usuarios/usuarios.component';

  const ROUTES_USUARIOS : Routes = [
    { path : '', component :  UsuariosComponent}
  ];

  @NgModule({
    imports : [RouterModule.forChild(ROUTES_USUARIOS)],
    exports : [RouterModule]
  })

  export class RoutingModuleUsuarios {}

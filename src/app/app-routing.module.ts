
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// precarga de modulos strategy
import { PreloadStrategyService } from '@services/preload-strategy.service';

const ROUTES : Routes = [
  { path : 'usuarios', loadChildren : () => import('./modulo-usuarios/modulo-usuarios.module')
                                            .then(m => m.ModuloUsuariosModule),
                                            data : { preload : true } },

  { path : 'paises', loadChildren : () =>   import('./modulo-paises/modulo-paises.module')
                                            .then(m => m.ModuloPaisesModule),
                                            data : { preload : true } },

  { path : 'fechas', loadChildren : () =>   import('./modulo-fechas/modulo-fechas.module')
                                            .then(m => m.ModuloFechasModule),
                                            data : { preload : false }},

  { path : '', pathMatch : 'full', redirectTo : 'usuarios' }
];

@NgModule({
  imports : [ RouterModule.forRoot(ROUTES, {
    // enableTracing : true, -> debugging
    preloadingStrategy : PreloadStrategyService
    // preloadingStrategy : PreloadAllModules -> pre-cargara todos los modulos
  }) ],
  exports : [ RouterModule ]
})

export class RoutingModules {}

  // precargando modulos selectivos

  import { Injectable } from '@angular/core';
  import { PreloadingStrategy, Route } from '@angular/router';
  import { Observable, of } from 'rxjs';

  @Injectable({
    providedIn : 'root'
  })

  export class PreloadStrategyService implements PreloadingStrategy {

    preloadModules : string[] = [];

    constructor(){}

    preload(route : Route, load : () => Observable<any>): Observable<any>{

      // determinar que modulos se van a precargar
      if(route.data && route.data['preload']){
          this.preloadModules.push(route.path);

          // ver que routes vamos a precargar
          console.log('Preload: ', route.path);

          // retornamos la ruta que vamos a precargar
          return load();
      } else {

          // si no, quiere decir que dicha ruta no se va a precargar, por esto
          // retornamos un Observable
          return of(null);
      }

    };







  }

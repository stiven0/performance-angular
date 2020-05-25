import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// modulo de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-materials/angular-material.module';

// rutas module
import { RoutingModules } from './app-routing.module';
import { MenuSharedComponent } from './menu-shared/menu-shared.component';

// interceptor service
import { InterceptorService } from './interceptors/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuSharedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModules,
    HttpClientModule
  ],
  providers: [

    // aqui podremos tener varios interceptores por ejemplo para cada servicio especifico
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

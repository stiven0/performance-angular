
  import { Injectable } from '@angular/core';
  import { HttpInterceptor, HttpEvent, HttpHandler, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';

  @Injectable({
    providedIn : 'root'
  })

  export class InterceptorService implements HttpInterceptor {

    constructor(){
    }

    // metodo que sera el interceptor, aqui manejaremos la request y estableceremos los headers, o los params, etc..
    intercept( req:HttpRequest<any>, next:HttpHandler ): Observable<HttpEvent<any>> {

      // aqui podremos determinar que rutas necesitaran distintos tipos de headers
      // if( req.method == 'GET' && req.url.includes('users') ){
      //     console.log('oeee');
      //     return next.handle( req );
      // }

      // definimos los headers que tendran la peticion
      const headers : HttpHeaders = new HttpHeaders({
        'Content-Type' : 'applcation/json'
      });

      // clonamos la request para que no nos de ningun error
      const reqClone = req.clone({
        headers
      });

      // console.log('Interceptor', req);

      return next.handle( reqClone ).pipe(
        catchError( this.manejarError )
      )
    };


    // manejar error en las peticiones
    manejarError( error : HttpResponse<any> ){
      console.log('Ha ocurrido un error');
      console.warn(error);
      return throwError('Error personalizado interceptors');
    };


  }

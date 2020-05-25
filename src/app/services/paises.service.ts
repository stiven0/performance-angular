import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class PaisesService {
  private url : string;

  constructor() {
    this.url = 'https://restcountries.eu/rest/v2/lang/es';
  }


  getPaisesEs(){
    return fetch(this.url).then( response => response.json()).catch(err => console.log(err));
  };


}

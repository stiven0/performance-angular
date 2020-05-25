
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class UsuariosService {

  private url : string;

  constructor(private http : HttpClient) {
    this.url = 'https://reqres.in/api/users';
  }

  getUsers(): Observable<any>{
    return this.http.get(this.url);
  }

}

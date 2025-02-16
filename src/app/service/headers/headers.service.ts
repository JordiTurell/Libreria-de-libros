import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviorement } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  private headers: HttpHeaders | null = null;
  private sesion = enviorement.token
  private token!: string | null
  
  constructor() { }

  getheader():HttpHeaders{
    let jsonlocalstorage = localStorage.getItem(this.sesion)
    if(jsonlocalstorage != null){
      this.token = jsonlocalstorage
    }
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.headers
  }

  getheaderLogin():HttpHeaders{
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.headers
  }
}

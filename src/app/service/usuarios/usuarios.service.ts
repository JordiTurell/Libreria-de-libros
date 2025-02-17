import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Observable } from 'rxjs';
import { Usuarios } from '../../models/usuarios';
import { enviorement } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private headers:HeadersService, private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Usuarios[]>(
      `${enviorement.api}/auth/usuarios`,
      { headers: header }
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { enviorement } from '../../environment/environment';
import { ResponseItem } from '../../models/response-item';
import { Observable } from 'rxjs';
import { Libros } from '../../models/libros';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private headers:HeadersService, private http: HttpClient) { }

  getLibros(): Observable<Libros[]>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.get<Libros[]>(
      `${enviorement.api}/libros`,
      { headers: header }
    );
  }

}

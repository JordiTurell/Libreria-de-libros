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

  getLibroById(id: number): Observable<Libros> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Libros>(
      `${enviorement.api}/libros/${id}`,
      { headers: header }
    );
  }
  
  createLibro(formData: FormData): Observable<any> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post(
      `${enviorement.api}/libros`,
      formData,
      { headers: header }
    );
  }

  updateLibro(id: number, libro: Libros): Observable<Libros> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.put<Libros>(
      `${enviorement.api}/libros/${id}`,
      libro,
      { headers: header }
    );
  }

  deleteLibro(id: number): Observable<void> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.delete<void>(
      `${enviorement.api}/libros/${id}`,
      { headers: header }
    );
  }

  backGetLibrosByCategoria(id: number): Observable<Libros[]> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Libros[]>(
      `${enviorement.api}/libros/categoria/${id}`,
      { headers: header }
    );
  }

  backGetLibros(): Observable<Libros[]> {
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Libros[]>(
      `${enviorement.api}/libros`,
      { headers: header }
    );
  }
}

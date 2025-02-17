import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Observable } from 'rxjs';
import { enviorement } from '../../environment/environment';
import { Categorias } from '../../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private headers:HeadersService, private http: HttpClient) { }

  getCategorias(): Observable<Categorias[]>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Categorias[]>(
      `${enviorement.api}/categorias`,
      { headers: header }
    );
  }

  getCategoriaById(id: number): Observable<Categorias>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Categorias>(
      `${enviorement.api}/categorias/${id}`,
      { headers: header }
    );
  }

  deleteCategoria(id: number): Observable<Categorias>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.delete<Categorias>(
      `${enviorement.api}/categorias/${id}`,
      { headers: header }
    );
  }

  updateCategoria(id: number, categoria: Categorias): Observable<Categorias>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.put<Categorias>(
      `${enviorement.api}/categorias/${id}`,
      categoria,
      { headers: header }
    );
  }
  
  createCategoria(categoria: Categorias): Observable<Categorias>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Categorias>(
      `${enviorement.api}/categorias`,
      categoria,
      { headers: header }
    );
  }
}

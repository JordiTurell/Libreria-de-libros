import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadersService } from '../headers/headers.service';
import { ResponseItem } from '../../models/response-item';
import { Token } from '../../models/token';
import { Login } from '../../models/login';
import { enviorement } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private headers:HeadersService, private http: HttpClient) { 

  }

  login(form:Login): Observable<ResponseItem<Token>>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.post<ResponseItem<Token>>(
      `${enviorement.api}/auth/login`,
      form,
      { headers: header }
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviorement } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localstoragetoken = enviorement.token
  
  constructor() { }

  isAuthenticated(token:string):Observable<boolean> {
    return of(true)
  }

  setToken(token: string): boolean {
    localStorage.setItem(this.localstoragetoken, token)
    return true
  }

  removeToken(): void {
    localStorage.removeItem(this.localstoragetoken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localstoragetoken);
  }
}

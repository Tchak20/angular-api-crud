import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://flp-api.francecentral.cloudapp.azure.com/auth/login'
  constructor(private http: HttpClient) { }

  login(credentials:any): any{
    return this.http.post(this.url, credentials)
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string){
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !!token
  }
}

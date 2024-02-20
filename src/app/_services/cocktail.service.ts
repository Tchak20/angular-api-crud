import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail, IDataCocktail, ISingleCocktail } from '../_interfaces/cocktail';
import { Iapi } from '../_interfaces/iapi';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  url = 'http://flp-api.francecentral.cloudapp.azure.com/cocktails'
  constructor(private http: HttpClient) { }

  getAllCocktail(): Observable<IDataCocktail>{
    return this.http.get<IDataCocktail>(this.url)
  }

  getCocktail(cid:string|null ): Observable<ISingleCocktail>{
    return this.http.get<ISingleCocktail>(this.url+'/'+cid)
  }

  addCocktail(cocktail: ICocktail): Observable<Iapi>{
    return this.http.put<Iapi>(this.url,cocktail)
  }

  updateCocktail(cocktail: ICocktail): Observable<Iapi>{
    return this.http.patch<Iapi>(this.url+'/'+cocktail.id,cocktail)
  }

  trashCocktail(cid: number): Observable<Iapi>{
    return this.http.delete<Iapi>(this.url+'/trash/'+cid)
  }

  untrashCocktail(cid: number): Observable<Iapi>{
    return this.http.post<Iapi>(this.url+'/untrash/'+cid, {})
  }

  deleteCocktail(cid: number): Observable<Iapi>{
    return this.http.delete<Iapi>(this.url+'/'+cid)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataUser, ISingleUser, IUser } from '../_interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://flp-api.francecentral.cloudapp.azure.com/users'
  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get<IDataUser>(this.url)
  }

  getUser(uid: string | null): Observable<ISingleUser>{
    return this.http.get<ISingleUser>(this.url+'/'+uid)
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit{

  userList: any[] = []

  constructor(private http: HttpClient){}
  ngOnInit(): void {
      this.http.get('http://flp-api.francecentral.cloudapp.azure.com/users').subscribe(
        (users: any) => {
          console.log(users)
          this.userList = users.data
        }
      )
  }

}

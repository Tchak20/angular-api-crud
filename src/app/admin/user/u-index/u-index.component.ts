import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit{

  constructor(private http: HttpClient){}
  ngOnInit(): void {
      this.http.get('http://flp-api.francecentral.cloudapp.azure.com/users').subscribe(
        data => console.log(data),
        err => console.log(err)
      )
  }

}

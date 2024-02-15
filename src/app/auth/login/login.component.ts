import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form = {
    email: null,
    password: null
  }

  constructor(private http: HttpClient){}
  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log(this.form)
    this.http.post('http://flp-api.francecentral.cloudapp.azure.com/auth/login' , this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}

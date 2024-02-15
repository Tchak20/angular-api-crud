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

  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log(this.form)
  }
}

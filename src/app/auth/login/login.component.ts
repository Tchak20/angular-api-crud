import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(private authService: AuthService){}
  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      (data:any) => console.log(data.acces_token),
      (err:any) => console.log(err)
    )
  }
}

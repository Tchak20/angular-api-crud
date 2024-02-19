import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent implements OnInit{

  constructor(private tokenService: TokenService){}
  ngOnInit(): void {
      
  }
  logout(){
    this.tokenService.clearToken()
  }
}

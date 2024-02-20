import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit{

  user: any = {
    id: 0,
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: null
  }

  constructor(private activated: ActivatedRoute
    ,private http: HttpClient){}
  ngOnInit(): void {
      let uid = this.activated.snapshot.paramMap.get('id')
      this.http.get('http://flp-api.francecentral.cloudapp.azure.com/users/'+uid).subscribe(
        (data:any) => {
          console.log(data)
          this.user = data.data
        })
  }

  onSubmit(){
    console.log(this.user)
  }

}

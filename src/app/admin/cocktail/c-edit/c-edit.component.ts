import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-edit',
  templateUrl: './c-edit.component.html',
  styleUrls: ['./c-edit.component.css']
})
export class CEditComponent implements OnInit{

  cocktail: ICocktail = {
    id: 0,
    user_id: 0,
    nom: "",
    description: "",
    recette: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: null
  }

  constructor(private activated: ActivatedRoute, private cocktailService: CocktailService){}
  ngOnInit(): void {
    let cid = this.activated.snapshot.paramMap.get('id')
    this.cocktailService.getCocktail(cid).subscribe(
      data => {
        console.log(data)
        this.cocktail = data.data
      })
}

onSubmit(){
  this.cocktailService.updateCocktail(this.cocktail).subscribe(
    data => console.log(data.message)
  )
}

}
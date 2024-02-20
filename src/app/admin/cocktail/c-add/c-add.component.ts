import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-add',
  templateUrl: './c-add.component.html',
  styleUrls: ['./c-add.component.css']
})
export class CAddComponent  implements OnInit{

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

  constructor( private cocktailService: CocktailService){}
  ngOnInit(): void {}

onSubmit(){
  this.cocktailService.addCocktail(this.cocktail).subscribe(
    data => console.log(data.message)
  )
}

}
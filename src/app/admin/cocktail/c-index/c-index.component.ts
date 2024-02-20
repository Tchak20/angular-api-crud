import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.css']
})
export class CIndexComponent implements OnInit{

  cocktailList: ICocktail[] = []
  constructor(private cocktailService: CocktailService){}

  ngOnInit(): void {
      this.cocktailService.getAllCocktail().subscribe(
        data => {console.log(data)
        this.cocktailList = data.data
        }
      )
  }

  trash(id:number){
    console.log(id)
    this.cocktailService.trashCocktail(id).subscribe(
      data => {console.log(data)
        this.ngOnInit()
      }
    )
  }

  untrash(id:number){
    console.log(id)
    this.cocktailService.untrashCocktail(id).subscribe(
      data => {console.log(data)
        this.ngOnInit()
      }
    )
  }

  delete(id:number){
    console.log(id)
    this.cocktailService.deleteCocktail(id).subscribe(
      data => {console.log(data)
        this.ngOnInit()
      }
    )
  }
}

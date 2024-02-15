import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [
//Ici c'est pour spécifier qu'avant d'afficher les routes enfants il faut passer par le layout
  {
    path: '', component: PlayoutComponent, children:[
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: 'home', component: HomeComponent},
      { path: 'cocktail', component: CocktailComponent},
      { path: 'contact', component: ContactComponent}
    ]
  }

  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

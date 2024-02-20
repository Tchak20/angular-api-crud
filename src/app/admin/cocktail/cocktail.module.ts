import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CDeleteComponent } from './c-delete/c-delete.component';
import { CAddComponent } from './c-add/c-add.component';
import { CEditComponent } from './c-edit/c-edit.component';
import { CIndexComponent } from './c-index/c-index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CDeleteComponent,
    CAddComponent,
    CEditComponent,
    CIndexComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    FormsModule
  ]
})
export class CocktailModule { }

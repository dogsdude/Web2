import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipeComponent } from './recipe.component';

import { CreateReviewModule } from "../../components/modals/create-review.module";

export const ROUTES: Routes = [
  //TODO: Is this the correct route?
  { path: 'recipes/:id', component: RecipeComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CreateReviewModule,
    RouterModule.forChild(ROUTES),

    TooltipModule.forRoot(),
  ],
  declarations: [
    RecipeComponent
  ],

  exports: [
    RecipeComponent
  ],

  providers: [
  ]
})
export class RecipesModule{}

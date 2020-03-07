import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { RecipeService } from "../../components/services/recipe.service";
import { CreateRecipeModule } from "../../components/modals/create-recipe.module";
import { ModalModule } from "ngx-bootstrap";
import { CarouselModule} from "ngx-bootstrap";
import { RecipesModule } from "../recipes/recipes.module";
import { UpdateRecipeModule } from "../../components/modals/update-recipe.module";


export const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CreateRecipeModule,
    UpdateRecipeModule,
    RecipesModule,
    BrowserAnimationsModule,
    RouterModule.forChild(ROUTES),
    TooltipModule.forRoot(),
  ],
  declarations: [
    MainComponent,

  ],

  exports: [
    MainComponent,
  ],

  providers: [
    RecipeService
  ]
})
export class MainModule {}

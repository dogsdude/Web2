import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { RecipeService } from "../../components/services/recipe.service";
import { CreateRecipeModule } from "../../components/modals/create-recipe.module";
import { ModalModule } from "ngx-bootstrap";
import { CarouselModule} from "ngx-bootstrap";


export const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CreateRecipeModule,
    FormsModule,
    ReactiveFormsModule,
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

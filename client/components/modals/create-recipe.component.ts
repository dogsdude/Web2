import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../interfaces/User';
import { Recipe } from '../interfaces/Recipe';
import { Review} from "../interfaces/Review";

@Component({
  selector: 'create-recipe',
  template: require('./create-recipe.html')
})
export class CreateRecipeComponent {
  @Input()
  formError: String;
  @Input()
  formInfo: String;
  @Output()
  private recipe: Recipe = {
    _id: undefined,
    __v: undefined,
    name: undefined,
    description: undefined,
    img_url: undefined,
    prep_time: undefined,
    cook_time: undefined,
    directions: undefined,
    ingredients: undefined,
    user_reviews: undefined,
  };
  createdRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}
  createRecipe() {
    this.createdRecipe.emit(this.recipe);
  }
}

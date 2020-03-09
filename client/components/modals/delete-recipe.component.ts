import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Recipe } from '../interfaces/Recipe';
import { BasicComponent } from "./BasicRating";

@Component({
  selector: 'delete-recipe',
  template: require('./delete-recipe.html')
})
export class DeleteRecipeComponent {
  @Input()
  recipe: Recipe;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  deletedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  deleteRecipe() {
    this.deletedRecipe.emit(this.recipe);
    this.bsModalRef.hide();
  }

}



import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Recipe } from '../interfaces/Recipe';
import {Review} from "../interfaces/Review";
import {DeleteReviewComponent} from "./delete-review.component";
import {RecipeService} from "../services/recipe.service";
import {DeleteRecipeComponent} from "./delete-recipe.component";

@Component({
  selector: 'update-recipe',
  template: require('./update-recipe.html')
})
export class UpdateRecipeComponent {
  @Input()
  recipe: Recipe;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  updatedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  static parameters = [BsModalRef, RecipeService, BsModalService];
  constructor(public bsModalRef: BsModalRef, public recipeService: RecipeService, public modalService: BsModalService) {
    this.recipeService = recipeService;
    this.modalService = modalService;
  }

  addDirectionField(){
    this.recipe.directions.push('');
  }

  updateRecipe() {
    this.updatedRecipe.emit(this.recipe);
  }

  deleteRecipe(recipe: Recipe){
    const modalRef = this.modalService.show(DeleteRecipeComponent);
    this.recipeService.deleteRecipe(recipe)
      .then(deletedReview => {
        modalRef.content.formInfo = `${recipe.name} deleted.`
      })
      .catch(err => {
        console.log(err);
        modalRef.content.formError = err.error.message;
      });
    this.bsModalRef.hide();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}

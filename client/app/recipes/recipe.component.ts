import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../components/interfaces/Recipe';
import {RecipeService} from '../../components/services/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BsModalService} from 'ngx-bootstrap';
import {UpdateRecipeComponent} from "../../components/modals/update-recipe.component";
import {CreateRecipeComponent} from "../../components/modals/create-recipe.component";
import {CreateReviewComponent} from "../../components/modals/create-review.component";

@Component({
  selector: 'recipes',
  template: require('./recipes.html')
})

export class RecipeComponent implements OnInit {
  private recipe: Recipe;
  static parameters = [ActivatedRoute, RecipeService, BsModalService, HttpClient];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private modalService: BsModalService, private httpClient) {
    this.route = route;
    this.modalService = modalService;
    this.recipeService = recipeService;
    this.httpClient = httpClient;
}

  public editRecipe(recipe: Recipe) {
    const initialState = {
      recipe
    }
    const modalRef = this.modalService.show(UpdateRecipeComponent, {initialState});
    modalRef.content.updatedRecipe.subscribe(() => {
      this.recipeService.updateRecipe(recipe)
        .then(updatedUser => {
          modalRef.content.formInfo = 'Recipe updated!';
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  public makeReview(recipeID: string) {
    const modalRef = this.modalService.show(CreateReviewComponent);
    modalRef.content.createdReview.subscribe((review) => {
      this.recipeService.createReview(review, recipeID)
        .then(createdReview => {
          modalRef.content.formInfo = `Review created!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeService.getRecipeById(params.id)
        .then(recipe => {
          this.recipe = recipe;
        });
    });
  }
}

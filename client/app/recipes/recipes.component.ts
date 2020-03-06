import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../components/interfaces/Recipe';
import {RecipeService} from '../../components/services/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'recipes',
  template: require('./recipes.html'),
  styles: [require('./recipes.scss')],
})

export class RecipesComponent implements OnInit {
  private recipe: Recipe;
  static parameters = [ActivatedRoute, RecipeService];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private modalService:BsModalService) {
    this.route = route;
    this.recipeService = recipeService;
}

  public editRecipe(recipe: Recipe) {
    const initialState = {
      recipe
    }
    const modalRef = this.modalService.show(UpdateUseComponent, {initialState});
    modalRef.content.updatedUser.subscribe(() => {
      this.userService.updateUser(user)
        .then(updatedUser => {
          modalRef.content.formInfo = `User ${updatedUser._id} updated!`;
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

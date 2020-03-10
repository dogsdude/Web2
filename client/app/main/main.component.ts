import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from "../../components/services/recipe.service";
import {Recipe} from '../../components/interfaces/Recipe';
import {CreateRecipeComponent} from '../../components/modals/create-recipe.component';
import {BsModalService} from 'ngx-bootstrap';
import {Recipes} from "../../components/interfaces/Recipes";
import {User} from "../../components/interfaces/User";
import {CreateUserComponent} from "../../components/modals/create-user.component";

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

  private recipes: Recipe[];
  private  users: User[];
  private input: string;
  static parameters = [HttpClient, RecipeService, BsModalService];

  constructor(private http: HttpClient, private recipeService: RecipeService, private modalService: BsModalService) {
    this.http = http;
    this.recipeService = recipeService;
    this.modalService = modalService;
    this.getRecipes();
    this.getUsers();
  }

  public getRecipes() {
    this.recipeService.getAllRecipes()
      .then(response => {
        this.recipes = response.recipes as Recipe[];
        console.log(this.recipes);
      })
      .catch(this.handleError);
  }

  public getUsers() {
    this.recipeService.getAllUsers()
      .then(response => {
        this.users = response.users as User[];
        console.log(this.users);
      })
      .catch(this.handleError);
  }

  public makeRecipe() {
    const modalRef = this.modalService.show(CreateRecipeComponent);
    modalRef.content.createdRecipe.subscribe((recipe) => {
      this.recipeService.createRecipe(recipe)
        .then(createdRecipe => {
          modalRef.content.formInfo = 'Recipe added!';
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  public makeUser() {
    const modalRef = this.modalService.show(CreateUserComponent);
    modalRef.content.createdUser.subscribe((user) => {
      this.recipeService.createUser(user)
        .then(createdRecipe => {
          modalRef.content.formInfo = 'User created!';
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }
}

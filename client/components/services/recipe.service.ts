import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Recipe} from "../interfaces/Recipe";
@Injectable()
export class RecipeService {
  static parameters = [HttpClient];
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  createRecipe(recipe : Recipe): Promise<Recipe> {
    return this.httpClient
      .post<Recipe>('/api/recipes', recipe)
      .toPromise();
  }
  getRecipeById(recipeId): Promise<Recipe> {
    return this.httpClient
      .get<Recipe>(`/api/recipes/${recipeId}`)
      .toPromise();
  }
  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .put<Recipe>(`/api/recipes/${recipe._id}`, recipe)
      .toPromise();
  }

  deleteRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .delete<Recipe>(`/api/recipe/${recipe._id}`)
      .toPromise();
  }
}

import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Recipe} from "../interfaces/Recipe";
import {Recipes} from "../interfaces/Recipes";
import {Review} from "../interfaces/Review";
import {Reviews} from "../interfaces/Reviews";

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

  getAllRecipes(): Promise<Recipes> {
    return this.httpClient
      .get<Recipes>('/api/recipes/')
      .toPromise();
  }
  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .put<Recipe>(`/api/recipes/${recipe._id}`, recipe)
      .toPromise();
  }

  deleteRecipe(recipe: Recipe): Promise<Recipe> {
    return this.httpClient
      .delete<Recipe>(`/api/recipes/${recipe._id}`)
      .toPromise();
  }

  createReview(review : Review): Promise<Review> {
    return this.httpClient
      .post<Review>('/api/reviews', review)
      .toPromise();
  }

  getAllReviews(): Promise<Reviews> {
    return this.httpClient
      .get<Reviews>('/api/reviews/')
      .toPromise();
  }

  updateReview(review: Review): Promise<Review> {
    return this.httpClient
      .put<Review>(`/api/reviews/${review._id}`, review)
      .toPromise();
  }


  deleteReview(review: Review): Promise<Review> {
    return this.httpClient
      .delete<Review>(`/api/reviews/${review._id}`)
      .toPromise();
  }

}

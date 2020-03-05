import { User } from "./User";
import { Review } from "./Review"

export interface Recipe {
  _id: string;
  __v: number;
  name: string;
  description: string;
  img_url: string;
  prep_time: number;
  cook_time: number;
  directions: string[];
  ingredients: {ingredient_name: string}[];
  user_reviews: Review[];
}

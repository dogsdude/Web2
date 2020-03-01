import {User} from "./User";
export interface Review {
  review_desc: string;
  review_rating: number;
  date: Date;
  user: User;
}

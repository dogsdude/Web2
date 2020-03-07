import {User} from "./User";
export interface Review {
  _id:string,
  review_desc: string;
  review_rating: number;
  date: Date;
  by_user: User;
}

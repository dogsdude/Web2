import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../interfaces/User';
import { Recipe } from '../interfaces/Recipe';
import { Review} from "../interfaces/Review";

@Component({
  selector: 'create-review',
  template: require('./create-review.html')
})
export class CreateReviewComponent {
  @Input()
  formError: String;
  @Input()
  formInfo: String;
  @Output()
  private review: Review = {
  review_desc: undefined,
  review_rating: undefined,
  date: undefined,
  user: undefined
}

  createdRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  createReview() {
    this.createdReview.emit(this.review);
  }
}

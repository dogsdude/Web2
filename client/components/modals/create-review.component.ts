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
    _id: undefined,
    review_desc: undefined,
    review_rating: undefined,
    date: undefined,
    by_user: undefined
  };

  createdReview: EventEmitter<Review> = new EventEmitter<Review>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  createReview() {
    this.createdReview.emit(this.review);
  }
}

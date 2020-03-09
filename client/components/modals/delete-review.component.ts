import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Review } from '../interfaces/Review';
import { BasicComponent } from "./BasicRating";

@Component({
  selector: 'delete-review',
  template: require('./delete-review.html')
})
export class DeleteReviewComponent {
  @Input()
  review: Review;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  deletedReview: EventEmitter<Review> = new EventEmitter<Review>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  deleteReview() {
    this.deletedReview.emit(this.review);
    this.bsModalRef.hide();
  }

}



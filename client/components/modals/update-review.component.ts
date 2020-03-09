import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { Review } from '../interfaces/Review';
import { BasicComponent } from "./BasicRating";
import {RecipeService} from "../services/recipe.service";
import {DeleteReviewComponent} from "./delete-review.component";

@Component({
  selector: 'update-review',
  template: require('./update-review.html')
})
export class UpdateReviewComponent {
  @Input()
  review: Review;

  @Input()
  formError: String;

  @Input()
  formInfo: String;

  @Output()
  updatedReview: EventEmitter<Review> = new EventEmitter<Review>();

  static parameters = [BsModalRef, RecipeService, BsModalService];
  constructor(public bsModalRef: BsModalRef, public recipeService: RecipeService, public modalService: BsModalService) {
    this.recipeService = recipeService;
    this.modalService = modalService;
  }

  updateReview() {
    this.updatedReview.emit(this.review);
  }

  deleteReview(review: Review){
    const modalRef = this.modalService.show(DeleteReviewComponent);
    this.recipeService.deleteReview(review)
      .then(deletedReview => {
        modalRef.content.formInfo = `Review by ${review.by_user} deleted.`
      })
      .catch(err => {
        console.log(err);
        modalRef.content.formError = err.error.message;
      });
    this.bsModalRef.hide();
  }

    max: number = 5;
    isReadonly: boolean = true;
    overStar: number | undefined;
    percent: number;

    hoveringOver(value: number): void {
      this.overStar = value;
      this.percent = (value / this.max) * 100;
    }

    resetStar(): void {
      this.overStar = void 0;
    }

}



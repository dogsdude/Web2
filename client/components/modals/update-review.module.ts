import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UpdateReviewComponent} from "./update-review.component";
import {ModalModule, RatingModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    RatingModule
  ],
  declarations: [
    UpdateReviewComponent
  ],

  exports: [
    UpdateReviewComponent,
  ],

  providers: [
  ],

  entryComponents: [
    UpdateReviewComponent
  ]
})
export class UpdateReviewModule {
}

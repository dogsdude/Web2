import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DeleteReviewComponent} from "./delete-review.component";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule
  ],
  declarations: [
    DeleteReviewComponent
  ],

  exports: [
    DeleteReviewComponent,
  ],

  providers: [
  ],

  entryComponents: [
    DeleteReviewComponent,
  ]
})
export class DeleteReviewModule {
}

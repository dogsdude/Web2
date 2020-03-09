import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DeleteRecipeComponent} from "./delete-recipe.component";
import {ModalModule} from "ngx-bootstrap";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    RouterModule
  ],
  declarations: [
    DeleteRecipeComponent
  ],

  exports: [
    DeleteRecipeComponent,
  ],

  providers: [
  ],

  entryComponents: [
    DeleteRecipeComponent,
  ]
})
export class DeleteRecipeModule {
}

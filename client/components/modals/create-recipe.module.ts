import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CreateRecipeComponent} from './create-recipe.component';
import {ModalModule} from 'ngx-bootstrap';
@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CreateRecipeComponent
  ],
  exports: [
    CreateRecipeComponent,
  ],
  providers: [
  ],
  entryComponents: [
    CreateRecipeComponent,
  ]
})
export class CreateRecipeModule {
}

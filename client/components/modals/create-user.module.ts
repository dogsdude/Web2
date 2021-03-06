import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CreateUserComponent} from './create-user.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CreateUserComponent
  ],

  exports: [
    CreateUserComponent,
  ],

  providers: [
  ],

  entryComponents: [
    CreateUserComponent,
  ]
})
export class CreateUserModule {
}

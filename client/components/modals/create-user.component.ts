import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../interfaces/User';
import { Recipe } from '../interfaces/Recipe';
import { Review} from "../interfaces/Review";

@Component({
  selector: 'create-user',
  template: require('./create-user.html')
})
export class CreateUserComponent {
  @Input()
  formError: String;
  @Input()
  formInfo: String;
  @Output()
  private user: User = {
    _id: undefined,
    fullName: {
      firstName:undefined,
      middleName:undefined,
      lastName:undefined
    },
    username: undefined,
    email: undefined,

  };

  createdUser: EventEmitter<User> = new EventEmitter<User>();

  static parameters = [BsModalRef];
  constructor(public bsModalRef: BsModalRef) {}

  createUser() {
    this.createdUser.emit(this.user);
  }

}

import {Component, OnInit} from '@angular/core';
import * as sharedConfig from '../app.constants';
import {Users} from '../../components/interfaces/Users';

import {UserService} from "../../components/services/user.service";

import {ActivatedRoute} from "@angular/router";

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})
export class UsersComponent implements OnInit {

  private users: Users;
  private userService : UserService;
  // TODO What is the route?
  //private route;

  constructor() {
    // TODO What needs to be constructed?
    this.users;
    // TODO Where do UserService and ActivateRoute factor in?
    this.userService = new UserService();
  }

  ngOnInit() {
    // TODO Why is route unrecognized? What am I supposed to do with this.route.params?
    let userid = this.route.params.subscribe(params => {
      // look up a user by id
    })
  }
}

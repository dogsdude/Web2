import {Component, OnInit} from '@angular/core';
import * as sharedConfig from '../app.constants';
import {Users} from '../../components/interfaces/Users';
import {User} from "../../components/interfaces/User";
import {UsersModule} from "./users.module";
import {Routes, Route, RouterModule} from "@angular/router";

import {UserService} from "../../components/services/user.service";

import {ActivatedRoute} from "@angular/router";

import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'users',
  template: require('./users.html'),
  styles: [require('./users.scss')],
})
export class UsersComponent implements OnInit {

  //TODO what kinds of variables are necessary for Users Component?
  private users: User[];
  static parameters = [UserService, ActivatedRoute];

  //TODO determine if complete
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.userService = userService;
    this.route = route;

  }

  ngOnInit() {
    this.userService.getUserById(this.route.params.subscribe())
    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong!", error);
    return Promise.reject(error.message || error);
    }

}

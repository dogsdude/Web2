import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../components/services/user.service';
import {User} from '../../components/interfaces/User';
import {UpdateUserComponent} from '../../components/modals/update-user.component';
import {CreateUserComponent} from "../../components/modals/create-user.component";
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

  private values: string[];
  private valueToSquare: number;
  private users: User[];
  private input: string;
  static parameters = [HttpClient, UserService, BsModalService];

  constructor(private http: HttpClient, private userService: UserService, private modalService: BsModalService) {
    this.http = http;
    this.userService = userService;
    this.modalService = modalService;
    this.setData();
    this.getUserData();
  }

  private setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }

  public getUserData() {
    this.userService.getAllUsers()
      .then(response => {
        this.users = response.users as User[];
      })
      .catch(this.handleError);
  }

  public editUser(user: User) {
    const initialState = {
      user
    }
    const modalRef = this.modalService.show(UpdateUserComponent, {initialState});
    modalRef.content.updatedUser.subscribe(() => {
      this.userService.updateUser(user)
        .then(updatedUser => {
          modalRef.content.formInfo = `User ${updatedUser._id} updated!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  //TODO Implement functionality in the main Component that will, upon receiving a new User event from the modal dialog, use the User service to post the new user to your /api/users route
  // Display the new Id of the User at the top of the modal once the creation succeeds, or print the error at the top of the modal if the creation fails
  public makeUser() {
    const modalRef = this.modalService.show(CreateUserComponent);
    modalRef.content.createdUser.subscribe(() => {
      this.userService.createUser()
        .then(createdUser => {
          modalRef.content.formInfo = `User ${createdUser._id} created!`;
        })
        .catch(err => {
          console.log(err);
          modalRef.content.formError = err.error.message;
        });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }
}

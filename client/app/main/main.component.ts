import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../components/services/user.service';
import {RecipeService} from "../../components/services/recipe.service";
import {User} from '../../components/interfaces/User';
import {CreateRecipeComponent} from '../../components/modals/create-recipe.component';
import {BsModalService} from 'ngx-bootstrap';


@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [require('./main.scss')],
})
export class MainComponent implements OnInit {

  private users: User[];
  private input: string;
  static parameters = [HttpClient, UserService];

  constructor(private http: HttpClient, private userService: UserService, private recipeService: RecipeService, private modalService: BsModalService) {
    this.http = http;
    this.userService = userService;
    this.recipeService = recipeService;
    this.modalService = modalService
    this.getUserData();
  }

  public getUserData() {
    this.userService.getAllUsers()
      .then(response => {
        this.users = response.users as User[];
      })
      .catch(this.handleError);
  }
  public makeRecipe() {
    const modalRef = this.modalService.show(CreateRecipeComponent);
    modalRef.content.createdRecipe.subscribe((user) => {
      this.recipeService.createRecipe(user)
        .then(createdRecipe => {
          modalRef.content.formInfo = `User ${createdRecipe._id} created!`;
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

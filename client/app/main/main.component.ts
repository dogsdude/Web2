import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  static parameters = [HttpClient, RecipeService, BsModalService];

  constructor(private http: HttpClient, private recipeService: RecipeService, private modalService: BsModalService) {
    this.http = http;
    this.recipeService = recipeService;
    this.modalService = modalService;
    this.makeRecipe();
  }

  // public getUserData() {
  //   this.userService.getAllUsers()
  //     .then(response => {
  //       this.users = response.users as User[];
  //     })
  //     .catch(this.handleError);
  // }

  public makeRecipe() {
    console.log("what is this:" + this.modalService);
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

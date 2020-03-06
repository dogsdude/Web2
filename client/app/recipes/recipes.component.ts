
@Component({
  selector: 'recipes',
  template: require('./recipes.html'),
  styles: [require('./recipes.scss')],
})

export class RecipesComponent implements OnInit {
  private recipe: Recipe;
  static parameters = [ActivatedRoute, RecipeService];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route = route;
    this.recipeService = recipeService;
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeService.getRecipeById(params.id)
        .then(recipe => {
          this.recipe = recipe;
        });
    });
  }
}

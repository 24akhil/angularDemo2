import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  isLogin = this.authService.isAuthenticated();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      //'assets/recipe1.jpg',
      //'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      //'assets/recipe2.jpg',
       'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     // 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService,
              private authService : AuthService) {
                console.log('recipe'+this.isLogin);
               if(this.isLogin){ this.recipes.push(this.myRecipe);}
              }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]?this.recipes[index]:new Recipe(null,null,null,null);
    //return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipe( recipes : Recipe[] ){
    this.recipes = recipes;
  
    console.log(this.recipes);
    console.log('qwer');
    this.recipesChanged.next(this.recipes.slice());
  }

  myRecipe =  new Recipe('Briyani',
  'Making biryani by own?',
  'url(assets/food.png)',
  // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
 // 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  [
    new Ingredient('Rice', 2),
    new Ingredient('Quick Mix', 1)
  ])
}

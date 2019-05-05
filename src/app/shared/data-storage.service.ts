import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, catchError } from 'rxjs/operators';
import {Pipe} from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService{
    
    constructor(
                private http:Http, 
                private recipeService:RecipeService,
                private authServece : AuthService){}

    storeRecipes(){
        const token = this.authServece.getToken();
        console.log('DB:'+token);
        return this.http.put('https://ng-recipe-book-3b503.firebaseio.com/recipes.json?auth='+token,
                this.recipeService.getRecipes());
    }

    
    getRecipe(){
       
        const token = this.authServece.getToken();
        console.log('DB:'+token);            
         this.http.get('https://ng-recipe-book-3b503.firebaseio.com/recipes.json?auth='+token)
               .pipe(map(
                   (response : Response)=>{
                    const recipes: Recipe[] = response.json();
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
                            recipe['ingredients']=[];   
                        }
                    }
                    return recipes;
               })
               )
               .subscribe(
                (recipes : Recipe[])=>{
                    this.recipeService.setRecipe(recipes);
                }
                );
             // console.log(token)  ;
    }

} /**
.subscribe(
     (response => {
        const recipes: Recipe[] = response;
        this.recipeService.setRecipes(recipes);
    }));
*/
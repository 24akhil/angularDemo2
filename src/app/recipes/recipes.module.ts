import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "../shared/dropdown.directive";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoadingScreenComponent } from "../ui/loading-screen/loading-screen.component";

@NgModule({
    declarations :[
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        LoadingScreenComponent        
        
    ],
    imports :[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,                
    ]
})
export class RecipesModule{}
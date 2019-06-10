import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path:'recipes', loadChildren :'./recipes/recipes.module#RecipesModule'},
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent, canActivate : [AuthGuard] },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent, canActivate : [AuthGuard] },~
  // ] },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate : [AuthGuard] },
  // { path: 'signin', component: SigninComponent },
  // { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy : PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

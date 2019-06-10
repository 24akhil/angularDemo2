import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TokenInterceptor } from './token-interceptor';
//import { ShoppingTableComponent } from './shopping-list/shopping-table/shopping-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,    
    //ShoppingTableComponent,        
   // HeaderComponent,
    //HomeComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // DropdownDirective,   
    // SignupComponent,
    // SigninComponent,  
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    HttpModule,    
    HttpClientModule,
    //RecipesModule,    
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule    
  ],
  providers: [
    TokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }

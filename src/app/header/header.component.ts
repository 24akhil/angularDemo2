import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStoreService : DataStorageService,
              private authService : AuthService){}

  onSaveData(){
   this.dataStoreService.storeRecipes()
        .subscribe(
          (response : Response)=>{console.log(response)}
        );
  }

  onFetchData(){
    this.dataStoreService.getRecipe();
  }

  onLogout(){
    this.authService.logout();
  }

  isLogin(){
    return this.authService.isAuthenticated();
  }
}

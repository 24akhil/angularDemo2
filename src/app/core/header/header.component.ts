import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStoreService : DataStorageService,
              private authService : AuthService){
                console.log(this.authService.isAuthenticated());
              }

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
    //console.log("logout:"+this.authService.isAuthenticated())
  }

  checkLogin(){
   // console.log("chkLogin"+this.authService.isAuthenticated());
    return this.authService.isAuthenticated();
    }
}

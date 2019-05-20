import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading: boolean = false;
  loadingStatus : Subject<any> = new Subject<any>();

  get loading():boolean {
    //console.log("get load");
    return this._loading;    
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(this._loading);
   // console.log("set load");
  }

  startLoading() {
    this.loading = true;
    //console.log("start load");
  }

  stopLoading() {
    this.loading = false;
   // console.log("stop load");
  }
}
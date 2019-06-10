import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { LoadingScreenService } from './ui/loading-screen/loading-screen.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  activeRequests: number = 0;

  
  constructor(
    private authServece : AuthService,
    private loadingScreenService : LoadingScreenService
  ) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authServece.getToken();
    console.log('jai mata di!');
    const apiReq = req.clone({ 
      url: req.url,
      params : new HttpParams().set('auth',token)});//+'?auth='+token 
      
    if(this.activeRequests===0){     
      this.loadingScreenService.startLoading();
    }
    this.activeRequests++;
    return next.handle(apiReq).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
           this.delay(2000);
          this.loadingScreenService.stopLoading();
        }
      }));
    
  }
    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

}

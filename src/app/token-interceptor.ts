import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { finalize } from 'rxjs/operators';
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
    const apiReq = req.clone({ url: req.url+'?auth='+token });
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

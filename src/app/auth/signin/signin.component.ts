import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  
  message ='Server Says : ';
  subscription : Subscription;
  //@ViewChild('f') signupForm : NgForm;

  constructor(private authService : AuthService) { 
    this.subscription =  this.authService.errorSubject.subscribe(message=>{this.message+=message.message});
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSignin(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
    this.authService.signInUser(email,password);
  }

  
}

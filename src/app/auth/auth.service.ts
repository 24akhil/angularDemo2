import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    token ='';

    constructor(private router : Router){}

    signUpUser(email : string, password:string){
        console.log("qwe");
        firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(
                        error=>console.log('FirebaseError'+ error));
    }

    signInUser(email:string, password : string){
        console.log("signin qwe"+email+":"+password);
        firebase.auth().signInWithEmailAndPassword(email,password)
                    .then(
                        response=>{
                        this.router.navigate(['/']);    
                        firebase.auth().currentUser.getIdToken()
                                .then(
                                    (token:string)=>{
                                        this.token = token;
                                    }
                                );}
                    )
                    .catch(
                        error=>console.log(error)
                    );
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }
    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=>{
                this.token = token;
            }
        );
        return this.token;
    }

    isAuthenticated(){
        //console.log("Token : "+this.token);
        return this.token!=null;
       // return false;
    }
}
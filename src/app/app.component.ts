import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey:'AIzaSyBm5iEOjaiXVHLoXI5zd3CfDrKH-ixN7tc',
      authDomain:'ng-recipe-book-3b503.firebaseapp.com'
    })  
  }

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { ProfilesPageModule } from './pages/profiles/profiles.module';
import { ModelPageModule } from './pages/model/model.module';
import { CommonModule } from '@angular/common';  


var firebaseConfig = {
  apiKey: "AIzaSyDxB_DkempfeYitUSydU4rmbKSS8RXglno",
  authDomain: "synergic-app.firebaseapp.com",
  databaseURL: "https://synergic-app.firebaseio.com",
  projectId: "synergic-app",
  storageBucket: "synergic-app.appspot.com",
  messagingSenderId: "65487277177",
  appId: "1:65487277177:web:15e865dbd5be2d3e1918a8",
  measurementId: "G-4316EVE5PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ProfilesPageModule, ModelPageModule,CommonModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

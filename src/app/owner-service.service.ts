import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { from } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  firebase: any;
  auth = firebase.auth();
  arr = [];
  resArr = new Array()
  resProfArray = new Array()
  UID:any;
  constructor(private router: Router) { }
  
  signAuth(){
    return firebase.auth().onAuthStateChanged(user => {
     if(user){
      const uid = user.uid;
      //  this.setSession(email);
      this.setuid(uid)
      console.log('user logged in: ', user);
     }else{
       console.log('user logged out')
     }
    });
  }
   setuid(a){
    this.UID = a;
  }
  getUid(){
    return this.UID;
  }
   reserve() {
    return firebase.firestore().collection('CoWorking-Space');
  }
  //   gallery() {
  //   return firebase.firestore().doc('space');
  // }
}

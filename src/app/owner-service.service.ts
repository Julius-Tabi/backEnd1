import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
  db = firebase.firestore()
  array:Array<any>=[];
  firebase: any;
  auth = firebase.auth();
  arr = [];
  resArr = new Array()
  resProfArray = new Array()
  UID: any;
  constructor(private router: Router) { }

  signAuth() {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        //  this.setSession(email);
        this.setuid(uid)
        console.log('user logged in: ', user);
      } else {
        console.log('user logged out')
      }
    });
  }
  setuid(a) {
    this.UID = a;
  }
  getUid() {
    return this.UID;
  }
  reserve() {
    return firebase.firestore().collection('CoWorking-Space');
  }
  //   gallery() {
  //   return firebase.firestore().doc('space');
  // }

  updateProfile(user_uid, uid, company_tel, company_address,
    company_website, social_media, company_emaile,
    company_name, img_profile, outside_features, aboutus) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(user_uid)
        .set({
          company_address: company_address,
          company_tel: company_tel,
          company_website: company_website,
          social_media: social_media,
          company_emaile: company_emaile,
          company_name: company_name,
          uid: uid,
          user_uid: user_uid,
          img_profile: img_profile,
          outside_features: outside_features,
          aboutus: aboutus
        }, { merge: true }).then(a => {
          console.log("Changed")
        })
    ]);
  }


  reservation(uid, name, surname, phone, checkin, checkout, timein, timeout, spaceBooked, usertype) {
    var citiesRef = firebase.firestore().collection('profiles')
    var hotel = Promise.all([
      citiesRef.doc("8j3w4lEbm3OBxgQYVNGQmN1YU292").collection("bookings").add({
        name: name,
        surname: surname,
        phone: phone,
        checkin: checkin,
        checkout: checkout,
        timein: timein,
        timeout: timeout,
        spaceBooked: spaceBooked,
        usertype: usertype,
        date: new Date()
      }).then((res) => {

      })
    ]);
  }

}

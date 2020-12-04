import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInSignUpService {

  db = firebase.firestore()
  uidOwner: any
  emailOwner: any;
  email: any;
  uid: any;
  // UID:any;
  status: boolean;
  group: any

  constructor(private router: Router, public route: ActivatedRoute) { }
  // async createAccount(email, password) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password).then(results => {
  //     console.log(results);
  //   }).catch((error) => {
  //     console.log(error.message);
  //   })
  // }

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
    this.uid = a;
  }
  getUid(){
    return this.uid;
  }
  Signup(email, password) {

    return firebase.auth().createUserWithEmailAndPassword(email, password)

  }

  async SignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(results => {
      console.log(results);
      var user = firebase.auth().currentUser;
      var email, uid;
      if (user != null) {
        email = user.email;
        uid = user.uid;
        this.userSession(uid);
        this.checkExistance(this.getUserSession())

        console.log("details: " + email + ' ' + this.getUserSession())
      }
      // this.router.navigateByUrl('booking-list');
    }).catch((error) => {
      console.log(error.message);
    })
  }
  userSession(uidOwner) {
    this.uidOwner = uidOwner;
  }
  userEmail(emailOwner) {
    this.emailOwner = emailOwner;
  }

  getUserSession() {
    return this.uidOwner;
  }
  getEmail() {
    return this.emailOwner;
  }

  userGroup(uid, usergroup, email) {
    var db = firebase.firestore();
    var userGroupCollecion = db.collection("profiles");
    var query = Promise.all([
      userGroupCollecion.doc(uid).collection('profile').doc().set({
        company_name: "company name",
        // company_emaile: email,
        company_tel: "company telephone",
        company_website: "www.webste.com",
        social_media: "social media links",
        company_address: "address",
        usergroup: usergroup,
        uid: uid,
        date: new Date()
      })
    ]);
  }


  checkExistance(uid) {



    // this.db.collection("profile").where("uid","==",uid).get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });




    //    this.db.collection('profile').doc('lXXtivYnA7Qui9xy3RR9uzOpBCK2').get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // })



    // var museums = this.db.collection("profile").where("uid", "==", "lXXtivYnA7Qui9xy3RR9uzOpBCK2");

    // museums.get().then(function(doc) {
    //     if (!doc.empty) {
    //         console.log("Document data:", doc[0].data());
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });
    // lXXtivYnA7Qui9xy3RR9uzOpBCK2


    // var doc =  this.db.collection('profile').doc('lXXtivYnA7Qui9xy3RR9uzOpBCK2');
    // doc.get().then((docData) => {
    //   if (docData.exists) {
    //     // document exists (online/offline)
    //     console.log("Document data:", docData.data());
    //   } else {
    //     // document does not exist (only on online)
    //     console.log("No such document!");
    //   }
    // }).catch((fail) => {
    //   // Either
    //   // 1. failed to read due to some reason such as permission denied ( online )
    //   // 2. failed because document does not exists on local storage ( offline )
    // });

    // var museums = this.db.collection("profiles")
    // .get()
    // .then(snap => {
    //     snap.forEach(doc => {
    //         console.log(doc.data());
    //         console.log(doc.id);
    //     });
    // });

    // this.db.collection("profiles")
    // .doc("lXXtivYnA7Qui9xy3RR9uzOpBCK2")
    // .collection("profile")
    // .get()
    // .then(snap => {
    //     snap.forEach(doc => {
    //         console.log(doc.data());
    //     });
    // });

    // this.db.collectionGroup("profile")
    // .where("uid", "==",(uid))
    // // .where("publishedAt", "<=", new Date("2018-12-31 23:59"))
    // .get()
    // .then(snap => {
    //     snap.forEach(doc => {
    //       if (doc.exists) {


    //         //  }
    //         console.log("Document data:", doc.data().usergroup);
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    //         // console.log(doc.data());
    //     });
    // });

    // this.db.collectionGroup("profile")
    //   .where("uid", "==", (uid))
    //   // .where("publishedAt", "<=", new Date("2018-12-31 23:59"))
    //   .get()
    //   .then(snap => {
    //     snap.forEach(doc => {
    //       if (!doc.exists) {
    //         console.log("No such user in the profiles Document!");   
    //       } else
    //       { 
    //         // doc.data() will be undefined in this case

    //         if (doc.data().usergroup === 'user') {
    //           console.log("User")
    //           console.log("Document data:", doc.data());
    //         } else
    //           if (doc.data().usergroup === 'owner') {
    //             console.log("Owner")
    //             console.log("Document data:", doc.data());
    //           }
    //         else
    //             {
    //             console.log("Create profile please")
    //           }
    //         }
    //       // console.log(doc.data());
    //     });
    //   });
    this.db.collectionGroup("profile")
      .where("uid", "==", (uid))
      // .where("publishedAt", "<=", new Date("2018-12-31 23:59"))
      .get()
      .then(snap => {
        snap.forEach(doc => {
          if (!doc.exists) {
            console.log("No such user in the profiles Document!");
          } 
          if(doc.exists){
        
            if (doc.data().usergroup == 'user') {
              console.log("User")
              this.status = true;            
              console.log("Document data:", doc.data());
              this.router.navigateByUrl('profile');
            } else
              if (doc.data().usergroup == 'owner') {
                console.log("Owner")
                this.status = true;
                console.log("Document data:", doc.data());
                this.router.navigateByUrl('owner-home');
              }
        
          }
     
        });
        if (this.status != true){
          // console.log(this.status)
          console.log("Create profile please")
          this.router.navigateByUrl('/user-group');
        }
      });
      
      
      
  }
  setStatus(x) {
    this.status = x;
  }
  returnStatus() {
    return this.status
  }
}

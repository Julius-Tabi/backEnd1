import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  modalTitle: string;
  modelId: number;
  array:any=[]
  userid: any;
  constructor(
    public userservice:SignInSignUpService
  ) {
    firebase.firestore().collectionGroup("profile").where("uid","==",this.userservice.  getUserSession())
    .get()
    .then(snap => {
      snap.forEach(doc => {
      this.array.push(Object.assign(doc.data()) )
      console.log("ffffffff"+this.array)
            });
    });
   }
  ngOnInit() {
    
  }

}

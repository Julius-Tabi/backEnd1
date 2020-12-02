import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerServiceService } from '../../owner-service.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


import { PopoverController } from '@ionic/angular';
// import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { UserServiceService } from '../../user-service.service';
import { ModelPage } from '../model/model.page';



@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  //////////////
  dataReturned: any;
  ////////////////
  array:any=[]
  constructor(  public modalController: ModalController,public objPopUp:UserServiceService, private popover:PopoverController,private formBuilder:FormBuilder,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    firebase.firestore().collectionGroup("profile")
    .get()
    .then(snap => {
      snap.forEach(doc => {
      this.array.push(Object.assign(doc.data(),{"profile_uid":doc.id}) )
      console.log(this.array)
            });
    });
  }

  //////////////Model Popup/////////////////
  async openModal(x) {
    this.objPopUp.myUserId(x);
    const modal = await this.modalController.create({
      component: ModelPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }
  //////////////////////////////


 
 //////////POPOVER////////////
  
   //////////////////////

  ngOnInit() {
  }
}
 






















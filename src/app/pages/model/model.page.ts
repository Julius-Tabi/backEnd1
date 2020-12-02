import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerServiceService } from '../../owner-service.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


import { ModalController } from '@ionic/angular';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit {

  modalTitle: string;
  modelId: number;
  array:any=[]
  userid: any;
  constructor(
    public userservice:UserServiceService,
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    firebase.firestore().collectionGroup("profile").where("uid","==",this.userservice.returnX())
    .get()
    .then(snap => {
      snap.forEach(doc => {
      this.array.push(Object.assign(doc.data()) )
      console.log("ffffffff"+this.array)
            });
    });
   }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}

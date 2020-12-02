import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import {OwnerServiceService} from '../../owner-service.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.page.html',
  styleUrls: ['./walkin.page.scss'],
})
export class WalkinPage implements OnInit {
  constructor(public account:SignInSignUpService,public ownerservice:OwnerServiceService,private formBuilder:FormBuilder) { 
  }


  walkinForm = this.formBuilder.group({
    usersname:[''],
    surname: [''],
    phone: [''],
    timein: [''],
    timeout: [''],
    checkin: [''],
    checkout: [''],
    spaceBooked:['']
});

get usersname() {
  return this.walkinForm.get("usersname");
}
get surname() {
  return this.walkinForm.get("surname");
}
get phone() {
  return this.walkinForm.get("phone");
}
get timein() {
  return this.walkinForm.get("timein");
}
get timeout() {
  return this.walkinForm.get("timeout");
}
get checkin() {
  return this.walkinForm.get("checkin");
}
get checkout() {
  return this.walkinForm.get("checkout");
}

spaceBooked() {
  return this.walkinForm.get("spaceBooked");
}

public errorMessages = {
  usersname: [
    { type: 'required', message: 'usersname is required' }
  ],
  surname: [
    { type: 'required', message: 'surname is required' }
  ],
  phone: [ 
    { type: 'required', message: 'phone is required' }
  ],
  timein:[
    { type: 'required', message: 'company_tel is required' }
  ],
  timeout:[
    { type: 'required', message: 'company_website is required' }
  ],
  checkin:[
    { type: 'required', message: 'social_media is required' }
  ]
  ,
  checkout:[
    { type: 'required', message: 'company_emaile is required' }
  ]  ,
  spaceBooked:[
    { type: 'required', message: 'spaceBooked is required' }
  ]

};

submit() {
  console.log(this.walkinForm.value)
  this.ownerservice.reservation(this.account.getUserSession(),this.walkinForm.value.usersname,this.walkinForm.value.surname,this.walkinForm.value.phone,
              this.walkinForm.value.checkin,this.walkinForm.value.checkout,
              this.walkinForm.value.timein ,this.walkinForm.value.timeout,this.walkinForm.value.spaceBooked,"walkin")
   
}

  ngOnInit() {
  }
}

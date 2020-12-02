import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignInSignUpService } from '../../sign-in-sign-up.service';
import { OwnerServiceService } from '../../owner-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  
  constructor(public account:SignInSignUpService,public ownerservice:OwnerServiceService,private formBuilder:FormBuilder) { 
  }


  walkinForm = this.formBuilder.group({
    timein:[''],
    timeout: [''],
    checkin: [''],
    checkout: ['']
});




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



public errorMessages = {

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
  ]
};

submit() {
  console.log(this.walkinForm.value)
  this.ownerservice.reservation("useruid[sdkjasdjaksdkajsdhjsd]","************","*********","**************",
              this.walkinForm.value.checkin,this.walkinForm.value.checkout,
              this.walkinForm.value.timein ,this.walkinForm.value.timeout,"small office","account")
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, } from '@angular/forms';
import { Data, Router } from '@angular/router';
// import { FbserviceService } from 'src/app/services/fbservice.service';
import { OwnerServiceService} from '../../owner-service.service';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-upload-space',
  templateUrl: './upload-space.page.html',
  styleUrls: ['./upload-space.page.scss'],
})
export class UploadSpacePage implements OnInit {

//  downloadurl: null;
CurrentPerson = new Array();
currentUSerKey
AddSpace: FormGroup
uid: any
SpaceId:any;
constructor(private formBuilder: FormBuilder, private ownerservice: OwnerServiceService, private router: Router, public nav: NavController,
  public loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  get categoryNo() {
  return this.AddSpace.get("categoryNo");
 }
 get category() {
  return this.AddSpace.get("category");
 }
get street() {
  return this.AddSpace.get('street');
}
get city() {
  return this.AddSpace.get('city');
}
get province() {
  return this.AddSpace.get('province');
}
get zip() {
  return this.AddSpace.get('zip');
}

public errorMessages = {
  category: [
    { type: 'required', message: 'Dish Name is required' },
   
  ],
   categoryNo: [
    { type: 'required', message: 'category No is required' },
   
  ],

  street: [
    { type: 'required', message: 'Street name is required' },
    {
      type: 'maxlength',
      message: 'Street name cant be longer than 100 characters'
    }
  ],
  city: [
    { type: 'required', message: 'City name is required' },
    {
      type: 'maxlength',
      message: 'City name cant be longer than 100 characters'
    }
  ],
  province: [
    { type: 'required', message: 'Province is required' },
    {
      type: 'maxlength',
      message: 'Province cant be longer than 100 characters'
    }
  ],
  zip: [
    { type: 'required', message: 'Zip code is required' },
    {
      type: 'pattern',
      message: 'Please enter a valid zip code'
    }
  ]

};

AddDish() {
  this.AddSpace = this.formBuilder.group({
    category: ['', [Validators.required]],
    categoryNo: ['', [Validators.required]],
    street: ['', [Validators.required, Validators.maxLength(100)]],
    city: ['', [Validators.required, Validators.maxLength(100)]],
    province: ['', [Validators.required, Validators.maxLength(100)]],
    zip: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
    ]
 
  });
}

ngOnInit() {
  this.AddDish()
}
async submit() {
  const loading = await this.loadingCtrl.create();
  var user = firebase.auth().currentUser
  this.uid = user.uid;
  // Adding new menu
  console.log(this.AddSpace.value)
  this.ownerservice.reserve().doc(this.uid).collection('space').add({
    uid: this.uid,
    category: this.AddSpace.value.category,
     No_of_Space: this.AddSpace.value.categoryNo,
     Street_Address: this.AddSpace.value.street,
     City_Address: this.AddSpace.value.city,
     Province_Address: this.AddSpace.value.province,
     Zip_Code_Address: this.AddSpace.value.zip
  }).then((doc)=>{

    doc.set({SpaceId: doc.id},{merge:true}).then(()=>{
      console.log(this.SpaceId)
    })
  })
  .then(() => {
    loading.dismiss().then(() => {
      // this.router.navigateByUrl('/rest-home')
      this.AddSpace.reset();
    });
  },
    error => {
      loading.dismiss().then(() => {
        console.log(error);
      });
    }
  );
  return await loading.present();
}
onClick(check) {
 console.log(check)
}
}

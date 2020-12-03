import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, } from '@angular/forms';
import { Data, Router, ActivatedRoute } from '@angular/router';
// import { FbserviceService } from 'src/app/services/fbservice.service';
import { OwnerServiceService} from '../../owner-service.service';
import {SignInSignUpService} from '../../sign-in-sign-up.service';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { AlertController, NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-update-space',
  templateUrl: './update-space.page.html',
  styleUrls: ['./update-space.page.scss'],
})
export class UpdateSpacePage implements OnInit {

  CurrentPerson = new Array();
  currentUSerKey
  AddSpace: FormGroup
  uid: any;
  workingspace:any;
  profOwner: any;
  userId: string;
  SpaceId:any;
  space:any;
  db = firebase.firestore()
  company_name: any;
  constructor(private formBuilder: FormBuilder, private ownerservice: OwnerServiceService, private router: Router, public nav: NavController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController, private route:ActivatedRoute, private signinsignup: SignInSignUpService) { }

  get categoryNo() {
    return this.AddSpace.get("categoryNo");
   }
  //  get category() {
  //   return this.AddSpace.get("category");
  //  }
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
    // category: [
    //   { type: 'required', message: 'Dish Name is required' },
     
    // ],
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
      // category: ['', [Validators.required]],
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
    // this.uid = this.route.snapshot.paramMap.get('uid')
    // console.log('ID: ', this.uid)
    // this.signinsignup.signAuth();
    // let user = firebase.auth().currentUser.uid;
    // console.log('profile: ', user)
    // // fetching single company profile by it's id and set the values
    // firebase.firestore().collection('space').doc(user).get().then(snapshot => {
    //   this.workingspace = snapshot.data()
    //   console.log('New co-working space details: ', this.workingspace)
    //   // this.AddSpace.controls['category'].setValue(this.workingspace.category),
    //   this.AddSpace.controls['No_of_Space'].setValue(this.workingspace.categoryNo),
    //   this.AddSpace.controls['Street_Address'].setValue(this.workingspace.street),
    //   this.AddSpace.controls['City_Address'].setValue(this.workingspace.city),
    //   this.AddSpace.controls['Province_Address'].setValue(this.workingspace.province),
    //   this.AddSpace.controls['Zip_Code_Address'].setValue(this.workingspace.zip)
    // });
    // this.AddDish();
    // Fetching owner details from firebase
    // firebase.firestore().collection('eventOwners').doc(user).get().then(snap => {
    //   this.profOwner = snap.data();
    //   console.log('Event Owner: ', this.profOwner)
    // })
    // console.log(user);
    // this.signinsignup.signAuth();
    let user = firebase.auth().currentUser.uid;
    this.db.collection("CoWorking-Space")
    .doc(user)
    .collection("space")
    .get()
    .then(snap => {
        snap.forEach(doc => {


            console.log(doc.data());
        });
    });
//  this.signinsignup.signAuth();
 
// let user = firebase.auth().currentUser.uid;
// this.db.collection("CoWorking-Space")
// .doc(user)
// .collection("space")
// .doc()
// .get()
// .then(snap => {
//   this.SpaceId = snap.get('SpaceId');
//   console.log(this.SpaceId)
//     console.log(snap.data());
// });

// let user = firebase.auth().currentUser.uid;
// this.db.collection("CoWorking-Space")
// this.uid = this.route.snapshot.paramMap.get('uid')
// console.log('ID: ', this.uid)
// fetching single events
// firebase.firestore().collection('space').doc(user).get().then(snapshot => {
  // this.space = snapshot.data();
  // this.SpaceId = snapshot.get('SpaceId');
  // this.category = snapshot.get('category');
  // this.No_of_Space = snapshot.get('No_of_Space');
  // this.Street_Address = snapshot.get('Street_Address');
  // this.Province_Address = snapshot.get('Province_Address');
  // this.Zip_Code_Address = snapshot.get('Zip_Code_Address');
  // company_emaile: email,
  // uid: this.uid,
  //             // category: this.AddSpace.value.category,
  //              No_of_Space: this.AddSpace.value.categoryNo,
  //              Street_Address: this.AddSpace.value.street,
  //              City_Address: this.AddSpace.value.city,
  //              Province_Address: this.AddSpace.value.province,
  //              Zip_Code_Address: this.AddSpace.value.zip
  // console.log('SpaceId: ', this.SpaceId)
  
// });
// this.addEventFree();
// this.addEventPaid();





    // this.signinsignup.signAuth();
    // let user = firebase.auth().currentUser.uid;
    // this.userId = user.uid;
    // console.log('user id Booked: ', user)
    // const userBookings = firebase.firestore().collectionGroup('space').where('uid', '==', user);
    // userBookings.get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     console.log('New co-working space details: ', this.workingspace)
          // this.AddSpace.controls['category'].setValue(this.workingspace.category),
          // this.AddSpace.controls['No_of_Space'].setValue(this.workingspace.categoryNo),
          // this.AddSpace.controls['Street_Address'].setValue(this.workingspace.street),
          // this.AddSpace.controls['City_Address'].setValue(this.workingspace.city),
          // this.AddSpace.controls['Province_Address'].setValue(this.workingspace.province),
          // this.AddSpace.controls['Zip_Code_Address'].setValue(this.workingspace.zip)
        // this.reservations.push(Object.assign( doc.data(), {uid:doc.id}) )
        // this.user_Id = {uid:doc.id}
        // console.log('user_idd: ', this.user_Id)
        // console.log('doc-id: ', {uid:doc.id}, '=>', 'doc-data: ', doc.data());
        // console.log('userBookings: ', this.booking)
//       })
//     })
//   }
// }
  // async submit(){
  //   const alert = await this.alertCtrl.create({
  //     message: `Your company profile is updated successfully, please click Ok to confirm.`,
  //     buttons: [
  //       {
  //         text: 'Ok',
  //         handler: () => {
  //           let user = firebase.auth().currentUser.uid
  //           firebase.firestore().collection('space').doc(user).update({
  //             uid: this.uid,
  //             // category: this.AddSpace.value.category,
  //              No_of_Space: this.AddSpace.value.categoryNo,
  //              Street_Address: this.AddSpace.value.street,
  //              City_Address: this.AddSpace.value.city,
  //              Province_Address: this.AddSpace.value.province,
  //              Zip_Code_Address: this.AddSpace.value.zip
  //           }).then(() => {
  //             this.nav.navigateRoot('/owner-home/' + this.uid)
  //           }).catch(function(error){
  //             console.log(error)
  //           });
  //         }
  //       }
  //     ]
  //   });
  //   return await alert.present();
  // }

  // async submit() {
  //   const loading = await this.loadingCtrl.create();
  //   var user = firebase.auth().currentUser
  //   this.uid = user.uid;
  //   // Adding new menu
  //   console.log(this.AddSpace.value)
  //   this.ownerservice.reserve().doc(this.uid).collection('space').add({
  //     uid: this.uid,
  //     category: this.AddSpace.value.category,
  //      No_of_Space: this.AddSpace.value.categoryNo,
  //      Street_Address: this.AddSpace.value.street,
  //      City_Address: this.AddSpace.value.city,
  //      Province_Address: this.AddSpace.value.province,
  //      Zip_Code_Address: this.AddSpace.value.zip
      

  //   }).then(() => {
  //     loading.dismiss().then(() => {
  //       // this.router.navigateByUrl('/rest-home')
  //       this.AddSpace.reset();
  //     });
  //   },
  //     error => {
  //       loading.dismiss().then(() => {
  //         console.log(error);
  //       });
  //     }
  //   );
  //   return await loading.present();
  // }
//  onClick(check) {
//    console.log(check)
//   }
}
}
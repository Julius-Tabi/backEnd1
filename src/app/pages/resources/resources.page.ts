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
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

  AddResources:FormGroup;
  uid: any
  constructor(private formBuilder: FormBuilder, private ownerservice: OwnerServiceService, private router: Router, public nav: NavController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

    Resources = [
      { name: 'wifi', isChecked: false },
      { name: 'Computer', isChecked: false },
      { name: 'Printer', isChecked: false },
      { name: 'Projector', isChecked: false },
      { name: 'flatTv', isChecked: false },
      { name: 'kitchen', isChecked: false },
      { name: 'Printer', isChecked: false },
      { name: 'gaming', isChecked: false },
      ];
    
   Animities = [
      { name: 'Parking', isChecked: false },
      { name: 'Security(24/7)', isChecked: false },
      { name: 'Chill-zone', isChecked: false },
      { name: 'Gym', isChecked: false },
      { name: 'Daycare', isChecked: false },
      { name: 'Play-Ground', isChecked: false },
      // { name: 'Printer', isChecked: false },
      // { name: 'gaming', isChecked: false },
   ];



  ngOnInit() {
    this.Addresources();
  }
  get resource() {
    return this.AddResources.get('resource');
  }
  get anemity() {
    return this.AddResources.get('anemity');
  }

  public errorMessages = {
  
    resource: [
      { type: 'required', message: 'Dish price is required' },
      
    ],
    anemity: [
      { type: 'required', message: 'Street name is required' },
     
    ],
  };
  Addresources() {
    this.AddResources = this.formBuilder.group({
      resource: [
        '',
        [
          Validators.required
        
        ]
      ],
      anemity: [
        '',
        [
          Validators.required
        
        ]
      ],
     
   
    });
  }
  async submit() {
    const loading = await this.loadingCtrl.create();
    var user = firebase.auth().currentUser
    this.uid = user.uid;
    // Adding new menu
    console.log(this.AddResources.value)
    this.ownerservice.reserve().doc(this.uid).collection('resources').add({
      uid: this.uid,
      Resources: this.Resources,
      Animities: this.Animities,
      // Anemities: this.anemities,
      

    }).then(() => {
      loading.dismiss().then(() => {
        // this.router.navigateByUrl('/rest-home')
        this.AddResources.reset();
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

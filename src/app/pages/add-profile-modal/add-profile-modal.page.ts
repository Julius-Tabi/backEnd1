import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnerServiceService } from '../../owner-service.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


import { ModalController } from '@ionic/angular';



export interface Cartoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-profile-modal',
  templateUrl: './add-profile-modal.page.html',
  styleUrls: ['./add-profile-modal.page.scss'],
})
export class AddProfileModalPage implements OnInit {

  form: FormGroup;
  array:Array<any>=[];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  useruid:any
  status:boolean = false;
  show:any
  
  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;
  
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'Tom and Jerry' },
    { id: 1, name: 'Rick and Morty' },
    { id: 2, name: 'Ben 10' },
    { id: 3, name: 'Batman: The Animated Series' }
  ];

  onChange(name: string, isChecked: boolean) {
    const cartoons = (this.updateForm.controls.name as FormArray);

    if (isChecked) {
      cartoons.push(new FormControl(name));
    } else {
      const index = cartoons.controls.findIndex(x => x.value === name);
      cartoons.removeAt(index);
    }
  }

  constructor(private formBuilder:FormBuilder,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    firebase.firestore().collectionGroup("profile")
        .where("uid", "==", this.account.getUserSession())
        .get()
        .then(snap => {
          snap.forEach(doc => {
          this.array.push(Object.assign(doc.data(),{"profile_uid":doc.id}) )
          this.useruid=doc.id
          });
        });
   }

   updateForm = this.formBuilder.group({
    company_name:[''],
    company_address: [''],
    company_tel: [''],
    company_website: [''],
    social_media: [''],
    company_emaile: [''],
    aboutus:[''],
    name: this.formBuilder.array([])
});
get aboutus() {
  return this.updateForm.get("aboutus");
}
get name() {
  return this.updateForm.get("name");
}

get company_address() {
  return this.updateForm.get("company_address");
}
get company_tel() {
  return this.updateForm.get("company_tel");
}
get company_website() {
  return this.updateForm.get("company_website");
}
get social_media() {
  return this.updateForm.get("social_media");
}
get company_emaile() {
  return this.updateForm.get("company_emaile");
}
get company_name() {
  return this.updateForm.get("company_emaile");
}


public errorMessages = {
  aboutus: [
    { type: 'required', message: 'aboutus is required' }
  ],
  name: [
    { type: 'required', message: 'name is required' }
  ],
  
  company_address: [ 
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  company_tel:[
    { type: 'required', message: 'company_tel is required' }
  ],
  company_website:[
    { type: 'required', message: 'company_website is required' }
  ],
  social_media:[
    { type: 'required', message: 'social_media is required' }
  ]
  ,
  company_emaile:[
    { type: 'required', message: 'company_emaile is required' }
  ]
  ,
  company_name:[
    { type: 'required', message: 'company_emaile is required' }
  ]
};

fileChangeEvent(fileInput: any) {
  this. imageError = null;
  if(fileInput.target.files && fileInput.target.files[0]){
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;   
      if(fileInput.target.files[0].size > max_size){
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
        return false;
      }
      if (!allowed_types.includes( fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e:any)=>{
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs=> {
            const img_height = rs.currentTarget['height'];
            const img_width = rs.currentTarget['width'];
            console.log(img_height,img_width);
            if(img_height > max_height && img_width > max_width){
              this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
              return false;
            }else{
              const imgBase64Path = e.target.result;
              this.cardImageBase64 = imgBase64Path;
              this.isImageSaved = true;
             return this.cardImageBase64;
            }
          }
        }
      reader.readAsDataURL(fileInput.target.files[0])
  }
}

 submit() {

   this.ownerservice.updateProfile(this.useruid, this.account.getUserSession(),this.updateForm.value.company_tel,this.updateForm.value.company_address,
                    this.updateForm.value.company_website,this.updateForm.value.social_media,
                    this.updateForm.value.company_emaile,this.updateForm.value.company_name,
                    this.cardImageBase64,this.updateForm.value.name,this.updateForm.value.aboutus)
     }

  ngOnInit(){

  }


}

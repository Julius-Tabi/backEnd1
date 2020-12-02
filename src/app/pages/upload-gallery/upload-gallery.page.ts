import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { from } from 'rxjs'; import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { OwnerServiceService} from '../../owner-service.service';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.page.html',
  styleUrls: ['./upload-gallery.page.scss'],
})
export class UploadGalleryPage implements OnInit {

  downloadurl: any;
  AddSpacePics: FormGroup
    // downloadurl;
  AddSpace: FormGroup
  uid: any
   ngOnInit() {
    this.Addpic()
  }
constructor(
   private formBuilder: FormBuilder,private router: Router, public nav: NavController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController, private ownerservice: OwnerServiceService 
    
  ) {
}
    get Spacepictures() {
    return this.AddSpacePics.get('Spacepictures');
    }
  
  public errorMessages = {
   

    Spacepictures: [
      { type: 'required', message: 'Dish details is required' },
      
    ],
  

  };
    Addpic() {
    this.AddSpacePics = this.formBuilder.group({
      Spacepictures: [
        '',
        [
          Validators.required
       
        ]
      ],
   
    });
  }
  addPic(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.downloadurl = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);

  }
  
  
  async submit() {
    const loading = await this.loadingCtrl.create();
    var user = firebase.auth().currentUser
    this.uid = user.uid;
    // Adding new menu
    console.log(this.AddSpacePics.value)
    this.ownerservice.reserve().doc(this.uid).collection('Gallery').add({
      uid: this.uid,
      Space_pictures: this.AddSpacePics.value.downloadurl,
   
    }).then(() => {
      loading.dismiss().then(() => {
        // this.router.navigateByUrl('/rest-home')
        this.AddSpacePics.reset();
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

  // async takePhoto() {
  //   const options: CameraOptions = {
  //     quality: 50,
  //     targetHeight: 600,
  //     targetWidth: 600,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   const result = await this.camera.getPicture(options)
  //   const image = 'data:image/jpeg;base64,${result}';
  //   const pictures = firebase.storage().ref('pictures');
  //   // pictures.putString(image, 'data_url', {contentType:’image/jpg’})
  // //   pictures.putString(image, 'data_url', {contentType:’image/jpg’}).then(() => {
  // //   console.log('Image uploaded');
  // // });
  // }                                             
  // getGallery() {
  //   this.camera.getPicture({
  //     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG
  //   }).then((res) => {
  //     console.log(res);
  //      this.imgURL.push('data:image/jpeg;base64,' + res);
  //   }).catch(e => {
  //     console.log(e);
  //   })


  // }

}

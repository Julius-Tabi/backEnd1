import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProfileModalPage } from '../add-profile-modal/add-profile-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modalCntrl:ModalController ) { }



  ngOnInit() {
  }

  cssClass:'profile-modal';
 async openmodal(){
    // console.log('open')
    const modal = await this.modalCntrl.create({
     component:AddProfileModalPage
    })
   return await modal.present()
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-profile-modal',
  templateUrl: './add-profile-modal.page.html',
  styleUrls: ['./add-profile-modal.page.scss'],
})
export class AddProfileModalPage implements OnInit {

  constructor(private modalCntrl: ModalController) { }

  ngOnInit() {
  }

async dissmismodal(){
  this.modalCntrl.dismiss()
}

}

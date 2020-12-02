import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfileModalPageRoutingModule } from './add-profile-modal-routing.module';

import { AddProfileModalPage } from './add-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfileModalPageRoutingModule
  ],
  declarations: [AddProfileModalPage]
})
export class AddProfileModalPageModule {}

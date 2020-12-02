import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProfileModalPageRoutingModule } from './add-profile-modal-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProfileModalPage } from './add-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProfileModalPageRoutingModule,
    ReactiveFormsModule,   FormsModule, ReactiveFormsModule
  ],
  declarations: [AddProfileModalPage]
})
export class AddProfileModalPageModule {}

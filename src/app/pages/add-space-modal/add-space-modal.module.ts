import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSpaceModalPageRoutingModule } from './add-space-modal-routing.module';

import { AddSpaceModalPage } from './add-space-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSpaceModalPageRoutingModule
  ],
  declarations: [AddSpaceModalPage]
})
export class AddSpaceModalPageModule {}

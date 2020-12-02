import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSpacesPageRoutingModule } from './manage-spaces-routing.module';

import { ManageSpacesPage } from './manage-spaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSpacesPageRoutingModule
  ],
  declarations: [ManageSpacesPage]
})
export class ManageSpacesPageModule {}

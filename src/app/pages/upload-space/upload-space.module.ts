import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadSpacePageRoutingModule } from './upload-space-routing.module';

import { UploadSpacePage } from './upload-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UploadSpacePageRoutingModule
  ],
  declarations: [UploadSpacePage]
})
export class UploadSpacePageModule {}

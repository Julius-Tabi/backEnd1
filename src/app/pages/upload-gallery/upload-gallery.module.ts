import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadGalleryPageRoutingModule } from './upload-gallery-routing.module';

import { UploadGalleryPage } from './upload-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UploadGalleryPageRoutingModule
  ],
  declarations: [UploadGalleryPage]
})
export class UploadGalleryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBookingsPageRoutingModule } from './new-bookings-routing.module';

import { NewBookingsPage } from './new-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBookingsPageRoutingModule
  ],
  declarations: [NewBookingsPage]
})
export class NewBookingsPageModule {}

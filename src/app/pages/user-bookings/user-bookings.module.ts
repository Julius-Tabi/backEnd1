import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBookingsPageRoutingModule } from './user-bookings-routing.module';

import { UserBookingsPage } from './user-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBookingsPageRoutingModule
  ],
  declarations: [UserBookingsPage]
})
export class UserBookingsPageModule {}

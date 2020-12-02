import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBookingsPage } from './new-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: NewBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBookingsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfileModalPage } from './add-profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddProfileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProfileModalPageRoutingModule {}

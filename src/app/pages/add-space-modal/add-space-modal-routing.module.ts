import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpaceModalPage } from './add-space-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddSpaceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpaceModalPageRoutingModule {}

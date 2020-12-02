import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSpacesPage } from './manage-spaces.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSpacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSpacesPageRoutingModule {}

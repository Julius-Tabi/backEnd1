import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadSpacePage } from './upload-space.page';

const routes: Routes = [
  {
    path: '',
    component: UploadSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadSpacePageRoutingModule {}

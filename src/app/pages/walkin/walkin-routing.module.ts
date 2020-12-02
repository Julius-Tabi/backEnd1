import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkinPage } from './walkin.page';

const routes: Routes = [
  {
    path: '',
    component: WalkinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkinPageRoutingModule {}

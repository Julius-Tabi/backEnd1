import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWorkspacePage } from './view-workspace.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWorkspacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWorkspacePageRoutingModule {}

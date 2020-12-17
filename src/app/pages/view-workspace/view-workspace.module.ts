import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWorkspacePageRoutingModule } from './view-workspace-routing.module';

import { ViewWorkspacePage } from './view-workspace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWorkspacePageRoutingModule
  ],
  declarations: [ViewWorkspacePage]
})
export class ViewWorkspacePageModule {}

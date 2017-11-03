import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvesPage } from './aves';

@NgModule({
  declarations: [
    AvesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvesPage),
  ],
})
export class AvesPageModule {}

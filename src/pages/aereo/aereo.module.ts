import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AereoPage } from './aereo';

@NgModule({
  declarations: [
    AereoPage,
  ],
  imports: [
    IonicPageModule.forChild(AereoPage),
  ],
})
export class AereoPageModule {}

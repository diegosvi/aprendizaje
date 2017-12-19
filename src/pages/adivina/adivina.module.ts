import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdivinaPage } from './adivina';

@NgModule({
  declarations: [
    AdivinaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdivinaPage),
  ],
})
export class AdivinaPageModule {}

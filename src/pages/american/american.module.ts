import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmericanPage } from './american';

@NgModule({
  declarations: [
    AmericanPage,
  ],
  imports: [
    IonicPageModule.forChild(AmericanPage),
  ],
})
export class AmericanPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmericasPage } from './americas';

@NgModule({
  declarations: [
    AmericasPage,
  ],
  imports: [
    IonicPageModule.forChild(AmericasPage),
  ],
})
export class AmericasPageModule {}

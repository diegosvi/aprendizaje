import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmericaPage } from './america';

@NgModule({
  declarations: [
    AmericaPage,
  ],
  imports: [
    IonicPageModule.forChild(AmericaPage),
  ],
})
export class AmericaPageModule {}

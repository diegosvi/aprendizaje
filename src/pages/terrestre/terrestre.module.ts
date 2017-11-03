import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerrestrePage } from './terrestre';

@NgModule({
  declarations: [
    TerrestrePage,
  ],
  imports: [
    IonicPageModule.forChild(TerrestrePage),
  ],
})
export class TerrestrePageModule {}

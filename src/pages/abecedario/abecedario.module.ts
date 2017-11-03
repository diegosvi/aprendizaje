import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbecedarioPage } from './abecedario';

@NgModule({
  declarations: [
    AbecedarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AbecedarioPage),
  ],
})
export class AbecedarioPageModule {}

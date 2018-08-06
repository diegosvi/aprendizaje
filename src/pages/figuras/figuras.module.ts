import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FigurasPage } from './figuras';

@NgModule({
  declarations: [
    FigurasPage,
  ],
  imports: [
    IonicPageModule.forChild(FigurasPage),
  ],
})
export class FigurasPageModule {}

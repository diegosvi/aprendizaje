import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalesPage } from './animales';

@NgModule({
  declarations: [
    AnimalesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalesPage),
  ],
})
export class AnimalesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PecesPage } from './peces';

@NgModule({
  declarations: [
    PecesPage,
  ],
  imports: [
    IonicPageModule.forChild(PecesPage),
  ],
})
export class PecesPageModule {}

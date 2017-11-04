import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeportesPage } from './deportes';

@NgModule({
  declarations: [
    DeportesPage,
  ],
  imports: [
    IonicPageModule.forChild(DeportesPage),
  ],
})
export class DeportesPageModule {}

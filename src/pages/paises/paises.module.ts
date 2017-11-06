import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesPage } from './paises';

@NgModule({
  declarations: [
    PaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesPage),
  ],
})
export class PaisesPageModule {}

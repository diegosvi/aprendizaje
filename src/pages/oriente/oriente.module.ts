import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrientePage } from './oriente';

@NgModule({
  declarations: [
    OrientePage,
  ],
  imports: [
    IonicPageModule.forChild(OrientePage),
  ],
})
export class OrientePageModule {}

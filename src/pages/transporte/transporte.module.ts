import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportePage } from './transporte';

@NgModule({
  declarations: [
    TransportePage,
  ],
  imports: [
    IonicPageModule.forChild(TransportePage),
  ],
})
export class TransportePageModule {}

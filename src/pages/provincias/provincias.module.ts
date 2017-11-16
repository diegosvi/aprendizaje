import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvinciasPage } from './provincias';

@NgModule({
  declarations: [
    ProvinciasPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvinciasPage),
  ],
})
export class ProvinciasPageModule {}

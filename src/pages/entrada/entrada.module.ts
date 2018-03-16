import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntradaPage } from './entrada';

@NgModule({
  declarations: [
    EntradaPage,
  ],
  imports: [
    IonicPageModule.forChild(EntradaPage),
  ],
})
export class EntradaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MamiferosPage } from './mamiferos';

@NgModule({
  declarations: [
    MamiferosPage,
  ],
  imports: [
    IonicPageModule.forChild(MamiferosPage),
  ],
})
export class MamiferosPageModule {}

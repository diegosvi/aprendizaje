import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnfibiosPage } from './anfibios';

@NgModule({
  declarations: [
    AnfibiosPage,
  ],
  imports: [
    IonicPageModule.forChild(AnfibiosPage),
  ],
})
export class AnfibiosPageModule {}

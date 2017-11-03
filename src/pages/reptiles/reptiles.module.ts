import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReptilesPage } from './reptiles';

@NgModule({
  declarations: [
    ReptilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReptilesPage),
  ],
})
export class ReptilesPageModule {}

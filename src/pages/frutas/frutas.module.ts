import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrutasPage } from './frutas';

@NgModule({
  declarations: [
    FrutasPage,
  ],
  imports: [
    IonicPageModule.forChild(FrutasPage),
  ],
})
export class FrutasPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FrutasPage} from '../../pages/frutas/frutas';
import { HortalizasPage} from '../../pages/hortalizas/hortalizas';

/**
 * Generated class for the FruhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fruho',
  templateUrl: 'fruho.html',
})
export class FruhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruhoPage');
  }

  irHortalizas(){
    this.navCtrl.push(HortalizasPage);
  }

  irFrutas(){
    this.navCtrl.push(FrutasPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AereoPage} from '../../pages/aereo/aereo';
import { MaritimoPage} from '../../pages/maritimo/maritimo';
import { TerrestrePage} from '../../pages/terrestre/terrestre';

/**
 * Generated class for the TransportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html',
})
export class TransportePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }

  irAereo(){
    this.navCtrl.push(AereoPage);
  }

  irTerrestre(){
    this.navCtrl.push(TerrestrePage);
  }

  irMaritimo(){
    this.navCtrl.push(MaritimoPage);
  }


}

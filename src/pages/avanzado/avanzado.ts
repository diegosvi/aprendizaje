import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PaisesPage} from '../../pages/paises/paises';
import { FruhoPage} from '../../pages/fruho/fruho';
import { TransportePage} from '../../pages/transporte/transporte';
import { AmericaPage} from '../../pages/america/america';

/**
 * Generated class for the AvanzadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avanzado',
  templateUrl: 'avanzado.html',
})
export class AvanzadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvanzadoPage');
  }

  // irPaises(){
  //   this.navCtrl.push(PaisesPage);
  // }

  irAmerica(){
    this.navCtrl.push(AmericaPage);
  }
  irFruho(){
    this.navCtrl.push(FruhoPage);
  }

  irTransporte(){
    this.navCtrl.push(TransportePage);
  }
}

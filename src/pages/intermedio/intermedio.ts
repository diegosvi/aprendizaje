import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FruhoPage} from '../../pages/fruho/fruho';
// import { TransportePage} from '../../pages/transporte/transporte';
import { DiasPage} from '../../pages/dias/dias';
import { MesesPage} from '../../pages/meses/meses';
import { DeportesPage} from '../../pages/deportes/deportes';
import { RelojPage} from '../../pages/reloj/reloj';

/**
 * Generated class for the IntermedioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intermedio',
  templateUrl: 'intermedio.html',
})
export class IntermedioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntermedioPage');
  }

  irDias(){
    this.navCtrl.push(DiasPage);
  }

  // irTransporte(){
  //   this.navCtrl.push(TransportePage);
  // }

  irReloj(){
    this.navCtrl.push(RelojPage);
  }

  // irFruho(){
  //   this.navCtrl.push(FruhoPage);
  // }

  irMeses(){
    this.navCtrl.push(MesesPage);
  }

  irDeportes(){
    this.navCtrl.push(DeportesPage);
  }
}

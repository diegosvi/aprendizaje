import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FruhoPage} from '../../pages/fruho/fruho';
import { TransportePage} from '../../pages/transporte/transporte';
import { ProfesionesPage} from '../../pages/profesiones/profesiones';
import { MesesPage} from '../../pages/meses/meses';

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

  irProfesion(){
    this.navCtrl.push(ProfesionesPage);
  }

  irTransporte(){
    this.navCtrl.push(TransportePage);
  }

  irFruho(){
    this.navCtrl.push(FruhoPage);
  }

  irMeses(){
    this.navCtrl.push(MesesPage);
  }
}

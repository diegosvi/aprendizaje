import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvinciasPage} from '../../pages/provincias/provincias';


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

  irProvincias(){
    this.navCtrl.push(ProvinciasPage);
  }

}

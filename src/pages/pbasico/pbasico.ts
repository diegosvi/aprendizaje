import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AhorcadoPage} from '../../pages/ahorcado/ahorcado';
import { AdivinaPage} from '../../pages/adivina/adivina';
import { JuegocolPage} from '../../pages/juegocol/juegocol';
/**
 * Generated class for the PbasicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pbasico',
  templateUrl: 'pbasico.html',
})
export class PbasicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PbasicoPage');
  }

  irAhorcado(){
    this.navCtrl.push(AhorcadoPage);
  }

  irAdivina(){
    this.navCtrl.push(AdivinaPage);
  }

  irColores(){
    this.navCtrl.push(JuegocolPage);
  }
}

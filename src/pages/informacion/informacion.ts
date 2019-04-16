import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AnimalesPage, PrincipalPage, IntermedioPage, AvanzadoPage, EntradaPage, ProfesionesPage} from '../index.pages';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  irbasico(){
    this.navCtrl.push(PrincipalPage);
  }
  iranimales(){
    this.navCtrl.push(AnimalesPage);
  }
  irintermedio(){
    this.navCtrl.push(IntermedioPage);
  }
  irprofesion(){
    this.navCtrl.push(ProfesionesPage);
  }
  iravanzado(){
    this.navCtrl.push(AvanzadoPage);
  }
  irinicio(){
    this.navCtrl.push(EntradaPage);
  }
}

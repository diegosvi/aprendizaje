import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AhorcadoPage} from '../../pages/ahorcado/ahorcado';
import { AdivinaPage} from '../../pages/adivina/adivina';
import {JuegocolPage} from "../juegocol/juegocol";

/**
 * Generated class for the PracticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica',
  templateUrl: 'practica.html',
})
export class PracticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticaPage');
  }

  irAhorcado(){
    this.navCtrl.push(AhorcadoPage);
  }

  irAdivina(){
    this.navCtrl.push(AdivinaPage);
  }

  irJuegoCol(){
    this.navCtrl.push(JuegocolPage);
  }
}

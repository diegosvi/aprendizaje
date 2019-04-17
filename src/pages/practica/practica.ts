import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PbasicoPage} from "../pbasico/pbasico";
import {PintermedioPage} from "../pintermedio/pintermedio";

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



  irpbasico(){
    this.navCtrl.push(PbasicoPage);
  }

  irpintermedio(){
    this.navCtrl.push(PintermedioPage);
  }
}

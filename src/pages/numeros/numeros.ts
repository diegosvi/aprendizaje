import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Numeros} from "../../interface/interface.numeros";
import { NUMEROS } from '../../data/data.numeros';

/**
 * Generated class for the NumerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numeros',
  templateUrl: 'numeros.html',
})
export class NumerosPage {

  numero: Numeros[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numero = NUMEROS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

  reproducir(numeros: Numeros) {
    console.log(numeros);
    let audio = new Audio();
    audio.src = numeros.audio;


    audio.load();
    audio.play();

    numeros.reproduciendo = true;
    setTimeout(
      () => {
        numeros.reproduciendo = false;
      }, numeros.duracion * 1000
    );

  }

}

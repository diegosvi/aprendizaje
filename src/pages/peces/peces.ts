import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PECES } from '../../data/data.peces';
import  { Peces } from '../../interface/interface.peces';

/**
 * Generated class for the PecesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peces',
  templateUrl: 'peces.html',
})
export class PecesPage {

  pez: Peces[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pez = PECES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(pez: Peces) {
    console.log(pez);
    let audio = new Audio();
    audio.src = pez.audio;


    audio.load();
    audio.play();

    pez.reproduciendo = true;
    setTimeout(
      () => {
        pez.reproduciendo = false;
      }, pez.duracion * 1000
    );

  }

}

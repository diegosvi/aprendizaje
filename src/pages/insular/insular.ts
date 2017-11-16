import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GALAPAGOS } from '../../data/data.galapagos';
import  { Galapagos } from '../../interface/interface.galapagos';

/**
 * Generated class for the InsularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insular',
  templateUrl: 'insular.html',
})
export class InsularPage {

  gal: Galapagos[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gal = GALAPAGOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(gal: Galapagos) {
    console.log(gal);
    let audio = new Audio();
    audio.src = gal.audio;


    audio.load();
    audio.play();

    gal.reproduciendo = true;
    setTimeout(
      () => {
        gal.reproduciendo = false;
      }, gal.duracion * 1000
    );

  }
}

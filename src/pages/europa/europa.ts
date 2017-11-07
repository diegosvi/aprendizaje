import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EUROPA } from '../../data/data.europa';
import  { Europa } from '../../interface/interface.europa';

/**
 * Generated class for the EuropaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-europa',
  templateUrl: 'europa.html',
})
export class EuropaPage {

  eur: Europa[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eur = EUROPA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(eur: Europa) {
    console.log(eur);
    let audio = new Audio();
    audio.src = eur.audio;


    audio.load();
    audio.play();

    eur.reproduciendo = true;
    setTimeout(
      () => {
        eur.reproduciendo = false;
      }, eur.duracion * 1000
    );

  }

}

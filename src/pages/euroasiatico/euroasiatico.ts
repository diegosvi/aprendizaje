import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EUROA } from '../../data/data.euroa';
import  { Euroa } from '../../interface/interface.euroa';

/**
 * Generated class for the EuroasiaticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-euroasiatico',
  templateUrl: 'euroasiatico.html',
})
export class EuroasiaticoPage {

  eura: Euroa[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eura = EUROA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(eura: Euroa) {
    console.log(eura);
    let audio = new Audio();
    audio.src = eura.audio;


    audio.load();
    audio.play();

    eura.reproduciendo = true;
    setTimeout(
      () => {
        eura.reproduciendo = false;
      }, eura.duracion * 1000
    );

  }


}

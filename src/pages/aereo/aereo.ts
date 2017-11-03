import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AEREO} from '../../data/data.aereo';
import  { Aereo } from '../../interface/interface.aereo';

/**
 * Generated class for the AereoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aereo',
  templateUrl: 'aereo.html',
})
export class AereoPage {

  aer: Aereo[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aer = AEREO.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(aer: Aereo) {
    console.log(aer);
    let audio = new Audio();
    audio.src = aer.audio;


    audio.load();
    audio.play();

    aer.reproduciendo = true;
    setTimeout(
      () => {
        aer.reproduciendo = false;
      }, aer.duracion * 1000
    );

  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AFRICA } from '../../data/data.africa';
import  { Africa } from '../../interface/interface.africa';

/**
 * Generated class for the AfricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-africa',
  templateUrl: 'africa.html',
})
export class AfricaPage {

  afr: Africa[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.afr = AFRICA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(afr: Africa) {
    console.log(afr);
    let audio = new Audio();
    audio.src = afr.audio;


    audio.load();
    audio.play();

    afr.reproduciendo = true;
    setTimeout(
      () => {
        afr.reproduciendo = false;
      }, afr.duracion * 1000
    );

  }


}

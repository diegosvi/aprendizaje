import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TERRESTRE} from '../../data/data.terrestre';
import  { Terrestre } from '../../interface/interface.terrestre';

/**
 * Generated class for the TerrestrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terrestre',
  templateUrl: 'terrestre.html',
})
export class TerrestrePage {

  terre: Terrestre[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.terre = TERRESTRE.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(terr: Terrestre) {
    console.log(terr);
    let audio = new Audio();
    audio.src = terr.audio;


    audio.load();
    audio.play();

    terr.reproduciendo = true;
    setTimeout(
      () => {
        terr.reproduciendo = false;
      }, terr.duracion * 1000
    );

  }

}

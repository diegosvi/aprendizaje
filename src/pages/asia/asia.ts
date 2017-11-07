import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ASIA } from '../../data/data.asia';
import  { Asia } from '../../interface/interface.asia';

/**
 * Generated class for the AsiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asia',
  templateUrl: 'asia.html',
})
export class AsiaPage {

  asi: Asia[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asi = ASIA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(asi: Asia) {
    console.log(asi);
    let audio = new Audio();
    audio.src = asi.audio;


    audio.load();
    audio.play();

    asi.reproduciendo = true;
    setTimeout(
      () => {
        asi.reproduciendo = false;
      }, asi.duracion * 1000
    );

  }


}

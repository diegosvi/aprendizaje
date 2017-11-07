import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Oceania} from "../../interface/interface.oceania";
import { OCEANIA } from '../../data/data.oceania';

/**
 * Generated class for the OceaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oceania',
  templateUrl: 'oceania.html',
})
export class OceaniaPage {

  oce: Oceania[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oce = OCEANIA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(oce: Oceania) {
    console.log(oce);
    let audio = new Audio();
    audio.src = oce.audio;


    audio.load();
    audio.play();

    oce.reproduciendo = true;
    setTimeout(
      () => {
        oce.reproduciendo = false;
      }, oce.duracion * 1000
    );

  }


}

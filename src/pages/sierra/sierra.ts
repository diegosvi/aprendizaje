import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SIERRA } from '../../data/data.sierra';
import  { Sierra } from '../../interface/interface.sierra';

/**
 * Generated class for the SierraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sierra',
  templateUrl: 'sierra.html',
})
export class SierraPage {

  sie: Sierra[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sie = SIERRA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(sie: Sierra) {
    console.log(sie);
    let audio = new Audio();
    audio.src = sie.audio;


    audio.load();
    audio.play();

    sie.reproduciendo = true;
    setTimeout(
      () => {
        sie.reproduciendo = false;
      }, sie.duracion * 1000
    );

  }

}

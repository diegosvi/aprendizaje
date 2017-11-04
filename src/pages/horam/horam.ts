import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORAM } from '../../data/data.horam';
import  { Horam } from '../../interface/interface.horam';

/**
 * Generated class for the HoramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horam',
  templateUrl: 'horam.html',
})
export class HoramPage {

  hm: Horam[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hm = HORAM.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(hm: Horam) {
    console.log(hm);
    let audio = new Audio();
    audio.src = hm.audio;


    audio.load();
    audio.play();

    hm.reproduciendo = true;
    setTimeout(
      () => {
        hm.reproduciendo = false;
      }, hm.duracion * 1000
    );

  }

}

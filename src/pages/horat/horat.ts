import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORAT } from '../../data/data.horat';
import  { Horat } from '../../interface/interface.horat';

/**
 * Generated class for the HoratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horat',
  templateUrl: 'horat.html',
})
export class HoratPage {

  ht: Horat[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ht = HORAT.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ht: Horat) {
    console.log(ht);
    let audio = new Audio();
    audio.src = ht.audio;


    audio.load();
    audio.play();

    ht.reproduciendo = true;
    setTimeout(
      () => {
        ht.reproduciendo = false;
      }, ht.duracion * 1000
    );

  }

}

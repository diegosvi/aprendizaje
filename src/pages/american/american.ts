import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAN } from '../../data/data.american';
import  { American } from '../../interface/interface.american';

/**
 * Generated class for the AmericanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-american',
  templateUrl: 'american.html',
})
export class AmericanPage {

  ame: American[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAN.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ame: American) {
    console.log(ame);
    let audio = new Audio();
    audio.src = ame.audio;


    audio.load();
    audio.play();

    ame.reproduciendo = true;
    setTimeout(
      () => {
        ame.reproduciendo = false;
      }, ame.duracion * 1000
    );

  }

}

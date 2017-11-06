import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAS } from '../../data/data.americas';
import  { Americas } from '../../interface/interface.americas';

/**
 * Generated class for the AmericasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-americas',
  templateUrl: 'americas.html',
})
export class AmericasPage {

  ame: Americas[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ame: Americas) {
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

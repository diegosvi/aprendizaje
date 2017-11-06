import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAC } from '../../data/data.americac';
import  { Americac } from '../../interface/interface.americac';

/**
 * Generated class for the AmericacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-americac',
  templateUrl: 'americac.html',
})
export class AmericacPage {

  ame: Americac[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAC.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ame: Americac) {
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

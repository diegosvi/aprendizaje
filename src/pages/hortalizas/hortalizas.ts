import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORTALIZAS} from '../../data/data.hortalizas';
import  { Hortalizas } from '../../interface/interface.hortalizas';

/**
 * Generated class for the HortalizasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hortalizas',
  templateUrl: 'hortalizas.html',
})
export class HortalizasPage {

  hor: Hortalizas[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hor = HORTALIZAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(hor: Hortalizas) {
    console.log(hor);
    let audio = new Audio();
    audio.src = hor.audio;


    audio.load();
    audio.play();

    hor.reproduciendo = true;
    setTimeout(
      () => {
        hor.reproduciendo = false;
      }, hor.duracion * 1000
    );

  }
}

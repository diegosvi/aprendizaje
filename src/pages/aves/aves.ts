import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AVES } from '../../data/data.aves';
import  { Aves } from '../../interface/interface.aves';

/**
 * Generated class for the AvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aves',
  templateUrl: 'aves.html',
})
export class AvesPage {

  ave: Aves[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ave = AVES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ave: Aves) {
    console.log(ave);
    let audio = new Audio();
    audio.src = ave.audio;


    audio.load();
    audio.play();

    ave.reproduciendo = true;
    setTimeout(
      () => {
        ave.reproduciendo = false;
      }, ave.duracion * 1000
    );

  }


}

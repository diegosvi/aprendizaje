import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ORIENTE } from '../../data/data.oriente';
import  { Oriente } from '../../interface/interface.oriente';

/**
 * Generated class for the OrientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oriente',
  templateUrl: 'oriente.html',
})
export class OrientePage {

  ori: Oriente[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ori = ORIENTE.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ori: Oriente) {
    console.log(ori);
    let audio = new Audio();
    audio.src = ori.audio;


    audio.load();
    audio.play();

    ori.reproduciendo = true;
    setTimeout(
      () => {
        ori.reproduciendo = false;
      }, ori.duracion * 1000
    );

  }
}

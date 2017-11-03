import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ANFIBIOS } from '../../data/data.anfibios';
import  { Anfibios } from '../../interface/interface.anfibios';

/**
 * Generated class for the AnfibiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anfibios',
  templateUrl: 'anfibios.html',
})
export class AnfibiosPage {

  anfibio: Anfibios[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.anfibio = ANFIBIOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(anfibio: Anfibios) {
    console.log(anfibio);
    let audio = new Audio();
    audio.src = anfibio.audio;


    audio.load();
    audio.play();

    anfibio.reproduciendo = true;
    setTimeout(
      () => {
        anfibio.reproduciendo = false;
      }, anfibio.duracion * 1000
    );

  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COLORES } from '../../data/data.colores';
import  { Colores } from '../../interface/interface.colores';

/**
 * Generated class for the ColoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colores',
  templateUrl: 'colores.html',
})
export class ColoresPage {

  color: Colores[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = COLORES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(colore: Colores) {
    console.log(colore);
    let audio = new Audio();
    audio.src = colore.audio;


    audio.load();
    audio.play();

    colore.reproduciendo = true;
    setTimeout(
      () => {
        colore.reproduciendo = false;
      }, colore.duracion * 1000
    );

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DIAS } from '../../data/data.dias';
import  { Dias } from '../../interface/interface.dias';

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {

  dia: Dias[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dia = DIAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(dias: Dias) {
    console.log(dias);
    let audio = new Audio();
    audio.src = dias.audio;


    audio.load();
    audio.play();

    dias.reproduciendo = true;
    setTimeout(
      () => {
        dias.reproduciendo = false;
      }, dias.duracion * 1000
    );

  }

}

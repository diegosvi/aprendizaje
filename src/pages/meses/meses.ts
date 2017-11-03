import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESES } from '../../data/data.meses';
import  { Meses } from '../../interface/interface.meses';

/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage {

  mes: Meses[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mes = MESES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(mes: Meses) {
    console.log(mes);
    let audio = new Audio();
    audio.src = mes.audio;


    audio.load();
    audio.play();

    mes.reproduciendo = true;
    setTimeout(
      () => {
        mes.reproduciendo = false;
      }, mes.duracion * 1000
    );

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MARITIMO} from '../../data/data.maritimo';
import  { Maritimo } from '../../interface/interface.maritimo';

/**
 * Generated class for the MaritimoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maritimo',
  templateUrl: 'maritimo.html',
})
export class MaritimoPage {

  marit: Maritimo[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marit = MARITIMO.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(marit: Maritimo) {
    console.log(marit);
    let audio = new Audio();
    audio.src = marit.audio;


    audio.load();
    audio.play();

    marit.reproduciendo = true;
    setTimeout(
      () => {
        marit.reproduciendo = false;
      }, marit.duracion * 1000
    );

  }

}

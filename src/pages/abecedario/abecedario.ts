import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ABECEDARIO } from '../../data/data.abecedario';
import  { Abecedario } from '../../interface/interface.abecedario';

/**
 * Generated class for the AbecedarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abecedario',
  templateUrl: 'abecedario.html',
})
export class AbecedarioPage {

  abeceda: Abecedario[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.abeceda = ABECEDARIO.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(abecedario: Abecedario) {
    console.log(abecedario);
    let audio = new Audio();
    audio.src = abecedario.audio;


    audio.load();
    audio.play();

    abecedario.reproduciendo = true;
    setTimeout(
      () => {
        abecedario.reproduciendo = false;
      }, abecedario.duracion * 1000
    );

  }
}

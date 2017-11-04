import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DEPORTES } from '../../data/data.deportes';
import  { Deportes } from '../../interface/interface.deportes';

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html',
})
export class DeportesPage {

  dep: Deportes[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dep = DEPORTES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(dep: Deportes) {
    console.log(dep);
    let audio = new Audio();
    audio.src = dep.audio;


    audio.load();
    audio.play();

    dep.reproduciendo = true;
    setTimeout(
      () => {
        dep.reproduciendo = false;
      }, dep.duracion * 1000
    );

  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { REPTILES} from '../../data/data.reptiles';
import  { Reptiles } from '../../interface/interface.reptiles';

/**
 * Generated class for the ReptilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reptiles',
  templateUrl: 'reptiles.html',
})
export class ReptilesPage {

  reptil: Reptiles[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reptil = REPTILES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(reptil: Reptiles) {
    console.log(reptil);
    let audio = new Audio();
    audio.src = reptil.audio;


    audio.load();
    audio.play();

    reptil.reproduciendo = true;
    setTimeout(
      () => {
        reptil.reproduciendo = false;
      }, reptil.duracion * 1000
    );

  }

}

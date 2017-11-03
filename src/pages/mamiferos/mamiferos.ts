import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MAMIFEROS } from '../../data/data.mamiferos';
import  { Mamiferos } from '../../interface/interface.mamiferos';


/**
 * Generated class for the MamiferosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mamiferos',
  templateUrl: 'mamiferos.html',
})
export class MamiferosPage {

  mamifero: Mamiferos[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mamifero = MAMIFEROS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(mamiferos: Mamiferos) {
    console.log(mamiferos);
    let audio = new Audio();
    audio.src = mamiferos.audio;


    audio.load();
    audio.play();

    mamiferos.reproduciendo = true;
    setTimeout(
      () => {
        mamiferos.reproduciendo = false;
      }, mamiferos.duracion * 1000
    );

  }

}

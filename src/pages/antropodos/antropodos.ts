import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ARTROPODOS } from '../../data/data.artropodos';
import  { Artropodos } from '../../interface/interface.artropodos';

/**
 * Generated class for the AntropodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-antropodos',
  templateUrl: 'antropodos.html',
})
export class AntropodosPage {

  artropodo: Artropodos[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artropodo = ARTROPODOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(artropodo: Artropodos) {
    console.log(artropodo);
    let audio = new Audio();
    audio.src = artropodo.audio;


    audio.load();
    audio.play();

    artropodo.reproduciendo = true;
    setTimeout(
      () => {
        artropodo.reproduciendo = false;
      }, artropodo.duracion * 1000
    );

  }


}

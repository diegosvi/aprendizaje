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
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artropodo = ARTROPODOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(antr: Artropodos){
    this.pausarSonido(antr);
    if(antr.reproduciendo){
      antr.reproduciendo=false;
      return;
    }
    console.log(antr);

    //let audio = new Audio();
    this.audio.src = antr.audio;


    this.audio.load();
    this.audio.play();

    antr.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        antr.reproduciendo = false;
      }, antr.duracion*1000
    );

  }


  pausarSonido(antrSelected: Artropodos){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let antr of this.artropodo){
      if(antr.imagen != antrSelected.imagen){
        antr.reproduciendo = false;
      }
    }
  }


}

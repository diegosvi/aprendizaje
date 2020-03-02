import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ARTROPODOS } from '../../data/data.artropodos';
import  { Artropodos } from '../../interface/interface.artropodos';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

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

  invertebrados = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.artropodo = ARTROPODOS.slice(0);

    this.pequeGameSrv.getInvertebrados()
    .subscribe(invertebrados=>{ 
      this.invertebrados = invertebrados;
      console.log(invertebrados);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(invertebrados){
    console.log("esto es una prueba"+JSON.stringify(invertebrados.sound));

    this.audio.src = invertebrados.sound;


    this.audio.load();
    this.audio.play();

    invertebrados.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        invertebrados.reproduciendo = false;
      }, invertebrados.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }
 /* reproducir(antr: Artropodos){
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

*/
}

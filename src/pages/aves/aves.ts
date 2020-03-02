import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AVES } from '../../data/data.aves';
import  { Aves } from '../../interface/interface.aves';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the AvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aves',
  templateUrl: 'aves.html',
})
export class AvesPage {

  ave: Aves[] = [];
  audio: any = new Audio();
  tiempo: any;

  aves = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.ave = AVES.slice(0);

    this.pequeGameSrv.getAves()
    .subscribe(aves=>{ 
      this.aves = aves;
      console.log(aves);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(aves){
    console.log("esto es una prueba"+JSON.stringify(aves.sound));

    this.audio.src = aves.sound;


    this.audio.load();
    this.audio.play();

    aves.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        aves.reproduciendo = false;
      }, aves.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


 /* reproducir(aves: Aves){
    this.pausarSonido(aves);
    if(aves.reproduciendo){
      aves.reproduciendo=false;
      return;
    }
    console.log(aves);

    //let audio = new Audio();
    this.audio.src = aves.audio;


    this.audio.load();
    this.audio.play();

    aves.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        aves.reproduciendo = false;
      }, aves.duracion*1000
    );

  }


  pausarSonido(avesSelected: Aves){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let aves of this.ave){
      if(aves.imagen != avesSelected.imagen){
        aves.reproduciendo = false;
      }
    }
  }
*/

}

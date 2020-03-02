import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SIERRA } from '../../data/data.sierra';
import  { Sierra } from '../../interface/interface.sierra';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the SierraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sierra',
  templateUrl: 'sierra.html',
})
export class SierraPage {

  sie: Sierra[] = [];
  audio: any = new Audio();
  tiempo: any;
  sierras = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.sie = SIERRA.slice(0);

    this.pequeGameSrv.getSierra()
    .subscribe(sierras=>{ 
      this.sierras = sierras;
      console.log(sierras);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(sierras){
    console.log("esto es una prueba"+JSON.stringify(sierras.sound));

    this.audio.src = sierras.sound;


    this.audio.load();
    this.audio.play();

    sierras.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        sierras.reproduciendo = false;
      }, sierras.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

  /*reproducir(sier: Sierra){
    this.pausarSonido(sier);
    if(sier.reproduciendo){
      sier.reproduciendo=false;
      return;
    }
    console.log(sier);

    //let audio = new Audio();
    this.audio.src = sier.audio;


    this.audio.load();
    this.audio.play();

    sier.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        sier.reproduciendo = false;
      }, sier.duracion*1000
    );

  }


  pausarSonido(sierSelected: Sierra){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let sier of this.sie){
      if(sier.imagen != sier.imagen){
        sier.reproduciendo = false;
      }
    }
  }
*/
}

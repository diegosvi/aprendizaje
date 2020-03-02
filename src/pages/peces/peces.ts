import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PECES } from '../../data/data.peces';
import  { Peces } from '../../interface/interface.peces';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the PecesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peces',
  templateUrl: 'peces.html',
})
export class PecesPage {

  pez: Peces[] = [];
  audio: any = new Audio();
  tiempo: any;
  peces = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.pez = PECES.slice(0);
    this.pequeGameSrv.getPeces()
    .subscribe(peces=>{ 
      this.peces = peces;
      console.log(peces);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(peces){
    console.log("esto es una prueba"+JSON.stringify(peces.sound));

    this.audio.src = peces.sound;


    this.audio.load();
    this.audio.play();

    peces.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        peces.reproduciendo = false;
      }, peces.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(peze: Peces){
    this.pausarSonido(peze);
    if(peze.reproduciendo){
      peze.reproduciendo=false;
      return;
    }
    console.log(peze);

    //let audio = new Audio();
    this.audio.src = peze.audio;


    this.audio.load();
    this.audio.play();

    peze.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        peze.reproduciendo = false;
      }, peze.duracion*1000
    );

  }


  pausarSonido(pezeSelected: Peces){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let peze of this.pez){
      if(peze.imagen != pezeSelected.imagen){
        peze.reproduciendo = false;
      }
    }
  }
*/
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AEREO} from '../../data/data.aereo';
import  { Aereo } from '../../interface/interface.aereo';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the AereoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aereo',
  templateUrl: 'aereo.html',
})
export class AereoPage {

  aer: Aereo[] = [];
  audio: any = new Audio();
  tiempo: any;

  aereos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.aer = AEREO.slice(0);

    this.pequeGameSrv.getTransporteA()
    .subscribe(aereos=>{ 
      this.aereos = aereos;
      console.log(aereos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(aereos){
    console.log("esto es una prueba"+JSON.stringify(aereos.sound));

    this.audio.src = aereos.sound;


    this.audio.load();
    this.audio.play();

    aereos.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        aereos.reproduciendo = false;
      }, aereos.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


 /* reproducir(aer: Aereo){
    this.pausarSonido(aer);
    if(aer.reproduciendo){
      aer.reproduciendo=false;
      return;
    }
    console.log(aer);

    //let audio = new Audio();
    this.audio.src = aer.audio;


    this.audio.load();
    this.audio.play();

    aer.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        aer.reproduciendo = false;
      }, aer.duracion*1000
    );

  }


  pausarSonido(aerSelected: Aereo){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let aereo of this.aer){
      if(aereo.imagen != aerSelected.imagen){
        aereo.reproduciendo = false;
      }
    }
  }
  */
}

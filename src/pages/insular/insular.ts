import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GALAPAGOS } from '../../data/data.galapagos';
import  { Galapagos } from '../../interface/interface.galapagos';


import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the InsularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insular',
  templateUrl: 'insular.html',
})
export class InsularPage {

  gal: Galapagos[] = [];
  audio: any = new Audio();
  tiempo: any;
  galapagos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.gal = GALAPAGOS.slice(0);

    this.pequeGameSrv.getGalapagos()
    .subscribe(galapagos=>{ 
      this.galapagos = galapagos;
      console.log(galapagos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(galapagos){
    console.log("esto es una prueba"+JSON.stringify(galapagos.sound));

    this.audio.src = galapagos.sound;


    this.audio.load();
    this.audio.play();

    galapagos.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        galapagos.reproduciendo = false;
      }, galapagos.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(gala: Galapagos){
    this.pausarSonido(gala);
    if(gala.reproduciendo){
      gala.reproduciendo=false;
      return;
    }
    console.log(gala);

    //let audio = new Audio();
    this.audio.src = gala.audio;


    this.audio.load();
    this.audio.play();

    gala.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        gala.reproduciendo = false;
      }, gala.duracion*1000
    );

  }


  pausarSonido(galaSelected: Galapagos){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let gala of this.gal){
      if(gala.imagen != gala.imagen){
        gala.reproduciendo = false;
      }
    }
  }
*/
}

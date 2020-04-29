import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { MESES } from '../../data/data.meses';
import  { Meses } from '../../interface/interface.meses';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage {

  mes: Meses[] = [];
  audio: any = new Audio();
  tiempo: any;
  meses = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.mes = MESES.slice(0);

    this.pequeGameSrv.getMeses()
    .subscribe(meses=>{ 
      this.meses = meses;
      console.log(meses);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(meses){
    console.log("esto es una prueba"+JSON.stringify(meses.sound));

    this.audio.src = meses.sound;


    this.audio.load();
    this.audio.play();

    meses.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        meses.reproduciendo = false;
      }, meses.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(mese: Meses){
    this.pausarSonido(mese);
    if(mese.reproduciendo){
      mese.reproduciendo=false;
      return;
    }
    console.log(mese);

    //let audio = new Audio();
    this.audio.src = mese.audio;


    this.audio.load();
    this.audio.play();

    mese.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        mese.reproduciendo = false;
      }, mese.duracion*1000
    );

  }


  pausarSonido(meseSelected: Meses){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let mese of this.mes){
      if(mese.imagen != meseSelected.imagen){
        mese.reproduciendo = false;
      }
    }
  }
*/
}

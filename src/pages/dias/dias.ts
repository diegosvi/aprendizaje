import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DIAS } from '../../data/data.dias';
import  { Dias } from '../../interface/interface.dias';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {

  dia: Dias[] = [];
  audio: any = new Audio();
  tiempo: any;

  dias = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.dia = DIAS.slice(0);

    this.pequeGameSrv.getDias()
    .subscribe(dias=>{ 
      this.dias = dias;
      console.log(dias);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(dias){
    console.log("esto es una prueba"+JSON.stringify(dias.sound));

    this.audio.src = dias.sound;


    this.audio.load();
    this.audio.play();

    dias.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        dias.reproduciendo = false;
      }, dias.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(dias: Dias){
    this.pausarSonido(dias);
    if(dias.reproduciendo){
      dias.reproduciendo=false;
      return;
    }
    console.log(dias);

    //let audio = new Audio();
    this.audio.src = dias.audio;


    this.audio.load();
    this.audio.play();

    dias.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        dias.reproduciendo = false;
      }, dias.duracion*1000
    );

  }


  pausarSonido(diasSelected: Dias){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let dias of this.dia){
      if(dias.imagen != diasSelected.imagen){
        dias.reproduciendo = false;
      }
    }
  }*/
}

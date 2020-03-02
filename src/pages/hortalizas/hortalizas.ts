import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORTALIZAS} from '../../data/data.hortalizas';
import  { Hortalizas } from '../../interface/interface.hortalizas';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the HortalizasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hortalizas',
  templateUrl: 'hortalizas.html',
})
export class HortalizasPage {

  hor: Hortalizas[] = [];
  audio: any = new Audio();
  tiempo: any;

  hortalizas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.hor = HORTALIZAS.slice(0);

    this.pequeGameSrv.getHortalizas()
    .subscribe(hortalizas=>{ 
      this.hortalizas = hortalizas;
      console.log(hortalizas);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(hortalizas){
    console.log("esto es una prueba"+JSON.stringify(hortalizas.sound));

    this.audio.src = hortalizas.sound;


    this.audio.load();
    this.audio.play();

    hortalizas.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        hortalizas.reproduciendo = false;
      }, hortalizas.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


  /*reproducir(hor: Hortalizas){
    this.pausarSonido(hor);
    if(hor.reproduciendo){
      hor.reproduciendo=false;
      return;
    }
    console.log(hor);

    //let audio = new Audio();
    this.audio.src = hor.audio;


    this.audio.load();
    this.audio.play();

    hor.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        hor.reproduciendo = false;
      }, hor.duracion*1000
    );

  }


  pausarSonido(horSelected: Hortalizas){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let hort of this.hor){
      if(hort.imagen != horSelected.imagen){
        hort.reproduciendo = false;
      }
    }
  }*/
}

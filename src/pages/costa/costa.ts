import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COSTA } from '../../data/data.costa';
import  { Costa } from '../../interface/interface.costa';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the CostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-costa',
  templateUrl: 'costa.html',
})
export class CostaPage {

  cos: Costa[] = [];
  audio: any = new Audio();
  tiempo: any;

  costas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.cos = COSTA.slice(0);

    this.pequeGameSrv.getCosta()
    .subscribe(costas=>{ 
      this.costas = costas;
      console.log(costas);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(costas){
    console.log("esto es una prueba"+JSON.stringify(costas.sound));

    this.audio.src = costas.sound;


    this.audio.load();
    this.audio.play();

    costas.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        costas.reproduciendo = false;
      }, costas.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(cost: Costa){
    this.pausarSonido(cost);
    if(cost.reproduciendo){
      cost.reproduciendo=false;
      return;
    }
    console.log(cost);

    //let audio = new Audio();
    this.audio.src = cost.audio;


    this.audio.load();
    this.audio.play();

    cost.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        cost.reproduciendo = false;
      }, cost.duracion*1000
    );

  }


  pausarSonido(costSelected: Costa){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let cost of this.cos){
      if(cost.imagen != cost.imagen){
        cost.reproduciendo = false;
      }
    }
  }
*/
}

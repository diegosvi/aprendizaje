import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FIGURAS } from '../../data/data.figuras';
import  { Figuras } from '../../interface/interface.figuras';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the FigurasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-figuras',
  templateUrl: 'figuras.html',
})
export class FigurasPage {

  figura: Figuras[] = [];
  audio: any = new Audio();
  tiempo: any;

  figuras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.figura = FIGURAS.slice(0);

    this.pequeGameSrv.getFiguras()
      .subscribe(figuras=>{ 
        this.figuras = figuras;
        console.log(figuras);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(figuras){
    console.log("esto es una prueba"+JSON.stringify(figuras.sound));

    this.audio.src = figuras.sound;


    this.audio.load();
    this.audio.play();

    figuras.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        figuras.reproduciendo = false;
      }, figuras.duracion*300
    );
  }

  dismiss(){
    this.navCtrl.pop();
  }
/**
  reproducir(colo: Figuras){
    this.pausarSonido(colo);
    if(colo.reproduciendo){
      colo.reproduciendo=false;
      return;
    }
    console.log(colo);

    //let audio = new Audio();
    this.audio.src = colo.audio;


    this.audio.load();
    this.audio.play();

    colo.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        colo.reproduciendo = false;
      }, colo.duracion*1000
    );

  }


  pausarSonido(coloSelected: Figuras){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let colo of this.figura){
      if(colo.imagen != coloSelected.imagen){
        colo.reproduciendo = false;
      }
    }
  }
**/

}

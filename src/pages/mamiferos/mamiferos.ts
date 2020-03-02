import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MAMIFEROS } from '../../data/data.mamiferos';
import  { Mamiferos } from '../../interface/interface.mamiferos';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the MamiferosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mamiferos',
  templateUrl: 'mamiferos.html',
})
export class MamiferosPage {

  mamifero: Mamiferos[] = [];
  audio: any = new Audio();
  tiempo: any;
  mamiferos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.mamifero = MAMIFEROS.slice(0);

    this.pequeGameSrv.getMamiferos()
    .subscribe(mamiferos=>{ 
      this.mamiferos = mamiferos;
      console.log(mamiferos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }
   
  pruebaAudio(mamiferos){
    console.log("esto es una prueba"+JSON.stringify(mamiferos.sound));

    this.audio.src = mamiferos.sound;


    this.audio.load();
    this.audio.play();

    mamiferos.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        mamiferos.reproduciendo = false;
      }, mamiferos.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

/**
  reproducir(mamiferos: Mamiferos){
    this.pausarSonido(mamiferos);
    if(mamiferos.reproduciendo){
      mamiferos.reproduciendo=false;
      return;
    }
    console.log(mamiferos);

    //let audio = new Audio();
    this.audio.src = mamiferos.audio;


    this.audio.load();
    this.audio.play();

    mamiferos.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        mamiferos.reproduciendo = false;
      }, mamiferos.duracion*1000
    );

  }


  pausarSonido(mamiferoSelected: Mamiferos){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let mamiferos of this.mamifero){
      if(mamiferos.titulo != mamiferoSelected.titulo){
        mamiferos.reproduciendo = false;
      }
    }
  }
**/
}

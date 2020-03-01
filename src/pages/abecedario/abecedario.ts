import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ABECEDARIO } from '../../data/data.abecedario';
import  { Abecedario } from '../../interface/interface.abecedario';
import { ABECEDARIOI } from '../../data/data.abecedarioi';
import  { Abecedarioi } from '../../interface/interface.abecedarioi';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the AbecedarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abecedario',
  templateUrl: 'abecedario.html',
})
export class AbecedarioPage {

  abeceda: Abecedario[] = [];
  abecedar: Abecedarioi[] = [];
  audio: any = new Audio();
  tiempo: any;

  abecedarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {

    this.pequeGameSrv.getAbecedarios()
      .subscribe(abecedarios=>{ 
        this.abecedarios = abecedarios;
        console.log(abecedarios);
      });


    //this.abeceda = ABECEDARIO.slice(0);
    //this.abecedar = ABECEDARIOI.slice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }


  /*reproducir(abecedario: Abecedario){
    this.pausarSonido(abecedario);
    if(abecedario.reproduciendo){
      abecedario.reproduciendo=false;
      return;
    }
    //console.log(abecedario);

    //let audio = new Audio();
    this.audio.src = abecedario.audio;


    this.audio.load();
    this.audio.play();

    abecedario.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        abecedario.reproduciendo = false;
      }, abecedario.duracion*300
    );

  }


  pausarSonido(abecedarioSelected: Abecedario){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let abecedario of this.abeceda){
      if(abecedario.imagen != abecedarioSelected.imagen){
        abecedario.reproduciendo = false;
      }
    }
  }*/


  pruebaAudio(abecedario){
    console.log("esto es una prueba"+JSON.stringify(abecedario.sound));

    this.audio.src = abecedario.sound;


    this.audio.load();
    this.audio.play();

    abecedario.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        abecedario.reproduciendo = false;
      }, abecedario.duracion*300
    );
  }


  dismiss(){
    this.navCtrl.pop();
  }
  

}

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

  fruits = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {

    pequeGameSrv.getFruits()
      .subscribe(fruits=>{
        
        this.fruits = fruits;
        console.log(fruits);
      });


    this.abeceda = ABECEDARIO.slice(0);
    //this.abecedar = ABECEDARIOI.slice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }


  reproducir(abecedario: Abecedario){
    this.pausarSonido(abecedario);
    if(abecedario.reproduciendo){
      abecedario.reproduciendo=false;
      return;
    }
    console.log(abecedario);

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

  reproducir1(abecedarioi: Abecedarioi){
    this.pausarSonido1(abecedarioi);
    if(abecedarioi.reproduciendo){
      abecedarioi.reproduciendo=false;
      return;
    }
    console.log(abecedarioi);

    //let audio = new Audio();
    this.audio.src = abecedarioi.audio;


    this.audio.load();
    this.audio.play();

    abecedarioi.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        abecedarioi.reproduciendo = false;
      }, abecedarioi.duracion*300
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
  }


  pausarSonido1(abecedarioiSelected: Abecedarioi){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let abecedarioi of this.abecedar){
      if(abecedarioi.imagen != abecedarioiSelected.imagen){
        abecedarioi.reproduciendo = false;
      }
    }
  }
}

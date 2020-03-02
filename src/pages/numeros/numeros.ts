import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Numeros} from "../../interface/interface.numeros";
import { NUMEROS } from '../../data/data.numeros';


import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the NumerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-numeros',
  templateUrl: 'numeros.html',
})
export class NumerosPage {

  numero: Numeros[] = [];
  audio: any = new Audio();
  tiempo: any;

  numeros = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {

    this.pequeGameSrv.getNumeros()
    .subscribe(numeros=>{ 
      this.numeros = numeros;
      console.log(numeros);
    });

   /* this.numero = NUMEROS.slice(0);
    this.numeroo = NUMEROSI.slice();*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

 

  pruebaAudio(numeros){
    console.log("esto es una prueba"+JSON.stringify(numeros.sound));

    this.audio.src = numeros.sound;


    this.audio.load();
    this.audio.play();

    numeros.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        numeros.reproduciendo = false;
      }, numeros.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /*reproducir(nume: Numeros){
    this.pausarSonido(nume);
    if(nume.reproduciendo){
      nume.reproduciendo=false;
      return;
    }
    console.log(nume);

    //let audio = new Audio();
    this.audio.src = nume.audio;


    this.audio.load();
    this.audio.play();

    nume.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        nume.reproduciendo = false;
      }, nume.duracion*300
    );

  }

  reproducir1(numerosi: Numerosi){
    this.pausarSonido1(numerosi);
    if(numerosi.reproduciendo){
      numerosi.reproduciendo=false;
      return;
    }
    console.log(numerosi);

    //let audio = new Audio();
    this.audio.src = numerosi.audio;


    this.audio.load();
    this.audio.play();

    numerosi.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        numerosi.reproduciendo = false;
      }, numerosi.duracion*300
    );

  }

  pausarSonido(numeSelected: Numeros){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let nume of this.numero){
      if(nume.imagen != numeSelected.imagen){
        nume.reproduciendo = false;
      }
    }
  }

  pausarSonido1(numerosiSelected: Numerosi){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let numerosi of this.numeroo){
      if(numerosi.imagen != numerosiSelected.imagen){
        numerosi.reproduciendo = false;
      }
    }
  }*/
}

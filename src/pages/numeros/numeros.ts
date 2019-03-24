import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Numeros} from "../../interface/interface.numeros";
import { NUMEROS } from '../../data/data.numeros';
import {Numerosi} from "../../interface/interface.numerosi";
import { NUMEROSI } from '../../data/data.numerosi';

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
  numeroo: Numerosi[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numero = NUMEROS.slice(0);
    this.numeroo = NUMEROSI.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

  reproducir(nume: Numeros){
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
      }, nume.duracion*1000
    );

  }

  reproducir1(numei: Numerosi){
    this.pausarSonido(numei);
    if(numei.reproduciendo){
      numei.reproduciendo=false;
      return;
    }
    console.log(numei);

    //let audio = new Audio();
    this.audio.src = numei.audio;


    this.audio.load();
    this.audio.play();

    numei.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        numei.reproduciendo = false;
      }, numei.duracion*1000
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

  pausarSonido1(numeiSelected: Numerosi){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let numei of this.numero){
      if(numei.imagen != numeiSelected.imagen){
        numei.reproduciendo = false;
      }
    }
  }
}

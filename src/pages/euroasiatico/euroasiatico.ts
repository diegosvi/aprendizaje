import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EUROA } from '../../data/data.euroa';
import  { Euroa } from '../../interface/interface.euroa';

/**
 * Generated class for the EuroasiaticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-euroasiatico',
  templateUrl: 'euroasiatico.html',
})
export class EuroasiaticoPage {

  eura: Euroa[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eura = EUROA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(euroa: Euroa){
    this.pausarSonido(euroa);
    if(euroa.reproduciendo){
      euroa.reproduciendo=false;
      return;
    }
    console.log(euroa);

    //let audio = new Audio();
    this.audio.src = euroa.audio;


    this.audio.load();
    this.audio.play();

    euroa.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        euroa.reproduciendo = false;
      }, euroa.duracion*1000
    );

  }


  pausarSonido(euroaSelected: Euroa){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let euroa of this.eura){
      if(euroa.imagen != euroa.imagen){
        euroa.reproduciendo = false;
      }
    }
  }


}

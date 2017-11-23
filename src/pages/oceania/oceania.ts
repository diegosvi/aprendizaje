import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Oceania} from "../../interface/interface.oceania";
import { OCEANIA } from '../../data/data.oceania';

/**
 * Generated class for the OceaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oceania',
  templateUrl: 'oceania.html',
})
export class OceaniaPage {

  oce: Oceania[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oce = OCEANIA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ocea: Oceania){
    this.pausarSonido(ocea);
    if(ocea.reproduciendo){
      ocea.reproduciendo=false;
      return;
    }
    console.log(ocea);

    //let audio = new Audio();
    this.audio.src = ocea.audio;


    this.audio.load();
    this.audio.play();

    ocea.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        ocea.reproduciendo = false;
      }, ocea.duracion*1000
    );

  }


  pausarSonido(oceaSelected: Oceania){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let ocea of this.oce){
      if(ocea.imagen != ocea.imagen){
        ocea.reproduciendo = false;
      }
    }
  }


}

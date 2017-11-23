import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EUROPA } from '../../data/data.europa';
import  { Europa } from '../../interface/interface.europa';

/**
 * Generated class for the EuropaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-europa',
  templateUrl: 'europa.html',
})
export class EuropaPage {

  eur: Europa[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eur = EUROPA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(euro: Europa){
    this.pausarSonido(euro);
    if(euro.reproduciendo){
      euro.reproduciendo=false;
      return;
    }
    console.log(euro);

    //let audio = new Audio();
    this.audio.src = euro.audio;


    this.audio.load();
    this.audio.play();

    euro.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        euro.reproduciendo = false;
      }, euro.duracion*1000
    );

  }


  pausarSonido(euroSelected: Europa){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let euro of this.eur){
      if(euro.imagen != euro.imagen){
        euro.reproduciendo = false;
      }
    }
  }

}

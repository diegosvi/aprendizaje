import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AFRICA } from '../../data/data.africa';
import  { Africa } from '../../interface/interface.africa';

/**
 * Generated class for the AfricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-africa',
  templateUrl: 'africa.html',
})
export class AfricaPage {

  afr: Africa[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.afr = AFRICA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }


  reproducir(afr: Africa){
    this.pausarSonido(afr);
    if(afr.reproduciendo){
      afr.reproduciendo=false;
      return;
    }
    console.log(afr);

    //let audio = new Audio();
    this.audio.src = afr.audio;


    this.audio.load();
    this.audio.play();

    afr.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        afr.reproduciendo = false;
      }, afr.duracion*1000
    );

  }


  pausarSonido(afrSelected: Africa){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let afri of this.afr){
      if(afri.imagen != afri.imagen){
        afri.reproduciendo = false;
      }
    }
  }

}

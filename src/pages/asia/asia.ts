import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ASIA } from '../../data/data.asia';
import  { Asia } from '../../interface/interface.asia';

/**
 * Generated class for the AsiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asia',
  templateUrl: 'asia.html',
})
export class AsiaPage {

  asi: Asia[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asi = ASIA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(asi: Asia){
    this.pausarSonido(asi);
    if(asi.reproduciendo){
      asi.reproduciendo=false;
      return;
    }
    console.log(asi);

    //let audio = new Audio();
    this.audio.src = asi.audio;


    this.audio.load();
    this.audio.play();

    asi.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        asi.reproduciendo = false;
      }, asi.duracion*1000
    );

  }


  pausarSonido(asiSelected: Asia){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let asia of this.asi){
      if(asia.imagen != asia.imagen){
        asia.reproduciendo = false;
      }
    }
  }


}

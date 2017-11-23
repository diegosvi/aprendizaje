import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAS } from '../../data/data.americas';
import  { Americas } from '../../interface/interface.americas';

/**
 * Generated class for the AmericasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-americas',
  templateUrl: 'americas.html',
})
export class AmericasPage {

  ame: Americas[] = [];
  audio: any = new Audio();
  tiempo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ame: Americas){
    this.pausarSonido(ame);
    if(ame.reproduciendo){
      ame.reproduciendo=false;
      return;
    }
    console.log(ame);

    //let audio = new Audio();
    this.audio.src = ame.audio;


    this.audio.load();
    this.audio.play();

    ame.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        ame.reproduciendo = false;
      }, ame.duracion*1000
    );

  }


  pausarSonido(ameSelected: Americas){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let amer of this.ame){
      if(amer.imagen != amer.imagen){
        amer.reproduciendo = false;
      }
    }
  }


}

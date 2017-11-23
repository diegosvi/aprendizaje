import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAN } from '../../data/data.american';
import  { American } from '../../interface/interface.american';

/**
 * Generated class for the AmericanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-american',
  templateUrl: 'american.html',
})
export class AmericanPage {

  ame: American[] = [];
  audio: any = new Audio();
  tiempo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAN.slice(0);
  }


  reproducir(ame: American){
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


  pausarSonido(ameSelected: American){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let amer of this.ame){
      if(amer.imagen != amer.imagen){
        amer.reproduciendo = false;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

}

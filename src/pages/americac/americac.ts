import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AMERICAC } from '../../data/data.americac';
import  { Americac } from '../../interface/interface.americac';

/**
 * Generated class for the AmericacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-americac',
  templateUrl: 'americac.html',
})
export class AmericacPage {

  ame: Americac[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ame = AMERICAC.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ame: Americac){
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


  pausarSonido(ameSelected: Americac){
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

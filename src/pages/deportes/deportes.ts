import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DEPORTES } from '../../data/data.deportes';
import  { Deportes } from '../../interface/interface.deportes';

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html',
})
export class DeportesPage {

  dep: Deportes[] = [];
  audio: any = new Audio();
  tiempo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dep = DEPORTES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(depo: Deportes){
    this.pausarSonido(depo);
    if(depo.reproduciendo){
      depo.reproduciendo=false;
      return;
    }
    console.log(depo);

    //let audio = new Audio();
    this.audio.src = depo.audio;


    this.audio.load();
    this.audio.play();

    depo.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        depo.reproduciendo = false;
      }, depo.duracion*1000
    );

  }


  pausarSonido(depoSelected: Deportes){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let depo of this.dep){
      if(depo.imagen != depo.imagen){
        depo.reproduciendo = false;
      }
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TERRESTRE} from '../../data/data.terrestre';
import  { Terrestre } from '../../interface/interface.terrestre';

/**
 * Generated class for the TerrestrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terrestre',
  templateUrl: 'terrestre.html',
})
export class TerrestrePage {

  terre: Terrestre[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.terre = TERRESTRE.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(ter: Terrestre){
    this.pausarSonido(ter);
    if(ter.reproduciendo){
      ter.reproduciendo=false;
      return;
    }
    console.log(ter);

    //let audio = new Audio();
    this.audio.src = ter.audio;


    this.audio.load();
    this.audio.play();

    ter.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        ter.reproduciendo = false;
      }, ter.duracion*1000
    );

  }


  pausarSonido(terSelected: Terrestre){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let ter of this.terre){
      if(ter.imagen != terSelected.imagen){
        ter.reproduciendo = false;
      }
    }
  }

}

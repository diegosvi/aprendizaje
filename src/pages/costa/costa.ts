import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COSTA } from '../../data/data.costa';
import  { Costa } from '../../interface/interface.costa';

/**
 * Generated class for the CostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-costa',
  templateUrl: 'costa.html',
})
export class CostaPage {

  cos: Costa[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cos = COSTA.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(cost: Costa){
    this.pausarSonido(cost);
    if(cost.reproduciendo){
      cost.reproduciendo=false;
      return;
    }
    console.log(cost);

    //let audio = new Audio();
    this.audio.src = cost.audio;


    this.audio.load();
    this.audio.play();

    cost.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        cost.reproduciendo = false;
      }, cost.duracion*1000
    );

  }


  pausarSonido(costSelected: Costa){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let cost of this.cos){
      if(cost.imagen != cost.imagen){
        cost.reproduciendo = false;
      }
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORAT } from '../../data/data.horat';
import  { Horat } from '../../interface/interface.horat';

/**
 * Generated class for the HoratPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horat',
  templateUrl: 'horat.html',
})
export class HoratPage {

  ht: Horat[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ht = HORAT.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(hot: Horat){
    this.pausarSonido(hot);
    if(hot.reproduciendo){
      hot.reproduciendo=false;
      return;
    }
    console.log(hot);

    //let audio = new Audio();
    this.audio.src = hot.audio;


    this.audio.load();
    this.audio.play();

    hot.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        hot.reproduciendo = false;
      }, hot.duracion*1000
    );

  }


  pausarSonido(hotSelected: Horat){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let hot of this.ht){
      if(hot.imagen != hotSelected.imagen){
        hot.reproduciendo = false;
      }
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HORAM } from '../../data/data.horam';
import  { Horam } from '../../interface/interface.horam';

/**
 * Generated class for the HoramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horam',
  templateUrl: 'horam.html',
})
export class HoramPage {

  hm: Horam[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hm = HORAM.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(hom: Horam){
    this.pausarSonido(hom);
    if(hom.reproduciendo){
      hom.reproduciendo=false;
      return;
    }
    console.log(hom);

    //let audio = new Audio();
    this.audio.src = hom.audio;


    this.audio.load();
    this.audio.play();

    hom.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        hom.reproduciendo = false;
      }, hom.duracion*1000
    );

  }


  pausarSonido(homSelected: Horam){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let hom of this.hm){
      if(hom.imagen != homSelected.imagen){
        hom.reproduciendo = false;
      }
    }
  }

}

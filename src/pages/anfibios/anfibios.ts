import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ANFIBIOS } from '../../data/data.anfibios';
import  { Anfibios } from '../../interface/interface.anfibios';

/**
 * Generated class for the AnfibiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anfibios',
  templateUrl: 'anfibios.html',
})
export class AnfibiosPage {

  anfibio: Anfibios[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.anfibio = ANFIBIOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(anfi: Anfibios){
    this.pausarSonido(anfi);
    if(anfi.reproduciendo){
      anfi.reproduciendo=false;
      return;
    }
    console.log(anfi);

    //let audio = new Audio();
    this.audio.src = anfi.audio;


    this.audio.load();
    this.audio.play();

    anfi.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        anfi.reproduciendo = false;
      }, anfi.duracion*1000
    );

  }


  pausarSonido(anfiSelected: Anfibios){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let anfi of this.anfibio){
      if(anfi.imagen != anfiSelected.imagen){
        anfi.reproduciendo = false;
      }
    }
  }

}

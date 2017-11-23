import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AVES } from '../../data/data.aves';
import  { Aves } from '../../interface/interface.aves';

/**
 * Generated class for the AvesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aves',
  templateUrl: 'aves.html',
})
export class AvesPage {

  ave: Aves[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ave = AVES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(aves: Aves){
    this.pausarSonido(aves);
    if(aves.reproduciendo){
      aves.reproduciendo=false;
      return;
    }
    console.log(aves);

    //let audio = new Audio();
    this.audio.src = aves.audio;


    this.audio.load();
    this.audio.play();

    aves.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        aves.reproduciendo = false;
      }, aves.duracion*1000
    );

  }


  pausarSonido(avesSelected: Aves){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let aves of this.ave){
      if(aves.imagen != avesSelected.imagen){
        aves.reproduciendo = false;
      }
    }
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DIAS } from '../../data/data.dias';
import  { Dias } from '../../interface/interface.dias';

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {

  dia: Dias[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dia = DIAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(dias: Dias){
    this.pausarSonido(dias);
    if(dias.reproduciendo){
      dias.reproduciendo=false;
      return;
    }
    console.log(dias);

    //let audio = new Audio();
    this.audio.src = dias.audio;


    this.audio.load();
    this.audio.play();

    dias.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        dias.reproduciendo = false;
      }, dias.duracion*1000
    );

  }


  pausarSonido(diasSelected: Dias){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let dias of this.dia){
      if(dias.imagen != diasSelected.imagen){
        dias.reproduciendo = false;
      }
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { COLORES } from '../../data/data.colores';
import  { Colores } from '../../interface/interface.colores';

/**
 * Generated class for the ColoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colores',
  templateUrl: 'colores.html',
})
export class ColoresPage {

  color: Colores[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = COLORES.slice(0);
    console.log(this.color);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(colo: Colores){
    this.pausarSonido(colo);
    if(colo.reproduciendo){
      colo.reproduciendo=false;
      return;
    }
    console.log(colo);

    //let audio = new Audio();
    this.audio.src = colo.audio;


    this.audio.load();
    this.audio.play();

    colo.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        colo.reproduciendo = false;
      }, colo.duracion*1000
    );

  }


  pausarSonido(coloSelected: Colores){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let colo of this.color){
      if(colo.imagen != coloSelected.imagen){
        colo.reproduciendo = false;
      }
    }
  }

}

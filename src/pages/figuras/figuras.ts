import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FIGURAS } from '../../data/data.figuras';
import  { Figuras } from '../../interface/interface.figuras';

/**
 * Generated class for the FigurasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-figuras',
  templateUrl: 'figuras.html',
})
export class FigurasPage {

  figura: Figuras[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.figura = FIGURAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(colo: Figuras){
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


  pausarSonido(coloSelected: Figuras){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let colo of this.figura){
      if(colo.imagen != coloSelected.imagen){
        colo.reproduciendo = false;
      }
    }
  }

}

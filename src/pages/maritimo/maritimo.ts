import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MARITIMO} from '../../data/data.maritimo';
import  { Maritimo } from '../../interface/interface.maritimo';

/**
 * Generated class for the MaritimoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maritimo',
  templateUrl: 'maritimo.html',
})
export class MaritimoPage {

  marit: Maritimo[] = [];
  audio: any = new Audio();
  tiempo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marit = MARITIMO.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(mari: Maritimo){
    this.pausarSonido(mari);
    if(mari.reproduciendo){
      mari.reproduciendo=false;
      return;
    }
    console.log(mari);

    //let audio = new Audio();
    this.audio.src = mari.audio;


    this.audio.load();
    this.audio.play();

    mari.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        mari.reproduciendo = false;
      }, mari.duracion*1000
    );

  }


  pausarSonido(mariSelected: Maritimo){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let mari of this.marit){
      if(mari.imagen != mariSelected.imagen){
        mari.reproduciendo = false;
      }
    }
  }
}

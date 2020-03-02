import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MARITIMO} from '../../data/data.maritimo';
import  { Maritimo } from '../../interface/interface.maritimo';


import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
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

  maritimos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.marit = MARITIMO.slice(0);

    this.pequeGameSrv.getTransporteM()
    .subscribe(maritimos=>{ 
      this.maritimos = maritimos;
      console.log(maritimos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(maritimos){
    console.log("esto es una prueba"+JSON.stringify(maritimos.sound));

    this.audio.src = maritimos.sound;


    this.audio.load();
    this.audio.play();

    maritimos.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        maritimos.reproduciendo = false;
      }, maritimos.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


/*  reproducir(mari: Maritimo){
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
  */
}

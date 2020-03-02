import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TERRESTRE} from '../../data/data.terrestre';
import  { Terrestre } from '../../interface/interface.terrestre';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the TerrestrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terrestre',
  templateUrl: 'terrestre.html',
})
export class TerrestrePage {

  terre: Terrestre[] = [];
  audio: any = new Audio();
  tiempo: any;
  terrestres = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.terre = TERRESTRE.slice(0);

    this.pequeGameSrv.getTransporteT()
    .subscribe(terrestres=>{ 
      this.terrestres = terrestres;
      console.log(terrestres);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(terrestres){
    console.log("esto es una prueba"+JSON.stringify(terrestres.sound));

    this.audio.src = terrestres.sound;


    this.audio.load();
    this.audio.play();

    terrestres.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        terrestres.reproduciendo = false;
      }, terrestres.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


 /* reproducir(ter: Terrestre){
    this.pausarSonido(ter);
    if(ter.reproduciendo){
      ter.reproduciendo=false;
      return;
    }
    console.log(ter);

    //let audio = new Audio();
    this.audio.src = ter.audio;


    this.audio.load();
    this.audio.play();

    ter.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        ter.reproduciendo = false;
      }, ter.duracion*1000
    );

  }


  pausarSonido(terSelected: Terrestre){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let ter of this.terre){
      if(ter.imagen != terSelected.imagen){
        ter.reproduciendo = false;
      }
    }
  }
*/
}

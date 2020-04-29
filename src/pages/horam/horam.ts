import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HORAM } from '../../data/data.horam';
import  { Horam } from '../../interface/interface.horam';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
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
  horas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.hm = HORAM.slice(0);

    this.pequeGameSrv.getHorasM()
    .subscribe(horas=>{ 
      this.horas = horas;
      console.log(horas);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(horas){
    console.log("esto es una prueba"+JSON.stringify(horas.sound));

    this.audio.src = horas.sound;


    this.audio.load();
    this.audio.play();

    horas.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        horas.reproduciendo = false;
      }, horas.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

 /* reproducir(hom: Horam){
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
*/
}

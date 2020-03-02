import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FRUTAS} from '../../data/data.frutas';
import  { Frutas } from '../../interface/interface.frutas';


import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the FrutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {

  fru: Frutas[] = [];
  audio: any = new Audio();
  tiempo: any;
frutas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    this.fru = FRUTAS.slice(0);

    this.pequeGameSrv.getFrutas()
    .subscribe(frutas=>{ 
      this.frutas = frutas;
      console.log(frutas);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(frutas){
    console.log("esto es una prueba"+JSON.stringify(frutas.sound));

    this.audio.src = frutas.sound;


    this.audio.load();
    this.audio.play();

    frutas.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        frutas.reproduciendo = false;
      }, frutas.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


 /* reproducir(frut: Frutas){
    this.pausarSonido(frut);
    if(frut.reproduciendo){
      frut.reproduciendo=false;
      return;
    }
    console.log(frut);

    //let audio = new Audio();
    this.audio.src = frut.audio;


    this.audio.load();
    this.audio.play();

    frut.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        frut.reproduciendo = false;
      }, frut.duracion*1000
    );

  }


  pausarSonido(frutSelected: Frutas){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let frut of this.fru){
      if(frut.imagen != frutSelected.imagen){
        frut.reproduciendo = false;
      }
    }
  }
  */
}

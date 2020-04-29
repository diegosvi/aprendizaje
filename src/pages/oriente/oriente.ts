import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ORIENTE } from '../../data/data.oriente';
import  { Oriente } from '../../interface/interface.oriente';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the OrientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oriente',
  templateUrl: 'oriente.html',
})
export class OrientePage {

  ori: Oriente[] = [];
  audio: any = new Audio();
  tiempo: any;
  orientes = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.ori = ORIENTE.slice(0);

    this.pequeGameSrv.getOriente()
    .subscribe(orientes=>{ 
      this.orientes = orientes;
      console.log(orientes);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(orientes){
    console.log("esto es una prueba"+JSON.stringify(orientes.sound));

    this.audio.src = orientes.sound;


    this.audio.load();
    this.audio.play();

    orientes.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        orientes.reproduciendo = false;
      }, orientes.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }


/*  reproducir(orie: Oriente){
    this.pausarSonido(orie);
    if(orie.reproduciendo){
      orie.reproduciendo=false;
      return;
    }
    console.log(orie);

    //let audio = new Audio();
    this.audio.src = orie.audio;


    this.audio.load();
    this.audio.play();

    orie.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        orie.reproduciendo = false;
      }, orie.duracion*1000
    );

  }


  pausarSonido(orieSelected: Oriente){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let orie of this.ori){
      if(orie.imagen != orie.imagen){
        orie.reproduciendo = false;
      }
    }
  }
*/
}

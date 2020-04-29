import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { REPTILES} from '../../data/data.reptiles';
import  { Reptiles } from '../../interface/interface.reptiles';

import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';

/**
 * Generated class for the ReptilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reptiles',
  templateUrl: 'reptiles.html',
})
export class ReptilesPage {

  reptil: Reptiles[] = [];
  audio: any = new Audio();
  tiempo: any;
  reptiles = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.reptil = REPTILES.slice(0);


    this.pequeGameSrv.getReptiles()
    .subscribe(reptiles=>{ 
      this.reptiles = reptiles;
      console.log(reptiles);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(reptiles){
    console.log("esto es una prueba"+JSON.stringify(reptiles.sound));

    this.audio.src = reptiles.sound;


    this.audio.load();
    this.audio.play();

    reptiles.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        reptiles.reproduciendo = false;
      }, reptiles.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

/*
  reproducir(rep: Reptiles){
    this.pausarSonido(rep);
    if(rep.reproduciendo){
      rep.reproduciendo=false;
      return;
    }
    console.log(rep);

    //let audio = new Audio();
    this.audio.src = rep.audio;


    this.audio.load();
    this.audio.play();

    rep.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        rep.reproduciendo = false;
      }, rep.duracion*1000
    );

  }


  pausarSonido(repSelected: Reptiles){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let rep of this.reptil){
      if(rep.imagen != repSelected.imagen){
        rep.reproduciendo = false;
      }
    }
  }
*/
}

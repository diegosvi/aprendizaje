import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { PROFESIONES} from '../../data/data.profesiones';
import  { Profesiones } from '../../interface/interface.profesiones';


import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the ProfesionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesiones',
  templateUrl: 'profesiones.html',
})
export class ProfesionesPage {

  prof: Profesiones[] = [];
  audio: any = new Audio();
  tiempo: any;
  profesiones = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
    //this.prof = PROFESIONES.slice(0);

    this.pequeGameSrv.getProfesiones()
    .subscribe(profesiones=>{ 
      this.profesiones = profesiones;
      console.log(profesiones);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  pruebaAudio(profesiones){
    console.log("esto es una prueba"+JSON.stringify(profesiones.sound));

    this.audio.src = profesiones.sound;


    this.audio.load();
    this.audio.play();

    profesiones.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        profesiones.reproduciendo = false;
      }, profesiones.duracion*300
    );
    
  }

  dismiss(){
    this.navCtrl.pop();
  }

/*  reproducir(profe: Profesiones){
    this.pausarSonido(profe);
    if(profe.reproduciendo){
      profe.reproduciendo=false;
      return;
    }
    console.log(profe);

    //let audio = new Audio();
    this.audio.src = profe.audio;


    this.audio.load();
    this.audio.play();

    profe.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        profe.reproduciendo = false;
      }, profe.duracion*1000
    );

  }


  pausarSonido(profeSelected: Profesiones){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let profe of this.prof){
      if(profe.imagen != profeSelected.imagen){
        profe.reproduciendo = false;
      }
    }
  }
*/
}

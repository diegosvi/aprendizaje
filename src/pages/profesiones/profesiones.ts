import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PROFESIONES} from '../../data/data.profesiones';
import  { Profesiones } from '../../interface/interface.profesiones';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prof = PROFESIONES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(profe: Profesiones){
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

}

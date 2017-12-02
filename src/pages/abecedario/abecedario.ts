import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ABECEDARIO } from '../../data/data.abecedario';
import  { Abecedario } from '../../interface/interface.abecedario';

/**
 * Generated class for the AbecedarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abecedario',
  templateUrl: 'abecedario.html',
})
export class AbecedarioPage {

  abeceda: Abecedario[] = [];
  audio: any = new Audio();
  tiempo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.abeceda = ABECEDARIO.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }


  reproducir(abecedario: Abecedario){
    this.pausarSonido(abecedario);
    if(abecedario.reproduciendo){
      abecedario.reproduciendo=false;
      return;
    }
    console.log(abecedario);

    //let audio = new Audio();
    this.audio.src = abecedario.audio;


    this.audio.load();
    this.audio.play();

    abecedario.reproduciendo=true;
    this.tiempo=setTimeout (
      () => {
        abecedario.reproduciendo = false;
      }, abecedario.duracion*300
    );

  }


  pausarSonido(abecedarioSelected: Abecedario){
    clearTimeout(this.tiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let abecedario of this.abeceda){
      if(abecedario.imagen != abecedarioSelected.imagen){
        abecedario.reproduciendo = false;
      }
    }
  }

}

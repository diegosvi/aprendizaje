import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FRUTAS} from '../../data/data.frutas';
import  { Frutas } from '../../interface/interface.frutas';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fru = FRUTAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(frut: Frutas){
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
}

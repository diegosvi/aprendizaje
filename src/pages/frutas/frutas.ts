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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fru = FRUTAS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(fru: Frutas) {
    console.log(fru);
    let audio = new Audio();
    audio.src = fru.audio;


    audio.load();
    audio.play();

    fru.reproduciendo = true;
    setTimeout(
      () => {
        fru.reproduciendo = false;
      }, fru.duracion * 1000
    );

  }

}

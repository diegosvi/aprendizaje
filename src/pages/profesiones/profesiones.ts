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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prof = PROFESIONES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbecedarioPage');
  }

  reproducir(prof: Profesiones) {
    console.log(prof);
    let audio = new Audio();
    audio.src = prof.audio;


    audio.load();
    audio.play();

    prof.reproduciendo = true;
    setTimeout(
      () => {
        prof.reproduciendo = false;
      }, prof.duracion * 1000
    );

  }

}

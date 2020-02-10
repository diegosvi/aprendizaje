import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AnimalesPage, PrincipalPage, IntermedioPage, AvanzadoPage, EntradaPage, ProfesionesPage} from '../index.pages';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  fruits = [];
  //fruit = {nombre:null, imagen:null, sound:null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider) {
  
    pequeGameSrv.getFruits()
      .subscribe(fruits=>{
        console.log(fruits)
        this.fruits = fruits;
      });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  irbasico(){
    this.navCtrl.push(PrincipalPage);
  }
  iranimales(){
    this.navCtrl.push(AnimalesPage);
  }
  irintermedio(){
    this.navCtrl.push(IntermedioPage);
  }
  irprofesion(){
    this.navCtrl.push(ProfesionesPage);
  }
  iravanzado(){
    this.navCtrl.push(AvanzadoPage);
  }
  irinicio(){
    this.navCtrl.push(EntradaPage);
  }
}

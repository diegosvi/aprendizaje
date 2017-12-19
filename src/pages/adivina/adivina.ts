import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdivinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adivina',
  templateUrl: 'adivina.html',
})
export class AdivinaPage {

  num:number;
  mayorMenor: string = '...';
  numSecret: number = this.numAleatorio(0,20);

  constructor(public navCtrl: NavController) {

  }

  compruebaNumero(){
    if(this.num)
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'menor';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'mayor';
      }
      else{
        this.mayorMenor = 'igual';
      }
    }
  }

  numAleatorio(a,b)
  {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdivinaPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  maxnum: number =20;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }

  compruebaNumero(){
    if(this.num <= this.maxnum )
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'Menor';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'Mayor';
      }
      else{
        this.mayorMenor = 'igual';
      }
    }else
    {
      this.mayorMenor = '';
      this.dataAlert('Oops!!..','Solo números del 0 al 20... :)');
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

  dataAlert(title,message, ) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdivinaPage');
  }

}

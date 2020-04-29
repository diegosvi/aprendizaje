import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { PavanzadoPage } from "../pavanzado/pavanzado";
import {PbasicoPage} from "../pbasico/pbasico";
import {PintermedioPage} from "../pintermedio/pintermedio";
import { default as EntradaPage } from "../entrada/entrada";

/**
 * Generated class for the PracticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica',
  templateUrl: 'practica.html',
})
export class PracticaPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticaPage');
  }

  showConfirm(){
    let alert = this.alertCtrl.create({
      title: 'Cerrar Sesion!',
      message: 'Seguro quiere salir',
      buttons: [
        
        {
          text: 'NO',
          role: 'NO',
          handler: () => {
            console.log('Canceled');
        }

        },
        {
          text:'SI',
          handler: () => {
            console.log('Ok')
            this.navCtrl.push(EntradaPage);
          }
        }  

      ]
    });

    alert.present();
  }

  irpbasico(){
    this.navCtrl.push(PbasicoPage);
  }

  irpintermedio(){
    this.navCtrl.push(PintermedioPage);
  }

  irpavanzado(){
    this.navCtrl.push(PavanzadoPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {  AnimalesPage, PrincipalPage, IntermedioPage, AvanzadoPage, ProfesionesPage} from '../index.pages';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
import { default as EntradaPage } from "../entrada/entrada";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

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
  nombres = [];
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, 
    public navParams: NavParams, public pequeGameSrv:PequesGameServiceProvider, public afauth: AngularFireAuth,) {

      this.pequeGameSrv.getNombres()
      .subscribe(nombres=>{ 
        this.nombres = this.nombres;
        console.log(this.nombres);
      });
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

cerrar(){
  this.afauth.auth.signOut();
  this.navCtrl.push(EntradaPage);
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

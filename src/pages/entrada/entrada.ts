import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
import {TabsPage} from "../tabs/tabs";
import {RegistroPage} from "../registro/registro";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { PracticaPage } from "../practica/practica";
import { InformacionPage, PbasicoPage} from '../index.pages';
/**
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export default class EntradaPage {

email: string;
password: string;

  constructor(public afauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, 
    private pequeGameSrv:PequesGameServiceProvider) {

      
}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntradaPage');
  }

  


  irtabs(){
    this.navCtrl.push(TabsPage);
  }

  irRegistro(){
    this.navCtrl.push(RegistroPage);
  }

  onSubmitLogin(){
    console.log('estas en la funcion')
    this.pequeGameSrv.login(this.email, this.password).then(auth=>{
      this.navCtrl.push(TabsPage);
    }).catch(err=> alert('Los datos son incorrectos o no existe el usuario'))  
  }

  irGoogle(){
    this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.navCtrl.push(InformacionPage);
    console.log('ingreso'); 
  }

}

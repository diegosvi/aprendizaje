import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
import {TabsPage} from "../tabs/tabs";
import {RegistroPage} from "../registro/registro";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private pequesgameservice:PequesGameServiceProvider) {
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
    this.pequesgameservice.login(this.email, this.password).then(res=>{
      this.navCtrl.push(TabsPage)
    }).catch(err=> alert('Los datos son incorrectos o no existe el usuario'))  
  }

}

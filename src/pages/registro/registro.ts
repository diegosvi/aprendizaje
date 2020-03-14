import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PequesGameServiceProvider } from '../../providers/peques-game-service/peques-game-service';
import { default as EntradaPage } from "../entrada/entrada";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  public  email : string;
  public  name : string;
  public password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pequesgameservice:PequesGameServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  irEntrada(){
    this.navCtrl.push(EntradaPage);
  }

  OnSubmitRegister(){
    this.pequesgameservice.register(this.email, this.password,this.name).then( auth => {
      this.navCtrl.push(EntradaPage)
      console.log(auth)
    }).catch(err => alert('Debe llenar todos los campos'))
  }

}

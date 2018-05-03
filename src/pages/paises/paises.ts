import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AmericaPage} from '../../pages/america/america';


/**
 * Generated class for the PaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  irAmerica(){
    this.navCtrl.push(AmericaPage);
  }





  mostrarMenu(){
    this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  }

}

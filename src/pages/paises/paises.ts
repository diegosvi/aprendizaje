import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AsiaPage} from '../../pages/asia/asia';
import { AfricaPage} from '../../pages/africa/africa';
import { EuropaPage} from '../../pages/europa/europa';
import { OceaniaPage} from '../../pages/oceania/oceania';
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

  irAsia(){
    this.navCtrl.push(AsiaPage);
  }

  irAfrica(){
    this.navCtrl.push(AfricaPage);
  }
  irAmerica(){
    this.navCtrl.push(AmericaPage);
  }

  irEuropa(){
    this.navCtrl.push(EuropaPage);
  }
  irOceania(){
    this.navCtrl.push(OceaniaPage);
  }




  mostrarMenu(){
    this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  }

}

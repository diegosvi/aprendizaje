import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CostaPage} from '../../pages/costa/costa';
import { SierraPage} from '../../pages/sierra/sierra';
import { OrientePage} from '../../pages/oriente/oriente';
import { InsularPage} from '../../pages/insular/insular';

/**
 * Generated class for the ProvinciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provincias',
  templateUrl: 'provincias.html',
})
export class ProvinciasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvinciasPage');
  }


  irSierra(){
    this.navCtrl.push(SierraPage);
  }
  irCosta(){
    this.navCtrl.push(CostaPage);
  }

  irOriente(){
    this.navCtrl.push(OrientePage);
  }

  irInsular(){
    this.navCtrl.push(InsularPage);
  }

  mostrarMenu(){
    this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  }
}

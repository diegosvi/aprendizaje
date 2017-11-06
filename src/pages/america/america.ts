import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AmericasPage} from '../../pages/americas/americas';
import { AmericacPage} from '../../pages/americac/americac';
import { AmericanPage} from '../../pages/american/american';

/**
 * Generated class for the AmericaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-america',
  templateUrl: 'america.html',
})
export class AmericaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalesPage');
  }
  irAmericas(){
    this.navCtrl.push(AmericasPage);
  }

  irAmericac(){
    this.navCtrl.push(AmericacPage);
  }

  irAmerican(){
    this.navCtrl.push(AmericanPage);
  }



  // mostrarMenu(){
  //   this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  // }
}

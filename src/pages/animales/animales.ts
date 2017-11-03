import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MamiferosPage} from '../../pages/mamiferos/mamiferos';
import { AvesPage} from '../../pages/aves/aves';
import { PecesPage} from '../../pages/peces/peces';
import { ReptilesPage} from '../../pages/reptiles/reptiles';
import { AnfibiosPage} from '../../pages/anfibios/anfibios';
import { AntropodosPage} from '../../pages/antropodos/antropodos';

/**
 * Generated class for the AnimalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animales',
  templateUrl: 'animales.html',
})
export class AnimalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalesPage');
  }
  irMamiferos(){
    this.navCtrl.push(MamiferosPage);
  }

  irPeces(){
    this.navCtrl.push(PecesPage);
  }

  irAves(){
    this.navCtrl.push(AvesPage);
  }
  irReptiles(){
    this.navCtrl.push(ReptilesPage);
  }

  irAnfibios(){
    this.navCtrl.push(AnfibiosPage);
  }

  irArtropodos(){
    this.navCtrl.push(AntropodosPage);
  }

  mostrarMenu(){
    this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AbecedarioPage} from '../../pages/abecedario/abecedario';
import { NumerosPage} from '../../pages/numeros/numeros';
import { RelojPage} from '../../pages/reloj/reloj';
import { DiasPage} from '../../pages/dias/dias';
import { ColoresPage} from '../../pages/colores/colores';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  // pokedex : any = AbecedarioPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  irAbecedario(){
    this.navCtrl.push(AbecedarioPage);
  }

  irNumeros(){
    this.navCtrl.push(NumerosPage);
  }
  irColores(){
    this.navCtrl.push(ColoresPage);
  }

  irReloj(){
    this.navCtrl.push(RelojPage);
  }
  irDias(){
    this.navCtrl.push(DiasPage);
  }



  mostrarMenu(){
    this._menuCtrl.toggle(); //sabe si esta abierto o cerrado el menu
  }
}

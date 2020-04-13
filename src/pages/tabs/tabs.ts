import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage, PracticaPage} from '../index.pages';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any ;
  tab2: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = InformacionPage;
    this.tab2 = PracticaPage;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoramPage} from '../../pages/horam/horam';
import { HoratPage} from '../../pages/horat/horat';

/**
 * Generated class for the RelojPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reloj',
  templateUrl: 'reloj.html',
})
export class RelojPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelojPage');
  }

  irHoram(){
    this.navCtrl.push(HoramPage);
  }
  irHorat(){
    this.navCtrl.push(HoratPage);
  }

}

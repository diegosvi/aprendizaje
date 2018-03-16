import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JuegocolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegocol',
  templateUrl: 'juegocol.html',
})
export class JuegocolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegocolPage');
  }

  // var c;
  // var d;
  // var e;
  // var f;
  // var g;
  //
  // function color(){
  //
  //   c = document.getElementById("color1");
  //   c.style.backgroundColor = c.style.backgroundColor == "blue" ? "red" : c.style.backgroundColor == "red" ? "yellow" : c.style.backgroundColor == "yellow" ? "green" : "blue" ;
  // }
  //
  // function color1(){
  //   d = document.getElementById("color2");
  //   d.style.backgroundColor = d.style.backgroundColor == "yellow" ? "blue" : d.style.backgroundColor == "blue" ? "green" : d.style.backgroundColor == "green" ? "red" : "yellow" ;
  // }
  //
  // function color2(){
  //   e = document.getElementById("color3");
  //   e.style.backgroundColor = e.style.backgroundColor == "green" ? "yellow" : e.style.backgroundColor == "yellow" ? "red" : e.style.backgroundColor == "red" ? "blue" : "green" ;
  //
  // }
  //
  // function color3(){
  //   f = document.getElementById("color4");
  //   f.style.backgroundColor = f.style.backgroundColor == "red" ? "green" : f.style.backgroundColor == "green" ? "blue" : f.style.backgroundColor == "blue" ? "yellow" : "red" ;
  // }
  //
  // function color4(){
  //   g = document.getElementById("color5");
  //   g.style.backgroundColor = g.style.backgroundColor == "red" ? "green" : g.style.backgroundColor == "green" ? "blue" : g.style.backgroundColor == "blue" ? "yellow" : "red" ;
  // }
  //
  // function stop(){
  //   if (c.style.backgroundColor == g.style.backgroundColor ){
  //     clearInterval(o);
  //   }
  // }
  //
  //
  // var o =  setInterval(function () {
  //   color();
  // }, 200);
  //
  // function stop1(){
  //   if (d.style.backgroundColor == g.style.backgroundColor){
  //     clearInterval(p);
  //     alert("Felicidades");
  //   }
  // }
  //
  // var p =  setInterval(function () {
  //   color1();
  // }, 200);
  //
  // function stop2(){
  //   if (e.style.backgroundColor == g.style.backgroundColor){
  //     clearInterval(q);
  //   }
  // }
  //
  // var q =  setInterval(function () {
  //   color2();
  // }, 200);
  //
  // function stop3(){
  //   if (f.style.backgroundColor == g.style.backgroundColor){
  //     clearInterval(r);
  //   }
  // }
  //
  // var r =  setInterval(function () {
  //   color3();
  // }, 200);

}


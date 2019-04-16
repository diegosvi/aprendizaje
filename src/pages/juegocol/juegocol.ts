import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  Selectgroceries: any;
  life: number = 5;
  valor: number = 0;


  groceries = [{
    id:1,
    color: 'primary',
    name: 'azul',
  },
    {
      id:2,
      color: 'danger',
      name: 'rojo',
    },
    {
      id:3,
      color: 'secondary',
      name: 'verde',
    }
  ]


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {


    this.tagAleatorio();

  }


  tagAleatorio(){
    this.Selectgroceries = this.groceries[Math.floor(Math.random()*3)]
  }



  chooseColor(color) {
    if(this.Selectgroceries.name == color.name){
      console.log("color correcto")
      this.valor +=10
      this. tagAleatorio();
      if(this.valor == 50){
        this.dataAlert('Respuesta','Ganaste!!!...');
      }
    }else{
      //this.dataAlert('Respuesta','Color Incorrecto... Vuelve a intentar');
      this.life-=1;
      if(this.life == 0){
        this.dataAlert('Respuesta','Vuelve a intentar');
        //this.volverJuagr();
      }
    }
  }

  dataAlert(title,message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  volverJuagr(){
    this.tagAleatorio();
    this.valor = 0;
    this.life = 5;
  }


}


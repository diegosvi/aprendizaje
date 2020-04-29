import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

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

  
  Selectgroceries: any;
  life: number = 3;
  valor: number = 0;


  groceries = [{
    id:1,
    color: 'primary',
    name: 'Azul',
  },
    {
      id:2,
      color: 'danger',
      name: 'Rojo',
    },
    {
      id:3,
      color: 'secondary',
      name: 'Verde',
    },
    {
      id:4,
      color: 'warning',
      name: 'Amarillo',
    }
  ]


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {


    this.tagAleatorio();

  }


  tagAleatorio(){
    this.Selectgroceries = this.groceries[Math.floor(Math.random()*4)]
  }



  chooseColor(color) {
    if(this.Selectgroceries.name == color.name){
      console.log("color correcto")
      this.valor +=10
      this. tagAleatorio();
      if(this.valor == 50){
        this.dataAlert('FELICITACIONES','Ganaste!!!...');
      }
    }else{
      //this.dataAlert('Respuesta','Color Incorrecto... Vuelve a intentar');
      this.life-=1;
      if(this.life == 0){
        this.dataAlert('PERDISTE',' Vuelve a intentar');
        //this.volverJuagr();
      }
    }
  }

  dataAlert(title,message, ) {
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
    this.life = 3;
  }


}


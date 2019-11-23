import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartas',
  templateUrl: 'cartas.html',
})



export class CartasPage {

  isFlipped: boolean = false;//flip card

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*let ArregloCartasBase = [];

    let carta = {id: '', valor: 0, url :''};
    let nombreCarpeta = '';
    let imagen = '';
    for(let i = 1; i <= 5; i++){
      carta.id = 'CARTA_'+i;
      carta.valor = i;
      if(i === 1) imagen = 'a.png';
      if(i === 2) imagen = 'b.png';
      if(i === 3) imagen = 'c.png';
      if(i === 4) imagen = 'd.png';
      if(i === 5) imagen = 'e.png';

      carta.url = '../img/'+nombreCarpeta+'/'+imagen;
      ArregloCartasBase.push(carta);

    }
    let pares = [];
    pares = ArregloCartasBase;
    //uno los 2 arreglos
    ArregloCartasBase = ArregloCartasBase.concat(pares);
    let estaMezclado = false;
    let htmlCartas = '';
    let cartasCompletas = [];
    let  aleatorio = 0;
    for (let i = 0 ; i < 10; i++) {
      aleatorio = Math.floor(Math.random()*(ArregloCartasBase.length));
      let seleccion = ArregloCartasBase[aleatorio];
      console.log(seleccion.id);
      ArregloCartasBase.splice(aleatorio, 1);
      cartasCompletas.push(seleccion);
    }
    //crea el html para mostrar las cartas
    for(let i = 0; i < cartasCompletas.length ; i++){
      htmlCartas+= "<div id='"+cartasCompletas[i].id+"'><img src='"+cartasCompletas[i].url+"'>"+cartasCompletas[i].valor+"</div>";
    }

    document.getElementById("ContenedorCartas").innerHTML = htmlCartas;


*/


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CartasPage');
  }


  flip(){
  	if (this.isFlipped == true) {
      this.isFlipped = false;
      //Card Data by ID
      console.log("vuelta1")
  	}else{
      this.isFlipped = true;
      console.log("vuelta2")
  	}
  }


}

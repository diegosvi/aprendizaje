import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PintermedioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var htmlCartas = '';
var cartasCompletas = [];

@IonicPage()
@Component({
  selector: 'page-pintermedio',
  templateUrl: 'pintermedio.html',
})

export class PintermedioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let ArregloCartasBase = [];

//url: assets/img/abs/b.jpg
    let nombreCarpeta = 'abs';
    let imagen = '';
    for(let i = 1; i <= 5; i++){
      let carta = {id: '', valor: 0, url :''};
      carta.id = 'CARTA_'+i;
      carta.valor = i;
      if(i === 1) imagen = 'a.jpg';
      if(i === 2) imagen = 'b.jpg';
      if(i === 3) imagen = 'c.jpg';
      if(i === 4) imagen = 'd.jpg';
      if(i === 5) imagen = 'e.jpg';
      console.log("Carta: "+carta.id);
      carta.url = '../assets/img/'+nombreCarpeta+'/'+imagen;
      ArregloCartasBase.push(carta);

    }
    let pares = [];
    pares = ArregloCartasBase;
    //uno los 2 arreglos
    ArregloCartasBase = ArregloCartasBase.concat(pares);

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
      htmlCartas+= "<div onclick='voltearCarta(this)' class='carta' id='"+cartasCompletas[i].id+"'><img src='../assets/img/adivina.jpg'>"+cartasCompletas[i].valor+"</div>";
    }




  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PintermedioPage');
    document.getElementById("ContenedorCartas").innerHTML = htmlCartas;

    //window.addEventListener("click", voltearCarta(this))

  }

  aumentarFallos(carta): void {
    let id = carta.id;
    let cartaActual = document.getElementById(id);
    let nombreImagen = cartasCompletas.find(x=> x.id === id).url;
    let imagenCarta = cartaActual.childNodes[0];
    imagenCarta[0].src = nombreImagen;
  }



}

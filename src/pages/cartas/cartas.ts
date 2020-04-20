import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { PintermedioPage } from '../../pages/pintermedio/pintermedio';

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

  @ViewChild(Slides) slides: Slides;
  isFlipped: boolean = false;//flip card

  images = [
    {id: 1, url: "/assets/img/images/a.jpg"},
    {id: 2, url: "/assets/img/images/amaril.png"},
    {id: 3, url: "/assets/img/images/leon.jpg"},
    {id: 4, url: "/assets/img/images/diciembre.jpg"}
   ];
   //citrus: this.images.slice:0:3;
   public images_inact = "/assets/img/col/abejaM.jpg";
   public cards = [];
   private last_select_id = null;
   private aciertos = 4;
   private count_aciertos = 0;
   public intentos = 12;
   public cont_intentos = 0;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartasPage');
  }

  ngOnInit() {
    let count_index = 0;
    for (let i = 0; i < this.aciertos * 2; i++) {
     if (count_index == this.aciertos) {
      count_index = 0;
     }
     let img = this.images[count_index];
     this.cards.push({
      id: img.id,
      url: img.url,
      visible: false, //si la imagen se muestra
      active: true //seleccionable
     });
     count_index++;
    }
    this.RandomArray(this.cards);
   }
  
  
   card_selected(idx) {
    if (!this.cards[idx].active) {
     return;
    }
    this.cards[idx].visible = true;
  
    if (this.last_select_id == null) {
     this.last_select_id = idx;
     this.cards[idx].visible = true;
     this.cards[idx].active = false;
    } else {
     if (this.cards[this.last_select_id].id == this.cards[idx].id) { //aumentar aciertos si coinciden
      this.count_aciertos++;
      this.cards[idx].visible = true;
      this.cards[idx].active = false;
      this.last_select_id = null;
     } else { //no hacen match
  
      let _this = this;
      setTimeout(function () {
       _this.cards[_this.last_select_id].visible = false; //ocultar
       _this.cards[_this.last_select_id].active = true; //activar
       _this.cards[idx].visible = false;
       _this.last_select_id = null;
      }, 0.2 * 1000)
  
     }
    }
    if (this.aciertos == this.count_aciertos) {
     alert("Juego Terminado");
    //window.location.reload();
     this.irIntermed();
     //this.volverJuagr();
    }
    else if (this.cont_intentos == this.intentos - 1) {
     alert("Perdiste");
     this.irIntermed();
     this.intentos=0;
     //window.location.reload();
    // this.volverJuagr();
    }
    this.cont_intentos++;
  
   }
  
   RandomArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
  
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
    }
  
    return array;
   }

   irIntermed(){
    this.navCtrl.push(PintermedioPage);
  }

  volverJuagr(){
    this.RandomArray(this.cards);
    this.intentos = 12;
  }
  

 


}

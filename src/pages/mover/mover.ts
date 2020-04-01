import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mover',
  templateUrl: 'mover.html',
})
export class MoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoverPage');
  }

  valor: number = 0;

  allowDrop(ev) {
    ev.preventDefault();
  }
  
   drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
  }
  
   drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.testing();
  }


   testing(){
    var correcto = 1;
    var pokes = document.getElementsByClassName("pokemon");
    for(var i=0;i<pokes.length;i++){
       if(pokes[i].getAttribute("name") != pokes[i].parentElement.getAttribute("id")){
         correcto = correcto*0;
         break;
       }
    }
    if(correcto == 1){
      document.getElementById("resultado").innerHTML = "CORRECTO"; 
    }else{
      document.getElementById("resultado").innerHTML = "INCORRECTO";
    }
    
  }


}

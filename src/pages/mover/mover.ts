import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {DragulaService} from "ng2-dragula";
import {Subscription} from "rxjs";

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
  subs = new Subscription();

  valor: number = 0;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, private dragulaService: DragulaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoverPage');
  }


  ngOnInit(){
    this.subs.add(this.dragulaService.drop("DRAGULA_FACTS")
      .subscribe(({ name, el, target, source, sibling }) => {
        let c1 = false;
        let c2 = false;
        let cuadro1 = document.getElementById("fuego").getElementsByTagName("img");
        let cuadro2 = document.getElementById("agua").getElementsByTagName("img");

        for (var i in cuadro1){
          let item_a = cuadro1[i];
          console.log(item_a.name);
          if (item_a.name == "agua"){
            c1 = true;
          }
        }
        console.log(cuadro2)
        for (var j in cuadro2){
          let item_b = cuadro2[j];
          console.log(item_b.name);
          if (item_b.name == "fuego"){
            c2 = true;
          }
        }

        if(c1==false && c2==false){
          document.getElementById("resultado").innerHTML = "CORRECTO";
          
          //this.dataAlert('FELICITACIONES','Ganaste!!!...');
        }else{
          document.getElementById("resultado").innerHTML = "INCORRECTO";
        }

      })
    );
  }

  dataAlert(title,message, ) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

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

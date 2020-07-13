import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

import 'rxjs/add/operator/toPromise';

import * as firebase from 'firebase/app';
import 'firebase/storage';
/*
  Generated class for the PequesGameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PequesGameServiceProvider {

  constructor( private afDb:AngularFireDatabase, private afAuth:AngularFireAuth,private db: AngularFirestore  ) {
    console.log('Hello PequesGameServiceProvider Provider');
  } 

login(email:string, passwword:string){

  return new Promise((resolve, rejected)=>{
    this.afAuth.auth.signInWithEmailAndPassword(email, passwword).then(user=>{
      resolve(user)
    }).catch(err => rejected(err))
  });
}

register(email : string, password : string, name : string){

  return new Promise ((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
         console.log(res.user.uid);
      const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          name : name,
          uid : uid
        })
      
      resolve(res)
    }).catch( err => reject(err))
  })
  


}

//Register, SignIn, SignOut
public createUser(email,password,data){
  return this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(confirm=>{
    data.id=confirm.user.uid;
    this.afDb.object('Usuario/'+confirm.user.uid).set(data);
  }).catch(e=>{
    //console.log(e)
    return e;
  })
} 

logout(){
  this.afAuth.auth.signOut();
}

  public getAbecedarios(){
    return this.afDb.list('Abecedario/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getAbecedario(id){
    return this.afDb.object('Abecedario/'+id).valueChanges();
    //Devolvera la letra con el id que le pasamos por parametro
  }

  public getNumeros(){
    return this.afDb.list('Numeros/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getColores(){
    return this.afDb.list('Colores/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getFiguras(){
    return this.afDb.list('Figuras/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getMamiferos(){
    return this.afDb.list('Animales/Mamiferos/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getPeces(){
    return this.afDb.list('Animales/Peces').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getAves(){
    return this.afDb.list('Animales/Aves').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getReptiles(){
    return this.afDb.list('Animales/Reptiles').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getInvertebrados(){
    return this.afDb.list('Animales/Invertebrados').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getAnfibios(){
    return this.afDb.list('Animales/Anfibios').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getHorasM(){
    return this.afDb.list('Horas/horasManana').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getHorasT(){
    return this.afDb.list('Horas/horasTarde').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getDias(){
    return this.afDb.list('Dias/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getMeses(){
    return this.afDb.list('Meses/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getProfesiones(){
    return this.afDb.list('Profesiones/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getTransporteA(){
    return this.afDb.list('Transporte/Aerero/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getTransporteM(){
    return this.afDb.list('Transporte/Maritimo/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getTransporteT(){
    return this.afDb.list('Transporte/Terrestre/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getFrutas(){
    return this.afDb.list('Frutas/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }


  public getHortalizas(){
    return this.afDb.list('Hortalizas/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

public getCosta(){
    return this.afDb.list('Ecuador/Costa/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getSierra(){
    return this.afDb.list('Ecuador/Sierra/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getOriente(){
    return this.afDb.list('Ecuador/Amazonia/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getGalapagos(){
    return this.afDb.list('Ecuador/Galapagos/').valueChanges(); 
    //Esta función devolverá todos los datos que tengamos en el apartado abecedario, en nuestra base de datos
  }

  public getNombres(){
    return this.afDb.list('users').valueChanges();
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }
 
}

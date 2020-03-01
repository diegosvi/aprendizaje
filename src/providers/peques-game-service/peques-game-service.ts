import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the PequesGameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PequesGameServiceProvider {

  constructor( private afDb:AngularFireDatabase, private afAuth:AngularFireAuth) {
    console.log('Hello PequesGameServiceProvider Provider');
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

}

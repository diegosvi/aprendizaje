import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-ahorcado',
  templateUrl: 'ahorcado.html'
})

export class AhorcadoPage {

  readonly LETRAS = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];

  readonly PALABRAS = ["CARACOLA", "TOCINO", "BARCELONA", 
  'BARCO', 'MOTOCICLETA', 'AVION', 'BUQUE', 'AUTOMOVIL', 'FUTBOL', 
  'NATACION', 'KARATE', 'TENNIS', 'BOLOS','ECUADOR', 'MEXICO', 'PANAMA', 'PORTUGAL', 'CHINA'];

  botones: Array<{ letra: string, estado: string }>;

  palabraAdivinadaPorAhora: string;
  palabraAAdivinar: string;
  fallos: Array<string>;
  numFallos: number;
  numAciertos: number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.inicializar();
  }

  inicializar(): void {

    this.numFallos = 0;
    this.numAciertos = 0;
    this.fallos = [];
    this.botones = [];
    let numero = Math.floor(Math.random() * this.PALABRAS.length);
    this.palabraAAdivinar = this.PALABRAS[numero];

    this.generarPalabraAdivinadaPorAhora();
    this.inicializarBotones();
  }

  inicializarBotones(): void {
    for (let i = 0; i < this.LETRAS.length; i++) {
      this.botones.push({ letra: this.LETRAS[i], estado: "boton-no-pulsado-aun" });
    }
  }

  generarPalabraAdivinadaPorAhora(): void {

    this.palabraAdivinadaPorAhora = "";
    for (let i = 0; i < this.palabraAAdivinar.length; i++) {
      this.palabraAdivinadaPorAhora += "-";
      console.log(this.palabraAAdivinar)
    }
  }

  botonClicked(boton: { letra: string, estado: string}): void {

    if (!this.letraAcertada(boton.letra)) {
      if (this.numFallos < 5) {
        this.aumentarFallos(boton.letra);
      } else {
        this.mostrarMensajeDePerder();
      }
      boton.estado = "boton-letra-no-acertada";
    } else {
      if (this.numAciertos == this.palabraAAdivinar.length) {
        this.mostrarMensajeDeGanar();
      }
      boton.estado = "boton-letra-acertada";
    }
  }

  letraAcertada(letra: string): boolean {

    let letraAcertada = false;
    let longitud = this.palabraAAdivinar.length;

    for (let i = 0; i < longitud; i++) {
      if (letra == this.palabraAAdivinar[i]) {
        this.palabraAdivinadaPorAhora =
          (i == 0 ? "" : this.palabraAdivinadaPorAhora.substr(0, i)) +
          letra +
          this.palabraAdivinadaPorAhora.substr(i + 1);
        letraAcertada = true;
        this.numAciertos++;
      }
    }
    return letraAcertada;
  }

  aumentarFallos(letra: string): void {
    this.fallos.push(letra);
    this.numFallos++;
  }

  mostrarMensajeDePerder(): void {
    const alert = this.alertCtrl.create({
      title: 'Ha Perdido',
      subTitle: 'La palabra correcta es:   '+this.palabraAAdivinar+'  ¡Lo siento! Pulse Ok para jugar otra vez.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.inicializar();
        }
      }]
    });
    alert.present();
  }

  mostrarMensajeDeGanar(): void {
    const alert = this.alertCtrl.create({
      title: 'Ha Ganado',
      subTitle: 'La palabra correcta es:  '+this.palabraAAdivinar+'  ¡Felicidades! Pulse Ok para jugar otra vez.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.inicializar();
        }
      }]
    });
    alert.present();
  }
}

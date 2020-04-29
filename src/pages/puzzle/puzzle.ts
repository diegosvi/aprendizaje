import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';
import {DragulaService} from "ng2-dragula";
/**
 * Generated class for the PuzzlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puzzle',
  templateUrl: 'puzzle.html',
})
export class PuzzlePage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuzzlePage');
  }

  imageUrl: string = '../assets/images/1.jpg';
  imageSize: number = 200;
  gridsize: number = 2;
  boxSize: number = 100 / (this.gridsize - 1);
  index: number = 0;
  totalBoxes: number = this.gridsize * this.gridsize;
  Image: any[] = [];
  imageName: string = this.imageUrl.substr(this.imageUrl.lastIndexOf('/') + 1).split('.')[0];
  difficulty: string = '2';
  steps: number = 0;
  ticks: string = '0:00';
  timer: any = Observable.timer(0, 1000);
  timeVar: any;
  gameComplete: Boolean = false;

  indexes: number[] = [];
  position: number[] = [];
  subs = new Subscription();


  constructor(public navCtrl: NavController,  private dragulaService: DragulaService) {

  }




  ngOnInit() {
    this.startGame();
  
    this.subs.add(this.dragulaService.drop("VAMPIRES")
      .subscribe(({ name, el, target, source, sibling }) => {
        var positions = [];
        var items = target.getElementsByTagName("div");
        this.steps++;
        for(var i in items){
          if (Number(i)<4){
            var pieza = items[i];
            positions.push(Number(pieza.id));
          }else if (Number(i)<9){
            var pieza1 = items[i];
            positions.push(Number(pieza1.id));
          }else if (Number(i)<16){
            var pieza2 = items[i];
            positions.push(Number(pieza2.id));
          }


        }
        console.log(positions);
        this.gameComplete = this.isSorted(positions);
        if (this.gameComplete) {

          if (this.timeVar) {
            this.timeVar.unsubscribe();
          }
        }
      })
    );

     }

     drag(event){
      console.log("asdasd")
      console.log(event.dataTransfer)
    }

     isSorted(indexes): Boolean {
      let i: number = 0;
      for (i = 0; i < indexes.length; i++) {
        if (indexes[i] !== i) {
          return false;
        }
      }
      return true;
    }
  
    randomize(imageParts: any[]): any[] {
      let i = 0, img: any[] = [], ran = 0;
      for (i = 0; i < imageParts.length; i++) {
        ran = Math.floor(Math.random() * imageParts.length);
        while (imageParts[ran] == null) {
          ran = Math.floor(Math.random() * imageParts.length);
        }
        img.push(imageParts[ran]);
        this.position.push(imageParts[ran].index);
        imageParts[ran] = null;
      }
      this.printIndexes(this.indexes);
      this.printIndexes(this.position);
      return img;
    }
  
    onDragStart(event: any, data: any): void {
      event.dataTransfer.setData('data', event.target.id);
    }
    onDrop(event: any, data: any): void {
      const origin = event.dataTransfer.getData('data');
      const dest = event.target.id;
  
  
      const originEl = document.getElementById(origin);
      const destEl = document.getElementById(dest);
  
      const origincss = originEl.style.cssText;
      const destcss = event.target.style.cssText;
  
  
      destEl.style.cssText = origincss;
      originEl.style.cssText = destcss;
      originEl.id = dest;
      destEl.id = origin;
  
  
      for (let i = 0; i < this.position.length; i++) {
        if (this.position[i].toString() === originEl.id) {
          this.position[i] = Number(destEl.id);
        } else if (this.position[i].toString() === destEl.id) {
          this.position[i] = Number(originEl.id);
        }
  
      }
  
      this.printIndexes(this.position);
      this.steps++;
      this.gameComplete = this.isSorted(this.position);
      if (this.gameComplete) {
  
        if (this.timeVar) {
          this.timeVar.unsubscribe();
        }
      }
  
     
    }
  
    allowDrop(event): void {
      event.preventDefault();
      event.target.style.opacity = 1;
    }
  
    printIndexes(sorts: number[]): void {
      let i: number = 0, ind: string = '';
      for (i = 0; i < sorts.length; i++) {
        ind += sorts[i].toString() + ' , ';
      }
      console.log(ind);
    }
  
    reRandomize(): void {
      this.gameComplete = false;
      this.Image = this.randomize(this.Image);
    }
  
    startGame(): void {
      this.reset();
      this.initializeGame();
      this.breakImageParts();
      this.reRandomize();
  
      if (this.timeVar) {
        this.timeVar.unsubscribe();
      }
      this.timeVar = this.timer.subscribe(t => {
        this.settime(t);
      });
    }
  
    settime(t: number): void {
      this.ticks = Math.floor(t / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ':' +
        (t % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    }
    breakImageParts(): void {
      for (this.index = 0; this.index < this.totalBoxes; this.index++) {
        const x: string = (this.boxSize * (this.index % this.gridsize)) + '%';
        const y: string = (this.boxSize * Math.floor(this.index / this.gridsize)) + '%';
        let img: ImageBox = new ImageBox();
        img.x_pos = x;
        img.y_pos = y;
        img.index = this.index;
        this.indexes.push(this.index);
        this.Image.push(img);
      }
      this.boxSize = this.imageSize / this.gridsize;
    }
  
    initializeGame(): void {
  
      this.gridsize = Number(this.difficulty);
      console.log(this.gridsize);
      this.boxSize = 100 / (this.gridsize - 1);
      this.index = 0;
      this.totalBoxes = this.gridsize * this.gridsize;
    }
  
    reset(): void {
      this.Image = [];
      this.indexes = [];
      this.position = [];
    }
  
  }
  
  class ImageBox {
    x_pos: string;
    y_pos: string;
    index: number;
  }



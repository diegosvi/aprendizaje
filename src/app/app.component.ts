import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { PrincipalPage } from '../pages/principal/principal';

import {PrincipalPage, AnimalesPage,IntermedioPage,PaisesPage, AvanzadoPage} from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PrincipalPage;
  animal: any = AnimalesPage;
  principal:any = PrincipalPage;
  intermedio: any = IntermedioPage;
  paises: any = PaisesPage;
  avanzado: any = AvanzadoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  irPagina(pagina : any){
    this.rootPage = pagina;
    this._menuCtrl.close();
  }
}


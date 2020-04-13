import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/firestore";

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { PrincipalPage, AbecedarioPage, NumerosPage, MesesPage, DiasPage, ColoresPage,AnimalesPage, MamiferosPage, AvesPage, PecesPage,
          ReptilesPage, AnfibiosPage, AntropodosPage, IntermedioPage,HortalizasPage,FruhoPage, FrutasPage, TransportePage, ProfesionesPage,
          TerrestrePage,AereoPage,MaritimoPage, RelojPage, HoratPage, HoramPage, AvanzadoPage, OrientePage, InsularPage,SierraPage,
          CostaPage, RegistroPage,PintermedioPage,InformacionPage,FigurasPage,ProvinciasPage,JuegocolPage, AhorcadoPage, TabsPage, PracticaPage, 
          AdivinaPage, PbasicoPage, EntradaPage, MoverPage, PavanzadoPage} from '../pages/index.pages'
import {CartasPage} from "../pages/cartas/cartas";


import { PequesGameServiceProvider } from '../providers/peques-game-service/peques-game-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCDeZVpEmo7nkDQ1v4Hnnp7EHfHx3wsvlQ",
  authDomain: "aprendizaje-ee087.firebaseapp.com",
  databaseURL: "https://aprendizaje-ee087.firebaseio.com",
  projectId: "aprendizaje-ee087",
  storageBucket: "aprendizaje-ee087.appspot.com",
  messagingSenderId: "821746363831",
  appId: "1:821746363831:web:2a91036670456036c74c32",
  measurementId: "G-PYNB63NF5K"
};

@NgModule({
  declarations: [
    MyApp,
    // HomePage
    PintermedioPage,
    PavanzadoPage,
    RegistroPage,
    JuegocolPage,
    EntradaPage,
    CartasPage,
    PbasicoPage,
    PrincipalPage,
    AhorcadoPage,
    AdivinaPage,
    PracticaPage,
    TabsPage,
    AvanzadoPage,
    ProvinciasPage,
    AbecedarioPage,
    NumerosPage,
    MesesPage,
    DiasPage,
    ColoresPage,
    OrientePage,
    InsularPage,
    SierraPage,
    CostaPage,
    AnimalesPage,
    MamiferosPage,
    AvesPage,
    PecesPage,
    ReptilesPage,
    AnfibiosPage,
    AntropodosPage,
    IntermedioPage,
    FrutasPage,
    TransportePage,
    ProfesionesPage,
    TerrestrePage,
    AereoPage,
    MaritimoPage,
    HortalizasPage,
    FruhoPage,
    RelojPage,
    HoratPage,
    HoramPage,FigurasPage,InformacionPage,MoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
    PrincipalPage,
    AbecedarioPage,
    EntradaPage,
    NumerosPage,
    MesesPage,
    DiasPage,
    RegistroPage,
    CartasPage,
    ColoresPage,
    AnimalesPage,
    MamiferosPage,
    AvesPage,
    PecesPage,
    AdivinaPage,
    ProvinciasPage,
    ReptilesPage,
    OrientePage,
    InsularPage,
    SierraPage,
    CostaPage,
    PintermedioPage,
    AnfibiosPage,
    TabsPage,
    PracticaPage,
    AhorcadoPage,
    AntropodosPage,
    IntermedioPage,
    FrutasPage,
    TransportePage,
    ProfesionesPage,
    PavanzadoPage,
    TerrestrePage,
    AereoPage,
    MaritimoPage,
    HortalizasPage,
    FruhoPage,
    RelojPage,
    HoratPage,
    HoramPage,
    AvanzadoPage,
    PbasicoPage,
    FigurasPage,
    InformacionPage,
    JuegocolPage,
    MoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PequesGameServiceProvider
  ]
})
export class AppModule {}

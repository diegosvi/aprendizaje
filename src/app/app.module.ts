import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { PrincipalPage, AbecedarioPage, NumerosPage, MesesPage, DiasPage, ColoresPage,AnimalesPage, MamiferosPage, AvesPage, PecesPage,
          ReptilesPage, AnfibiosPage, AntropodosPage, IntermedioPage,HortalizasPage,FruhoPage, FrutasPage, TransportePage, ProfesionesPage,
          TerrestrePage,AereoPage,MaritimoPage, RelojPage, HoratPage, HoramPage, DeportesPage, AvanzadoPage, OrientePage, InsularPage,SierraPage,
          CostaPage, ProvinciasPage, AhorcadoPage, TabsPage, PracticaPage, AdivinaPage, PbasicoPage, EntradaPage} from '../pages/index.pages'
import {Figuras} from "../interface/interface.figuras";
import {FigurasPage} from "../pages/figuras/figuras";
@NgModule({
  declarations: [
    MyApp,
    // HomePage
    //JuegocolPage,
    EntradaPage,
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
    HoramPage,
    DeportesPage,FigurasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
    PrincipalPage,
    AbecedarioPage,
    NumerosPage,
    MesesPage,
    DiasPage,
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
    AnfibiosPage,
    TabsPage,
    PracticaPage,
    AhorcadoPage,
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
    HoramPage,
    AvanzadoPage,
    DeportesPage
    ,PbasicoPage,
    EntradaPage,
    FigurasPage,
    //JuegocolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

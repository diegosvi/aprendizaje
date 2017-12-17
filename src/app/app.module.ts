import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { PrincipalPage, AbecedarioPage, NumerosPage, MesesPage, DiasPage, ColoresPage,AnimalesPage, MamiferosPage, AvesPage, PecesPage,
          ReptilesPage, AnfibiosPage, AntropodosPage, IntermedioPage,HortalizasPage,FruhoPage, FrutasPage, TransportePage, ProfesionesPage,
          TerrestrePage,AereoPage,MaritimoPage, RelojPage, HoratPage, HoramPage, DeportesPage,OceaniaPage,EuropaPage,AfricaPage,AsiaPage,
          AmericaPage,PaisesPage,AmericacPage,AmericanPage,AmericasPage, EuroasiaticoPage, AvanzadoPage, OrientePage, InsularPage,SierraPage,
          CostaPage, ProvinciasPage, AhorcadoPage, TabsPage, PracticaPage} from '../pages/index.pages'
@NgModule({
  declarations: [
    MyApp,
    // HomePage
    PrincipalPage,
    AhorcadoPage,
    PracticaPage,
    TabsPage,
    AvanzadoPage,
    EuroasiaticoPage,
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
    DeportesPage,
    OceaniaPage,
    EuropaPage,
    AfricaPage,
    AsiaPage,
    AmericaPage,
    PaisesPage,AmericacPage,AmericanPage,AmericasPage
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
    EuroasiaticoPage,
    HortalizasPage,
    FruhoPage,
    RelojPage,
    HoratPage,
    HoramPage,
    AvanzadoPage,
    DeportesPage,
    OceaniaPage,
    EuropaPage,
    AfricaPage,
    AsiaPage,
    AmericaPage,
    PaisesPage,AmericacPage,AmericanPage,AmericasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

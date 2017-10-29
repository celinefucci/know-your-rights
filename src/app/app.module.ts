import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidesPage } from '../pages/slides/slides';
import { RightsPage } from '../pages/rights/rights';
import { OnePage } from '../pages/rights/one/one';
import { TwoPage } from '../pages/rights/two/two';
import { ThreePage } from '../pages/rights/three/three';
import { FourPage } from '../pages/rights/four/four';
import { FivePage } from '../pages/rights/five/five';
import { SixPage } from '../pages/rights/six/six';
import { SevenPage } from '../pages/rights/seven/seven';
import { EightPage } from '../pages/rights/eight/eight';
import { NinePage } from '../pages/rights/nine/nine';
import { TenPage } from '../pages/rights/ten/ten';
import { ElevenPage } from '../pages/rights/eleven/eleven';
import { PolicePage } from '../pages/police/police';
import { TipsPage } from '../pages/tips/tips';
import { ConfidentialPage } from '../pages/confidential/confidential';
import { PrivatePage } from '../pages/private/private';
import { TninePage } from '../pages/tnine/tnine';
import { HealthPage } from '../pages/health/health';
import { ReslifePage } from '../pages/reslife/reslife';
import {SavrPage } from '../pages/savr/savr';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    SlidesPage,
    RightsPage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage,
    SevenPage,
    EightPage,
    NinePage,
    TenPage,
    ElevenPage,
    PolicePage,
    TipsPage,
    ConfidentialPage,
    PrivatePage,
    TninePage,
    HealthPage,
    ReslifePage,
    SavrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    SlidesPage,
    RightsPage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage,
    FivePage,
    SixPage,
    SevenPage,
    EightPage,
    NinePage,
    TenPage,
    ElevenPage,
    PolicePage,
    TipsPage,
    ConfidentialPage,
    PrivatePage,
    TninePage,
    HealthPage,
    ReslifePage,
    SavrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

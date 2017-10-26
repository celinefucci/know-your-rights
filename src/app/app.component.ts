import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
// import { SlidesPage } from '../pages/slides/slides';
//import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = TabsPage;
  rootPage: any = TabsPage;
  loader: any;

  constructor(public platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();

    this.platform.ready().then(() => {

      this.storage.get('SlidesPage').then((result) => {

        if(result) {
          this.rootPage = SlidesPage;
          this.storage.set('SlidesPage', true);
          //this.rootPage = TabsPage;
        }
        // else {
        //   this.rootPage = SlidesPage;
        //   this.storage.set('SlidesPage', true);
        // }

        this.loader.dismiss();

      });

    });

    }

    presentLoading() {

      this.loader = this.loadingCtrl.create({
        content: "Loading..."
      });

      this.loader.present();

    }

}

  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     statusBar.styleDefault();
  //     splashScreen.hide();
  //   });
  // }

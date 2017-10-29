import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { PolicePage } from '../police/police';
import { TninePage } from '../tnine/tnine';
import { HealthPage } from '../health/health';
import { ReslifePage } from '../reslife/reslife';
import { SavrPage } from '../savr/savr';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  constructor(public navCtrl: NavController) {

  }

  goToPolice() {
    this.navCtrl.push(PolicePage);
  }

  goToNine() {
    this.navCtrl.push(TninePage);
  }

  goToHealth() {
    this.navCtrl.push(HealthPage);
  }

  goToRes() {
    this.navCtrl.push(ReslifePage);
  }

  goToOther() {
    this.navCtrl.push(SavrPage);
  }


}

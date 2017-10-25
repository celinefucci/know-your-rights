import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RightsPage } from '../rights/rights';
import { ContactPage } from '../contact/contact';
import { TipsPage } from '../tips/tips';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  continueToRights() {
    this.navCtrl.push(RightsPage);
  }

  continueToContacts() {
    this.navCtrl.push(ContactPage);
  }

  continueToTips() {
    this.navCtrl.push(TipsPage);
  }

}

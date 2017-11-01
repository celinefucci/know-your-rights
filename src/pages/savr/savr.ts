import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ConfidentialPage } from '../confidential/confidential';


@IonicPage()
@Component({
  selector: 'page-savr',
  templateUrl: 'savr.html',
})
export class SavrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(ConfidentialPage);
    popover.present();
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(ConfidentialPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavrPage');
  }

}

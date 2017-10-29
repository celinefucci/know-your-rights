import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ConfidentialPage } from '../confidential/confidential';
import { PrivatePage } from '../private/private';


@IonicPage()
@Component({
  selector: 'page-reslife',
  templateUrl: 'reslife.html',
})
export class ReslifePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(MyPopOverPage);
    popover.present();
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PrivatePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReslifePage');
  }

}

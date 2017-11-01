import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ConfidentialPage } from '../confidential/confidential';
import { PrivatePage } from '../private/private';


@IonicPage()
@Component({
  selector: 'page-police',
  templateUrl: 'police.html',
})
export class PolicePage {

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public popoverCtrl: PopoverController) {

  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PrivatePage);
    popover.present();
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PrivatePage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicePage');
  }


}

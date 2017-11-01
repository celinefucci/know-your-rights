import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnePage } from '../rights/one/one';
import { TwoPage } from '../rights/two/two';
import { ThreePage } from '../rights/three/three';
import { FourPage } from '../rights/four/four';
import { FivePage } from '../rights/five/five';
import { SixPage } from '../rights/six/six';
import { SevenPage } from '../rights/seven/seven';
import { EightPage } from '../rights/eight/eight';
import { NinePage } from '../rights/nine/nine';
import { TenPage } from '../rights/ten/ten';
import { ElevenPage } from '../rights/eleven/eleven';



@IonicPage()
@Component({
  selector: 'page-rights',
  templateUrl: 'rights.html',
})
export class RightsPage {

  items = [
    { title: 'Item 1', component: OnePage },
    { title: 'Item 2', component: TwoPage },
    { title: 'Item 3', component: ThreePage },
    { title: 'Item 4', component: FourPage },
    { title: 'Item 5', component: FivePage },
    { title: 'Item 6', component: SixPage },
    { title: 'Item 7', component: SevenPage },
    { title: 'Item 8', component: EightPage },
    { title: 'Item 9', component: NinePage },
    { title: 'Item 10', component: TenPage },
    { title: 'Item 11', component: ElevenPage }
  ];

  public openPage(item: any): void {
       this.navCtrl.push(item.component);
   }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightsPage');
  }

}

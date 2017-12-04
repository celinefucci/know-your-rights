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
    { title: 'Reporting', component: OnePage },
    { title: 'Domestic/Dating Violence', component: TwoPage },
    { title: 'Disclosing Crimes', component: ThreePage },
    { title: 'Participation Process', component: FourPage },
    { title: 'Fair Treatment & Counseling', component: FivePage },
    { title: 'Crime & Violation Fault', component: SixPage },
    { title: 'Describing the Incident', component: SevenPage },
    { title: 'Protection From Retaliation', component: EightPage },
    { title: 'Appeal Access', component: NinePage },
    { title: 'Advisor Accomodations', component: TenPage },
    { title: 'Civil Rights & Religion', component: ElevenPage }
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

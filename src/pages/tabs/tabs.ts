import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RightsPage } from '../rights/rights';
import { ContactPage } from '../contact/contact';
import { TipsPage } from '../tips/tips';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RightsPage;
  tab3Root = ContactPage;
  tab4Root = TipsPage;

  constructor() {

  }
}

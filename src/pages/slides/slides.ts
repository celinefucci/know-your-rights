import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {

  }

  goToHome() {
    this.navCtrl.setRoot(TabsPage);
  }

  slides = [
    {
      title: "Welcome to Know Your Rights!",
      description: "With this application, you can view information regarding Title IX easily and privately. The Students' Bill of Rights, Contacts, and Tips are the three main components of the application.",
      image: "assets/images/welcome.png",
    },
    {
      title: "Students' Bill of Rights",
      description: "A document that outlines the rights of victims and survivors. This includes victims/survivors of sexual assault, domestic violence, dating violence, and stalking.",
      image: "assets/images/file.png",
    },
    {
      title: "Contacts",
      description: "View contact information of important resources at SUNY Poly and in the Utica area. This includes Title IX Coordinators, Mental Health Counselors, and University Police, just to name a few.",
      image: "assets/images/phone-receiver.png",
    },
    {
      title: "Tips",
      description: "View important terms and definitions related to Title IX such as consent, sexual harassment/violence, and drug and alcohol amnesty.",
      image: "assets/images/info.png",
    }
  ];

}

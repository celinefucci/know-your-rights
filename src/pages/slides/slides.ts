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
      description: "With this application, you can easily view information regarding Title IX. The best part is, you can view it privately.",
      image: "assets/images/welcome.png",
    },
    {
      title: "Students' Bill of Rights",
      description: "Need clarification on your rights as a student? No worries, we've got you covered.",
      image: "assets/images/file.png",
    },
    {
      title: "Contacts",
      description: "View contact information of important people, right at your fingertips.",
      image: "assets/images/phone-receiver.png",
    },
    {
      title: "Tips",
      description: "Do you ever wish you had some useful tips?",
      image: "assets/images/info.png",
    }
  ];

}

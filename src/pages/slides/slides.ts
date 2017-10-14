import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {

  }

  continueToHome() {
    this.navCtrl.push(HomePage);
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
      image: "assets/images/contacts.png",
    },
    {
      title: "Tips",
      description: "Do you ever wish you had some useful tips?",
      image: "assets/images/info.png",
    }
  ];

}

import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalController: ModalController, public navCtrl: NavController) {

  }

  goNext() {
    // this.modalController.create(SecondPage).present();
    this.navCtrl.push(SecondPage);
  }

  ngOnDestroy() {
    // Object.keys(this).map(k => {
    //   this[k] = null;
    // });
  }

}

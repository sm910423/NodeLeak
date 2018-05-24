import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  goBack() {
    // this.viewController.dismiss();
    this.navCtrl.pop();
  }

  ngOnDestroy() {
    // Object.keys(this).map(k => {
    //   this[k] = null;
    // });
  }

}

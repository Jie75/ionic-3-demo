import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ToTopComponent } from '../../components/to-top/to-top';

/**
 * Generated class for the ToTopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-top',
  templateUrl: 'to-top.html',
})
export class ToTopPage {

  @ViewChild('content') content: Content;
  @ViewChild('item') item: ElementRef;

  config: any;
  itemHeight;

  list: Array<any> = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.config = {
      content: this.content,
      bottom: '4rem',
      right: '2rem'
    }
  }

  ionViewWillEnter() {
    let margin = getComputedStyle(this.item.nativeElement).marginTop;
    this.itemHeight = this.item.nativeElement.offsetHeight + parseInt(margin)
  }

  ionViewDidEnter() {

  }


}

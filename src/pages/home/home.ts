import { Page } from 'ionic-angular/navigation/nav-util';
import { BasePage } from './../../providers/base-page/base-page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  componentList: Array<componentMenu>;

  constructor(
    public navCtrl: NavController
  ) {
    super();
  }

  ionViewCanEnter() {
    this.componentList = [
      { name: '返回顶部', page: 'ToTopPage' }
    ]
  }

}

export interface componentMenu {
  name: string,
  page: string | Page,
}

import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'ionic-angular/navigation/nav-util';

/*
  Generated class for the BasePageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasePage {

  constructor() { }

  go(navCtrl: NavController, page: string | Page, params?: any) {
    navCtrl.push(page, params)
  }

}

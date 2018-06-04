import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToTopPage } from './to-top';
import { ToTopComponent } from '../../components/to-top/to-top';

@NgModule({
  declarations: [
    ToTopPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ToTopPage),
  ],
  entryComponents:[
    // ToTopComponent
  ]
})
export class ToTopPageModule { }

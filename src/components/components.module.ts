import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ToTopComponent } from './to-top/to-top';
@NgModule({
	declarations: [
		ToTopComponent,
	],
	imports: [
		IonicModule
	],
	exports: [
		ToTopComponent,
	]
})
export class ComponentsModule { }

import { Component, Input, ElementRef, NgZone } from '@angular/core';
import { Content } from 'ionic-angular';

/**
 * Generated class for the ToTopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'to-top',
  templateUrl: 'to-top.html'
})
export class ToTopComponent {

  @Input() config: any;
  @Input() itemHeight: number;

  content: Content;
  isScrolling: boolean = false;
  hidden: boolean = true;

  bottom: string = '1rem';
  right: string = '1rem';

  current: number = 1;
  total: number = 1200;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.content = this.config.content;
    this.bottom = this.config.bottom;
    this.right = this.config.right;
    this.content.ionScroll.subscribe(() => {
      this.zone.run(() => {
        this.hidden = this.isHidden();
        this.isScrolling = true;
        console.log(this.itemHeight)
        this.calculate();
      })
    })
    this.content.ionScrollEnd.subscribe(() => {
      this.zone.run(() => {
        this.isScrolling = false;
      })
    })
    this.content.ionScrollStart.subscribe(() => {

    })

  }

  calculate() {
    let scrollTop=this.content.getContentDimensions().scrollTop;
    this.current=Math.ceil(scrollTop/this.itemHeight)
  }

  isHidden() {
    return this.content.scrollTop < 10
  }

  toTop() {
    this.content.scrollToTop();
  }

}

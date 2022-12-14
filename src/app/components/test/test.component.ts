import { Component } from '@angular/core';
import { Fruits } from 'src/app/fruits';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title: string = 'Mon application';
  price: number = 10;
  total: number = 4;
  more: boolean = false;
  constructor() {
    new Fruits;
    console.log("test");
    if(this.total > 3) {
      this.more = true;
    }
  }
  priceTTC(priceExcl: number) {
    return priceExcl * 1.2;
  }
  random() {
    return Math.random();
  }
  loadMore() {
    console.log('afficher plus');
  }
}

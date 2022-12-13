import { Component } from '@angular/core';
import { Fruits } from 'src/app/fruits';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title = 'Mon application';
  price = 10;
  constructor() {
    new Fruits;
    console.log("test");
  }
  priceTTC(priceExcl: number) {
    return priceExcl * 1.2;
  }
  random() {
    return Math.random();
  }
}

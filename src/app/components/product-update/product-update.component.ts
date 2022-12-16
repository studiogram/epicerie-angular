import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit{
  id: number = this.activatedRoute.snapshot.params['numero'];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['numero']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  // @Input() produit: Produit;
  @Input() i: number;
  produit: Produit;
  constructor(private _produits: ProduitsService) {}
  ngOnInit(): void {
    this.produit = this._produits.readProduit(this.i);
  }
  deleteProduit(i: number) {
    this._produits.deleteProduit(i);
  }
}

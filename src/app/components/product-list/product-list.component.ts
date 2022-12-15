import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  
  produits: Produit[] = [];
  constructor(private _produits: ProduitsService) {}
  ngOnInit(): void {
    this.produits = this._produits.readProduits();
  }
  deleteProduit(i: number) {
    this._produits.deleteProduit(i);
  }
}

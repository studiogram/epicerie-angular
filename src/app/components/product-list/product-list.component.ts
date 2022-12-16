import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  
  produits: Produit[] = [];
  error: string = '';
  constructor(private _produits: ProduitsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.produits = this._produits.readProduits();
    if(this.activatedRoute.snapshot.queryParams['noproduct']) {
      this.error = 'Ce produit n\'existe pas'
    }
  }
  deleteProduit(i: number) {
    this._produits.deleteProduit(i);
  }
}

import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits: Produit[] = [
    {name: 'Cerise', img: '/assets/cerise.jpg', price: 5, stock: 10},
    {name: 'Citron', img: '/assets/citron.jpg', price: 4, stock: 4},
    {name: 'Fraise', img: '/assets/fraise.jpg', price: 3, stock: 10},
    {name: 'Poire', img: '/assets/poire.jpg', price: 2, stock: 4},
  ];

  constructor() { }

  readProduits() {
    /* ici, on fera une demande à l'API */
    return this.produits;
  }

  deleteProduit(i: number) {
    console.log(i);
    console.log(this.produits);
    this.produits.splice(i, 1);
    console.log(this.produits);
  }
}

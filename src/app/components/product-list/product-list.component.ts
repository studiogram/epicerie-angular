import { Component } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  produits: Produit[] = [
    {name: 'Cerise', img: '/assets/cerise.jpg', price: 5, stock: 10},
    {name: 'Citron', img: '/assets/citron.jpg', price: 4, stock: 4},
    {name: 'Fraise', img: '/assets/fraise.jpg', price: 3, stock: 10},
    {name: 'Poire', img: '/assets/poire.jpg', price: 2, stock: 4},
  ]
}

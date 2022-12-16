import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit{
  id: number = this.activatedRoute.snapshot.params['numero'];
  produit: Produit = this._produits.readProduit(this.id);
  constructor(
    private activatedRoute: ActivatedRoute, 
    private _produits: ProduitsService,
    private router: Router
  ) {
    console.log(this.activatedRoute.snapshot.params['numero']);
    if(!this.produit) {
      this.router.navigate(['produits']);
    }
  }
  ngOnInit(): void {

  }
}

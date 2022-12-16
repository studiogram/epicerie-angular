import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.scss']
})
export class ProductUpdateFormComponent {
  @Input() produit: Produit;
  @Input() id: number;
  @Output() successCreateProduit = new EventEmitter<string>();
  constructor(private _produits : ProduitsService) {}
  onSubmit(produitForm: NgForm) {
    this._produits.updateProduit(this.id,produitForm.value);
    this.successCreateProduit.emit('Produit modifié avec succès!')
  }
}

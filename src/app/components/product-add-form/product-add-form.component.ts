import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.scss']
})
export class ProductAddFormComponent {
  @Output() successCreateProduit = new EventEmitter<string>();
  constructor(private _produits : ProduitsService) {}
  onSubmit(produitForm: NgForm) {
    this._produits.createProduit(produitForm.value);
    this.successCreateProduit.emit('Nouveau produit crée avec succès!')
    produitForm.resetForm();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  name: string = 'Dupond';

  onSubmit(animalForm: NgForm) {
    console.log(animalForm.value);
  }
}

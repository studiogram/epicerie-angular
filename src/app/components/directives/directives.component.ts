import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  colorTS: string = '#ff0000';
  valid: boolean = false;
  animaux: string[] = ['chien', 'chat', 'koala']
  animauxObjet: Animal[] = [
    {name: 'chien', quantity: 10}, 
    {name: 'chat', quantity: 4}, 
    {name: 'koala', quantity: 6},
  ]
}

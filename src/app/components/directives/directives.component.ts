import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  colorTS: string = '#ff0000';
  valid: boolean = false;
  animaux: string[] = ['chien', 'chat', 'koala']
  animauxObjet: {name: string, quantity: number}[] = [
    {name: 'chien', quantity: 10}, 
    {name: 'chat', quantity: 4}, 
    {name: 'koala', quantity: 6}, 
  ]
}

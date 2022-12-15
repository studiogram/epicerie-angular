import { Component } from '@angular/core';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private _animaux: AnimauxService) {
  }
  getPropriete: string = this._animaux.testPropriete;
  getMethode(): string {
    return this._animaux.testMethode();
  }
}

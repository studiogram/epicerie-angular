import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
  testPropriete: string = "propriété fonctionne!"
  testMethode(): string {
    return 'Méthode fonctionne'
  }
}

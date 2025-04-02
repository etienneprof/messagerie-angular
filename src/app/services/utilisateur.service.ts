import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateurs : string[] = [];

  constructor() { }

  getUtilisateurs() {
    return this.utilisateurs;
  }

  addUtilisateur(utilisateur: string) {
    if (!this.utilisateurs.includes(utilisateur)) {
      this.utilisateurs.push(utilisateur);
    }
  }
}

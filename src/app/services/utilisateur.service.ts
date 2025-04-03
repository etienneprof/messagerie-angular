import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateurs : User[] = [];

  constructor() { }

  getUtilisateurs() {
    return this.utilisateurs;
  }

  /**
   * Ajoute un utilisateur à condition que le username ne soit pas déjà présent dans la liste
   * @param utilisateur L'utilisateur à ajouter.
   */
  addUtilisateur(utilisateur: User) {
    if (!this.utilisateurs.some(u => u.username == utilisateur.username)) {
      this.utilisateurs.push(utilisateur);
    }
  }

  checkUser(utilisateur: User) {
    return this.utilisateurs.some(u => 
      u.username == utilisateur.username
      && u.password == utilisateur.password
    );
  }
}

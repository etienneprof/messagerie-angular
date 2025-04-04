import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private BASE_URL = "http://10.133.14.60/";

  constructor(private client: HttpClient) { }

  get_utilisateurs() {
    return this.client.get<string[]>(this.BASE_URL + "users");
  }

  /**
   * Ajoute un utilisateur à condition que le username ne soit pas déjà présent dans la liste
   * @param utilisateur L'utilisateur à ajouter.
   */
  add_utilisateur(utilisateur: User) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.client.post<User>(this.BASE_URL + "users", utilisateur, {headers});
  }

  check_user(utilisateur: User) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.client.post<User>(this.BASE_URL + "check-user", utilisateur, {headers});
  }
}

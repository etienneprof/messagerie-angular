import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  message = "";
  username = "";
  password = "";

  constructor(
    private router: Router,
    private service: UtilisateurService
  ) {}

  connecter() {
    if (this.service.checkUser({
      "username" : this.username,
      "password" : this.password
    })) {
      sessionStorage.setItem("user", this.username);
      this.router.navigate(["/messagerie"]);
    } else {
      this.message = "Identifiant ou mot de passe incorrect !";
    }
  }
}

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
    this.service.check_user({
      "username" : this.username,
      "password" : this.password
    }).subscribe({
      next: response => {
        sessionStorage.setItem("user", this.username);
        this.router.navigate(["/messagerie"]);
      },
      error: err => {
        this.message = err.error;
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  username = "";
  password = "";

  constructor(
    private router: Router,
    private service: UtilisateurService
  ) {}

  inscrire() {
    this.service.addUtilisateur({
      "username": this.username,
      "password": this.password
    });
    this.router.navigate(["/connexion"]);
  }
}

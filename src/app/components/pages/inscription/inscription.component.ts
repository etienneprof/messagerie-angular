import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  formulaire_inscription: FormGroup

  constructor(
    private router: Router,
    private service: UtilisateurService
  ) {
    this.formulaire_inscription = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  inscrire() {
    if (this.formulaire_inscription.valid) {
      this.service.add_utilisateur(this.formulaire_inscription.value).subscribe(response => {
        this.router.navigate(["/connexion"]);
      });
    }
  }

  display_error(field : string, error : string) {
    return this.formulaire_inscription?.get(field)?.dirty
        && this.formulaire_inscription?.get(field)?.errors?.[error];
  }
}

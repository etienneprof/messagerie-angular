import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : string[];

  constructor(private service: UtilisateurService) {
    this.users = service.getUtilisateurs();
  }
}

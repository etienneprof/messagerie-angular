import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-messages-form',
  imports: [FormsModule],
  templateUrl: './messages-form.component.html',
  styleUrl: './messages-form.component.css'
})
export class MessagesFormComponent {
  username : string = "";
  content: string = "";

  constructor(private message_service: MessageService, private utilisateur_service: UtilisateurService) {}

  enregistrer() {
    this.message_service.addMessage({
      "author": this.username,
      "date": new Date(),
      "content": this.content
    });
    this.utilisateur_service.addUtilisateur(this.username);
    
    this.content = "";
  }
}

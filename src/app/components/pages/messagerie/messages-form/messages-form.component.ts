import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../../services/message.service';
import { UtilisateurService } from '../../../../services/utilisateur.service';

@Component({
  selector: 'app-messages-form',
  imports: [FormsModule],
  templateUrl: './messages-form.component.html',
  styleUrl: './messages-form.component.css'
})
export class MessagesFormComponent {
  content: string = "";

  constructor(private message_service: MessageService) {}

  enregistrer() {
    let username = sessionStorage.getItem("user");
    if (username) {
      this.message_service.add_message({
        "author": username,
        "content": this.content
      }).subscribe();
      this.content = "";
    }
  }
}

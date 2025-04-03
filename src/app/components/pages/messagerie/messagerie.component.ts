import { Component } from '@angular/core';
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-messagerie',
  imports: [MessagesFormComponent, MessagesListComponent, UsersComponent],
  templateUrl: './messagerie.component.html',
  styleUrl: './messagerie.component.css'
})
export class MessagerieComponent {

}

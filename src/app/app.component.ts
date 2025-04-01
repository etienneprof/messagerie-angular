import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MessagesFormComponent } from './components/messages-form/messages-form.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MessagesFormComponent, MessagesListComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'messagerie-together';
}

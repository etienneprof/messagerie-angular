import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-item',
  imports: [CommonModule],
  templateUrl: './messages-item.component.html',
  styleUrl: './messages-item.component.css'
})
export class MessagesItemComponent {
  message = {
    author: "Etienne",
    date: new Date(),
    content: "C'est supercalifragilistiquexpialidocious... !"
  };
}

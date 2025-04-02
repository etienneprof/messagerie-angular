import { Component } from '@angular/core';
import { MessagesItemComponent } from '../messages-item/messages-item.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message.service';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-messages-list',
  imports: [MessagesItemComponent, CommonModule],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {
  messages : Message[];

  constructor(private service: MessageService) {
    this.messages = service.getMessages();
  }
}

import { Component } from '@angular/core';
import { MessagesItemComponent } from '../messages-item/messages-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [MessagesItemComponent, CommonModule],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {
  messages = [];
}

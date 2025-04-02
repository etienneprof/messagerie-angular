import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-messages-item',
  imports: [CommonModule],
  templateUrl: './messages-item.component.html',
  styleUrl: './messages-item.component.css'
})
export class MessagesItemComponent {
  @Input()
  message ?: Message;
}

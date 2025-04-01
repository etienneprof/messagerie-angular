import { Component } from '@angular/core';
import { MessagesItemComponent } from '../messages-item/messages-item.component';

@Component({
  selector: 'app-messages-list',
  imports: [MessagesItemComponent],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {

}

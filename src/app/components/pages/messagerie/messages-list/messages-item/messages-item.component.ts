import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../../interface/message';

@Component({
  selector: 'app-messages-item',
  imports: [CommonModule],
  templateUrl: './messages-item.component.html',
  styleUrl: './messages-item.component.css'
})
export class MessagesItemComponent implements OnInit {
  @Input()
  message ?: Message;
  is_author = false;

  ngOnInit(): void {
    let username = sessionStorage.getItem("user");
    if (username) {
      if (username == this.message?.author) {
        this.is_author = true;
      }
    }
  }
}

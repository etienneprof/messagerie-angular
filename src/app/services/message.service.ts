import { Injectable } from '@angular/core';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages : Message[] = [];

  constructor() { }

  getMessages() {
    return this.messages;
  }

  addMessage(message : Message) {
    this.messages.push(message);
  }
}

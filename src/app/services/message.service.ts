import { Injectable } from '@angular/core';
import { Message } from '../interface/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private BASE_URL = "http://10.133.14.60/messages";

  constructor(private client: HttpClient) { }

  get_messages() {
    return this.client.get<Message[]>(this.BASE_URL);
  }

  add_message(message : Message) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.client.post<Message>(this.BASE_URL, message, {headers});
  }
}

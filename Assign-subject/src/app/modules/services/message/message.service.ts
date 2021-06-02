import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Subject<string[]>;
  private messageArray: string[];

  constructor() {
    this.messages = new Subject<string[]>();
    this.messageArray = [];
   }

  sendMessage(message: string) {
    this.messageArray.push(message);
    this.messages.next(this.messageArray);
  }

  recieveMessage(): Observable<string[]> {
    return this.messages.asObservable();
  }

  deleteMessage(index) {
    this.messageArray.splice(index, 1);
    this.messages.next(this.messageArray);
  }
}

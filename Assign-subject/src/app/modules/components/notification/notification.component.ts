import { Component, OnInit } from '@angular/core';
import {MessageService} from 'src/app/modules/services/message/message.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages: string[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.recieveMessage().subscribe(message => {
      this.messages = message;
      console.log(this.messages);
    });
  }

  deleteMessage(index): void{
    this.messageService.deleteMessage(index);
  }
}

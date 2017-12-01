import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService должен быть доступен
  // для привязки его к шаблону.
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

}

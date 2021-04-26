import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-messageservice',
  templateUrl: './messageservice.component.html',
  styleUrls: ['./messageservice.component.css']
})
export class MessageserviceComponent implements OnInit {

  constructor(public messageservice: MessageService){ }

  ngOnInit(): void {
  }

}

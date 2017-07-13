import { Component } from '@angular/core';
import {SocketService} from '../../shared/socket.service';

@Component({
  selector: 'app-ping',
  template: `
    <div>
      <h1>Ping</h1>
      <button class="btn btn-primary" type="button" (click)="ping()">Ping</button>
    </div>
    <div *ngIf="pong">
      {{pong}}
    </div>
  `
})
export class PingComponent {
  socket: any;
  count: number;
  pong: string;
  constructor() {
    this.socket = SocketService.getInstance();
    this.count = 0;
    this.socket.on('drop', () => {
      this.count++;
      this.pong = 'Pong ' + this.count;
    });
  }
  ping() {
    console.log('pre ping');
    this.socket.emit('drip');
    console.log('post ping');
  }
}

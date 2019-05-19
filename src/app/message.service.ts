import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string[] = [];

  constructor() {
   }

  add(mess: string) {
    this.message.push(mess);
  }

  clear() {
    this.message = [];
  }
}

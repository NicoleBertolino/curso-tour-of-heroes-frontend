import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  //metodo para pegar as mensagens
  getMessages(): string[]{
    return this.messages;
  }

  add(message: string): void{
    this.messages.push(message);
  }

  clear(): void{
    this.messages = [];
  }

}

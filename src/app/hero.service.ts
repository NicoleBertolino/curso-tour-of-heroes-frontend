import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from './hero.model';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Heroes[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched hero');
    return heroes;
  }
}

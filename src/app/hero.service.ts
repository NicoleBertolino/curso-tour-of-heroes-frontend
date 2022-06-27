import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from './hero.model';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Heroes[]>{
    const heroes = of(HEROES);
    return heroes;
  }
}

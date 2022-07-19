import { Component, OnInit } from '@angular/core';

import { Heroes } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name'];
  heroes: Heroes[] = [];

  constructor(
    private HeroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes);
  }
}

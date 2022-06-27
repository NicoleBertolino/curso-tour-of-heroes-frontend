import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Heroes } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Heroes[] = [];
  selectedHero?: Heroes;

  constructor(private HeroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
  this.HeroService.getHeroes().subscribe(heroes =>
    this.heroes = heroes);
  }
  onSelect(hero: Heroes){
    this.selectedHero = hero;
  }
}

import { Heroes } from './../hero.model';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //iniciando hero services no construtor
  constructor(private heroService: HeroService) { }

  //criando um array de herois do tipo heroes: model
  heroes: Heroes[] = [];

  //inicializa o componente recebendo o getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

  //fazendo o heroService inicializado no construtor receber os valores do get do hero.service.ts
  //subscribe: faz o array de heroes receber o resultado do get do heroService
  //slice delimita o numero de valores que o array vai receber no subscribe
  getHeroes(): void{
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1,5)));
  }
}

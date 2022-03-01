import { Component, OnInit } from '@angular/core';
import { Heroes } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public hero: Heroes = {
    id: 1,
    name: "Homem Aranha"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

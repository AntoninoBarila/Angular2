import { Component, OnInit } from '@angular/core';

import { Hero } from "./hero-detail/hero";
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then (listHeroes => this.heroes= listHeroes);

    //this.heroService.getHeroesSlowly().then(listHeroes => this.heroes = listHeroes);
  }


}
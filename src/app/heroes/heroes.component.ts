import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero } from "./class/hero";
import { HeroService } from './services/hero-service.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes;
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(listHeroes => this.heroes = listHeroes);

    //this.heroService.getHeroesSlowly().then(listHeroes => this.heroes = listHeroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }



}

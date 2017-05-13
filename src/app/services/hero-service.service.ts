import { Injectable } from '@angular/core';

import { Hero } from "../heroes/hero-detail/hero";
import { HEROES } from "../heroes/hero-mock/HeroMock";



@Injectable()
export class HeroService {

  constructor() { }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

}

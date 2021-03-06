import { Component, OnInit } from '@angular/core';

import { Hero } from "../heroes/class/hero";
import { HeroService } from '../heroes/services/hero-service.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

}

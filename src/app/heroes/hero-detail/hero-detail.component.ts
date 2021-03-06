import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { Hero } from "../class/hero";
import { HeroService } from "../services/hero-service.service";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;


  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

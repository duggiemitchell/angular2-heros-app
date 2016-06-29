import { Component, OnInit  } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent {
  // create a heroes array property
  heroes: Hero[] = [];
  // inject service in constructor
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.heroService.getHeroes()
    //  return the 2nd - 5th hero
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  goToDetail() { }
 }

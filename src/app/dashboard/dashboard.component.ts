import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'sw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(result => this.heroes = result.slice(1, 5))
  }

}

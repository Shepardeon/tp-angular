import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'sw-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>
  private searchTerm: Subject<string> = new Subject<string>()

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => (this.heroService.searchHeroes(term)))
    )
  }

  search(term: string): void {
    this.searchTerm.next(term)
  }

}

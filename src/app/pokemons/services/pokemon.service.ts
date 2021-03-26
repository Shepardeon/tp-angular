import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PagedData } from '../model/paged-data';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedexUrlApi: string = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io'

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    let url = `${this.pokedexUrlApi}/pokemons`
    return this.http.get<PagedData<Pokemon>>(url).pipe(
      catchError(this.handleError<PagedData<Pokemon>>("getPokemons"))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}

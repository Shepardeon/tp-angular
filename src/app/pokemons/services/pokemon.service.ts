import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PagedData } from '../model/paged-data';
import { Pokemon } from '../model/pokemon';
import { PokemonFull } from '../model/pokemonFull';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedexUrlApi: string = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io'
  limit: number = 20
  maxOffset: number = 151

  selectedPokemon: PokemonFull

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    let url = `${this.pokedexUrlApi}/pokemons?limit=${this.limit}`
    return this.http.get<PagedData<Pokemon>>(url).pipe(
      catchError(this.handleError<PagedData<Pokemon>>("getPokemons"))
    )
  }

  getPokemonsOffset(offset: number): Observable<PagedData<Pokemon>> {
    let url = `${this.pokedexUrlApi}/pokemons?limit=${this.limit}&offset=${offset}`
    return this.http.get<PagedData<Pokemon>>(url).pipe(
      catchError(this.handleError<PagedData<Pokemon>>("getPokemonsOffset"))
    )
  }

  getPokemon(id: number): Observable<PokemonFull> {
    let url = `${this.pokedexUrlApi}/pokemons/${id}`
    return this.http.get<PokemonFull>(url).pipe(
      catchError(this.handleError<PokemonFull>("getPokemon"))
    )
  }

  getPokemonSearch(value: string): Observable<PagedData<Pokemon>> {
    let url = `${this.pokedexUrlApi}/pokemons?search=${value}` // c'est mal
    return this.http.get<PagedData<Pokemon>>(url).pipe(
      catchError(this.handleError<PagedData<Pokemon>>("getPokemonSearch"))
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

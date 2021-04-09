import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pok-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = []
  offset: number

  @Output() pokemonEmitter = new EventEmitter();
  pokeControl = new FormControl();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
    this.offset = this.pokemonService.limit;
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(result => this.pokemons = result.data)
  }

  onScroll(): void {
    if (this.offset < this.pokemonService.maxOffset) {
      this.pokemonService.getPokemonsOffset(this.offset).subscribe(result => this.pokemons = this.pokemons.concat(result.data))
      this.offset += this.pokemonService.limit
    }
  }

  onClick(id: number): void {
    this.pokemonEmitter.emit(id)
  }

  search(value: string): void {
    if (value) {
      this.pokemonService.getPokemonSearch(value).subscribe(result => this.pokemons = result.data)
      return
    }
    this.getPokemons()
  }

}

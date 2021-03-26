import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pok-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = []

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(result => this.pokemons = result.data)
  }

}

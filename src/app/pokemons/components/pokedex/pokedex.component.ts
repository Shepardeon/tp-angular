import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pok-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemon: Pokemon

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  onPokemonClick(id: number) {
    this.pokemonService.getPokemon(id).subscribe((result) => {
      this.pokemon = result
    })
  }
}

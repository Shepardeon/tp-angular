import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonFull } from '../../model/pokemonFull';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pok-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  
  @Input() pokemon: PokemonFull

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (this.pokemon)
      this.getPokemon()
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.pokemonService.getPokemon(id).subscribe(result => this.pokemon = result)
  }

  goBack(): void {
    this.location.back();
  }

}

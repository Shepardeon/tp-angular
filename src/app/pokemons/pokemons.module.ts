import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    PokemonsRoutingModule,
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }

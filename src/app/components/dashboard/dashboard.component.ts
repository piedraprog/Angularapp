import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokedata/pokemon';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void{
    this.pokemonService.getPokemons()
      .subscribe( pokemons => this.pokemon = pokemons.slice(1, 5))
  }
}

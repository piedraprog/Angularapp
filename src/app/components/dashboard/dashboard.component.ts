import { Component, OnInit } from '@angular/core';
import { Characters, Result } from '../../models';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  character: Characters | Result[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void{
    this.pokemonService.getPokemons()
      .subscribe( resp => this.character = resp) 
      // .subscribe( resp => this.character = resp.slice(0,5)) 
  } 
}

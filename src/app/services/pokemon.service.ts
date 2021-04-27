import { Injectable} from '@angular/core';
import { Observable,of } from 'rxjs';
import {  POKEMONS } from '../components/pokedata/mock-pokemon';
import { Pokemon } from '../components/pokedata/pokemon';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'

  
})
export class PokemonService {
  
  constructor(private messageService: MessageService) { }

  //GET ALL POKEMONS
  getPokemons(): Observable<Pokemon[]>{
    
    const pokemons = of(POKEMONS);
    this.messageService.add('Pokemon Service: Fetched heroes');
    return pokemons;
  }

  //GET ONE POKEMON SPECIFIED BY ID 

  getPokemon(id: number): Observable<Pokemon>{
    
    const pokemon = POKEMONS.find( p => p.id === id) as Pokemon;
    this.messageService.add(`Pokemon Service: fetched poke id=${id}`);
    return of (pokemon);
  }
}

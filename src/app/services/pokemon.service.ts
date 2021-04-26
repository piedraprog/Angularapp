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

  getPokemons(): Observable<Pokemon[]>{
    
    const pokemons = of(POKEMONS)
    this.messageService.add('Pokemon Service: Fetched heroes');
    return pokemons;
  }
}
